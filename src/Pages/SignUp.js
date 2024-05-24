
import { useLocation, useNavigate } from "react-router-dom";
import React from "react";
import AuthenticationForm from "../Components/Authentication/AuthenticationForm";
import Header from "../Components/Header/Header";

import Loading from "../Components/Loading/Loading";
import Footer from "../Components/Footer/Footer";
import { UseToken } from "../hooks";
import { TiArrowMaximiseOutline } from "react-icons/ti";

const SignUp = () => {
  let navigate = useNavigate();
  let location = useLocation();


  let from = location.state?.from?.pathname || "/";
  
  const handleSignup = async (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const role= ["user"];
    console.log(username,email,password);

    const usr={
      username:username,
      email:email,
      password:password,
      role:role
    }
    console.log(usr);
    
    try{
      const response = await fetch('http://localhost:8080/api/auth/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(usr)
        
    });
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
  }
  

  const responseData = await response.json();
  if(response.ok){
    e.target.reset();
    alert("You have been logged in successfully");
    navigate('/')
  }
    }
    catch(e){
      console.log(e);
    }
    // await createUserWithEmailAndPassword(email, password);
    // await updateProfile({ displayName: name });
    
  };
  
  return (
    <>
      <Header />

      <div style={{ marginTop: "120px" }}>
        <AuthenticationForm action={handleSignup} error={"error"}/>
      </div>
      <Footer />
    </>
  );
};

export default SignUp;
