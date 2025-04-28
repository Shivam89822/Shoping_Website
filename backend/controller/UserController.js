const User = require('../modules/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

function idGenerator() {
    const now = new Date();
    let id = `${now.getFullYear()}${now.getMonth() + 1}${now.getDate()}${now.getHours()}${now.getMinutes()}${now.getSeconds()}`;
    return Number(id); // optional: convert to number if needed
}

exports.createUser = async (req, res) => {
    try {
        const doUserExist = await User.findOne({ email: req.body.email });
        if (doUserExist) {
            return res.status(409).json({ message: "Email already registered." });
        }

        const userInfo = new User(req.body);
        const hash = bcrypt.hashSync(req.body.password, 10);
        userInfo.password = hash;
        userInfo['userId'] = idGenerator();

        const savedUser = await userInfo.save();
        console.log("User saved ✅");
        res.json(savedUser);
    } catch (e) {
        console.error("User not saved ❌", e);
        res.status(500).json({ message: "Something went wrong", error: e.message });
    }
}

exports.Login=async(req,res)=>{
    try{
        const user= await User.findOne({email:req.body.email});
        if(!user){
            console.log("Email not found")
            return res.sendStatus(404);
        }
        const auth = bcrypt.compareSync(req.body.password, user.password);
        if(!auth){
            console.log("password dont match")
            return res.sendStatus(404);
        }
        const tokenCode=jwt.sign({email:req.body.email},'shivam',{ expiresIn: '1h' });
        console.log("Login✅")
        return res.json({token:tokenCode});
    }catch(e){
        console.log("Some server error❌")
        return res.sendStatus(500);
    }
}


exports.verification = async (req, res) => {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.sendStatus(401); 
  
    try {
      const decoded = jwt.verify(token, 'shivam'); // Verify token
      const user = await User.findOne({ email: decoded.email }).select("-password"); // ✅ FIXED
  
      if (!user) {
        console.log("User not found ❌");
        return res.sendStatus(404); 
      }
  
      console.log("Authorized✅");
      res.json(user); 
    } catch (e) {
      console.log("unAuthorized❌", e.message);
      return res.sendStatus(403); 
    }
  };
  