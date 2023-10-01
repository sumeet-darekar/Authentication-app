"use client";
import Link from "next/link";
import React, {useEffect} from "react";
import {useRouter} from "next/navigation";
import  axios  from "axios";
import toast from "react-hot-toast";

export default function signup(){
    const router = useRouter(); 
    const [user, setuser] = React.useState({
        email: "",
        password:"",
        username:""
    })
    const [buttonDisabled, setbuttonDisabled] = React.useState(false);

    const onsignup = async () => {
        try{
                const response = await axios.post("/api/users/signup", user);
                console.log("Signup success",response.data);
                router.push("/login");
        }catch(error: any){
            console.log("Signup failed",error.message);
            
                toast.error(error.message);
        }
    }
    
    useEffect (() => {
            if(user.email.length>0 && user.password.length>0 && user.username.length>0){
                setbuttonDisabled(false);
            }else{
                setbuttonDisabled(true);
            }
    }, [user])

    return (
        <div className=" items-center flex justify-center min-h-screen flex-col py-2 bg-black ">
            <h1 className=" text-white py-2 ">Signup</h1>
            <hr />
            <br />
            <label htmlFor="email" className="text-white">email</label>
            <input 
            id="email"
            type="text"
            value={user.email}
            placeholder="email"
            onChange={(e) => setuser({ ...user, email: e.target.value })}
            ></input>

<label htmlFor="password" className="text-white">password</label>
            <input 
            id="password"
            type="password"
            value={user.password}
            placeholder="password"
            onChange={(e) => setuser({ ...user, password: e.target.value })}
            ></input>

<label htmlFor="username" className="text-white">username</label>
            <input 
        
            id="username"
            type="text"
            value={user.username}
            placeholder="username"
            onChange={(e) => setuser({ ...user, username: e.target.value })}
            ></input>
            
<button onClick={onsignup} className=" bg-white rounded mb-4">{buttonDisabled ? "No signup" :"Signup"}</button>

        <Link href="./login" className="text-white">To login Page</Link>
        </div>
    );
}