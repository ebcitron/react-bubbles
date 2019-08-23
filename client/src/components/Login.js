import React, {useState} from "react";
import axios from "axios";

const Login = (props) => {
console.log('props', props);
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
 const [credentials, setCredentials] = useState({username: '', password: ''});
  
 const handleChange = e => {
   setCredentials({...credentials, [e.target.name]: e.target.value});
 };
 
 const handleSubmit = e => {
   e.preventDefault();
   axios.post('http://localhost:5000/api/login', credentials)
  .then(res=> {
    console.log('res', res);
    localStorage.setItem('token', res.data.payload);
    props.history.push('/api/colors');
  })
  .catch(err => console.log('err', err))
 }

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <div>
        <form onSubmit = {handleSubmit}>
          <input
            type="text"
            name="username"
            value={credentials.username}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
          />
          <button>Log in</button>
        </form>
      </div>
    </>
  );
};

export default Login;
