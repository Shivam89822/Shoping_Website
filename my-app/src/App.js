import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './login/Login';
import Home from './Home';
import Main from './Main';
import SearchPage from './SearchPage';
import { useEffect, useState } from 'react';
import axios from "axios";

function App() {
    const [loader, setLoader] = useState(true);
    const[category,setCategory]=useState("General")
  const [authorized, setAuthorized] = useState(null); // null for loading state
  const [user, setUser] = useState(null);

  async function verify() {
    const token = localStorage.getItem("token");
    if (!token) {
      setAuthorized(false);
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:8080/user",
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setUser(response.data);
      setAuthorized(true);
    } catch (error) {
      localStorage.removeItem("token");
      setAuthorized(false);
    }
  }

  useEffect(() => {
    verify();
  }, []);

  if (authorized === null) return <div>Loading...</div>;

  return (
    <Router>
      <Routes>
        <Route path="/login" element={!authorized ? <Login /> : <Navigate to="/home" />} />

        {/* Home layout with nested routes */}
        <Route path="/home" element={authorized ? <Home setCategory={setCategory} category={category}/> : <Navigate to="/login" />}>
          <Route path="" element={<Main setCategory={setCategory} category={category}/>} />
          <Route path="searchpage" element={<SearchPage user={user} setUser={setUser} setCategory={setCategory} category={category} authorized={authorized} setAuthorized={setAuthorized}/>} />
        </Route>

        {/* Default redirect */}
        <Route path="*" element={<Navigate to={authorized ? "/home/main" : "/login"} />} />
      </Routes>
    </Router>
  );
}

export default App;
