import React, { useState } from "react";
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';

import {  useLocation, useNavigate } from "react-router-dom";
import AuthenticationForm from "../Components/Authentication/AuthenticationForm";
import Footer from "../Components/Footer/Footer";
import Home from './Home/Home';

import Header from "../Components/Header/Header";
import Loading from "../Components/Loading/Loading";

import { UseToken } from "../hooks";

const Login = () => {
  let navigate = useNavigate();
  let location = useLocation();
const [error,setError]=useState("")

  let from = location.state?.from?.pathname || "/";

  

  const handleLogin = async (e) => {
    e.preventDefault();
    
    const username = e.target.username.value;
    const password = e.target.password.value;
   
    console.log(username,password);

    const usr={
     username:username,
      password:password
    }
    console.log(usr);
    
    try{
      var response = await fetch('http://localhost:8080/api/auth/signin', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(usr)
        
    });
  const responseData = await response.json();

    if (!response.ok) {
      setError(responseData)
      console.log(error)
      alert(response.message);
      throw new Error('Network response was not ok ' + response.statusText);
  }
  if(response.ok){

    e.target.reset();
    alert("You have been logged in successfully");
    navigate('/')
  }

  console.log(responseData);  
    }
    catch(e){
        console.log("error")
    }
    // await createUserWithEmailAndPassword(email, password);
    // await updateProfile({ displayName: name });
    
    // <Router>

    //    <Routes>
    //    <Route exact path="/" component={AuthenticationForm} />
    //     <Route path="/home" component={Home} />
    //    </Routes>

    // </Router>
  };

  

  return (
    <>
      <Header />

      <div style={{ marginTop: "120px" }}>
        {" "}
        <AuthenticationForm error={error}  action={handleLogin} />
      </div>
      <Footer />
    </>
  );
};

export default Login;
