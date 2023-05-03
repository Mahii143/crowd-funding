import './App.css';
import { Routes, Route, useNavigate } from "react-router-dom";
// import '../src/s'
import Navbar from './components/Navbar';
import Main from './components/Main';
import ProjectView from './components/ProjectView';
import AddProjectForm from './components/AddProjectForm';
import ErrorPage from './components/ErrorPage';
import Default from './components/Default';
import { useEffect, useState } from 'react';

function App() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [user, setUser] = useState(null);
  const [uname, setUname] = useState(null);
  const [funder, setFunder] = useState(null);
  const [password, setPassword] = useState(null);
  const handleSignup = async (e) => {
    e.preventDefault();
    // console.log('submit signup!');
    await fetch('http://localhost:8080/auth', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ 'uname': uname, 'password': password, "funder": funder }),
    });
    console.log('submit signup!', user, uname, funder, password);
  }

  useEffect(() => {
    fetch('http://localhost:8080/auth')
      .then(res => res.json())
      .then(res => setData(res))

    console.log(data);
  }, [data.length]);

  const handleLogin = (e) => {
    e.preventDefault();

    for(var dt of data) {
      console.log(dt);
      if(uname!==null && dt.uname === uname && dt.password === password) {
        // setUser(uname);
        localStorage.setItem('uname',uname);
        navigate("/");
        return;
      }
    }

  }
  if (localStorage.getItem('uname') === 'null' || localStorage.length === 0) {
    return (
      <div className="main-signup">
        <input type="checkbox" id="chk" aria-hidden="true" />
        <div className="signup">
          <form onSubmit={handleSignup}>
            <label htmlFor="chk" aria-hidden="true">Sign up</label>
            <input type="text" name="txt" placeholder="User name" required="" onChange={(e) => { setUname(e.target.value) }} />
            <input type="text" name="funder" placeholder="Enter true or false" required="" onChange={(e) => { setFunder(e.target.value) }} />
            <input type="password" name="pswd" placeholder="Password" required="" onChange={(e) => { setPassword(e.target.value) }} />
            <button>Sign up</button>
          </form>
        </div>
        <div className="login">
          <form onSubmit={handleLogin}>
            <label htmlFor="chk" aria-hidden="true">Login</label>
            <input type="text" name="text" placeholder="User name" required="" onChange={(e) => { setUname(e.target.value) }} />
            <input type="password" name="pswd" placeholder="Password" required="" onChange={(e) => { setPassword(e.target.value) }} />
            <button>Login</button>
          </form>
        </div>
      </div>
    );
  }
  else {
    return ( // build the login signup infront of this
      <div className="App">
        <Navbar></Navbar>
        <Routes>
          <Route path='/*' element={<Main />} >
            <Route path='' element={<Default />} />
            <Route path='user/:id' loader={({ params }) => { console.log(params.id); }} element={<ProjectView />} onClick={() => window.location.reload()} />
            <Route path='user/new' element={<AddProjectForm />} />
            <Route path='*' element={<ErrorPage />} />
          </Route>
        </Routes>
      </div>
    );
  }
}

export default App;
