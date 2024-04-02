import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import styles from "./styles.module.css";

const Signup = () => {
	const [data, setData] = useState({
		firstname: "",
		lastname: "",
		email: "",
		password: "",
	});

	let history=useHistory(null)
	const handleSubmit=async(e)=>{
		e.preventDefault();
		let firstname = Array.isArray(data.firstname) ? data.firstname[0] : data.firstname;
		let lastname = Array.isArray(data.lastname) ? data.lastname[0] : data.lastname;
		let email = Array.isArray(data.email) ? data.email[0] : data.email;
		let password = Array.isArray(data.password) ? data.password[0] : data.password;
		const url="http://localhost:8001/signupAuth"
		const response = await fetch(url, {
			method: "POST",
			headers: {
			  "Content-Type": "application/json",
			},
			body: JSON.stringify({firstname:firstname,lastname:lastname,email:email,password:password})
		  });
		  const json=await response.json()
		//   console.log(json)
		if(json.success)
		{
			localStorage.setItem('Tag-Number',json.Token)
			history.push('/login')
		}
		else{
			alert('INVALID CREDENTIALS..Check Again!')
		}
		
	}

	const handleChange=(e)=>{
		setData({...data,[e.target.name]:[e.target.value]})
	}
	return (
		<div className={styles.signup_container}>
			<div className={styles.signup_form_container}>
				<div className={styles.left}>
					<h1>Welcome Back</h1>
					<Link to="/login">
						<button type="button" className={styles.white_btn}>
							Sign in
						</button>
					</Link>
				</div>
				<div className={styles.right}>
					<form className={styles.form_container} onSubmit={handleSubmit}>
						<h1>Create Account</h1>
						<input
							type="text"
							placeholder="First Name"
							name="firstname"
							onChange={handleChange}
							value={data.firstname}
							required
							className={styles.input}
						/>
						<input
							type="text"
							placeholder="Last Name"
							name="lastname"
							onChange={handleChange}
							value={data.lastname}
							required
							className={styles.input}
						/>
						<input
							type="email"
							placeholder="Email"
							name="email"
							onChange={handleChange}
							value={data.email}
							required
							className={styles.input}
						/>
						<input
							type="password"
							placeholder="Password"
							name="password"
							onChange={handleChange}
							value={data.password}
							required
							className={styles.input}
						/>
						{/* {error && <div className={styles.error_msg}>{error}</div>} */}
						<button type="submit" className={styles.green_btn}>
							Sign Up
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Signup;