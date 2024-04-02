import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Login = () => {
	const [login,setLogin]=useState({"email":"","password":""})

	let history=useHistory(null)
	const handleSubmit=async(e)=>{
		e.preventDefault();
		let email = Array.isArray(login.email) ? login.email[0] : login.email;
		let password = Array.isArray(login.password) ? login.password[0] : login.password;
		const url="http://localhost:8001/login"
		const response = await fetch(url, {
			method: "POST",
			headers: {
			  "Content-Type": "application/json",
			},
			body: JSON.stringify({email:email,password:password})
		  });
		  const json=await response.json()
		//   console.log(json)
		if(json.success)
		{
			localStorage.setItem('Tag-Number',json.Tag_Number)
			history.push('/')
		}
		else{
			alert('LOGIN FAILED..Check Again!')
		}
		
	}
	const changing=(e)=>{
		setLogin({...login,[e.target.name]:[e.target.value]})
	}
	return (
		<div className={styles.login_container}>
			<div className={styles.login_form_container}>
				<div className={styles.left}>
					<form className={styles.form_container} onSubmit={handleSubmit}>
						<h1>Login to Your Account</h1>
						<input
							type="email"
							placeholder="Email"
							name="email"
							onChange={changing}
							value={login.email}
							required
							className={styles.input}
						/>
						<input
							type="password"
							placeholder="Password"
							name="password"
							onChange={changing}
							value={login.password}
							required
							className={styles.input}
						/>
					 
						<button type="submit" className={styles.green_btn}>
							Sign In
						</button>
					</form>
				</div>
				<div className={styles.right}>
					<h1>New Here ?</h1>
					<Link to="/signup">
						<button type="button" className={styles.white_btn}>
							Sign Up
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Login;