"use client";
import Link from "next/link";
import React from "react";
import {useRouter} from "next/navigation";
import axios from "axios";

export default function login(){
    const router = useRouter();
    const [user, setuser] = React.useState({
        email: "",
        password:"",
    })

    const onlogin = async () => {
        try{
            const response = await axios.post("/api/users/login", user);
            console.log("Login sucessfuly", response.data);
            router.push("/profile");
            
        }catch(error:any){
                console.log("login failed",error.message);
                
        }
    }

    return (
        <div className=" items-center flex justify-center min-h-screen flex-col py-2 bg-black ">
            <h1 className=" text-white py-2 ">login</h1>
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
            
<button onClick={onlogin} className=" bg-white rounded mb-4">login</button>

        <Link href="./signup" className="text-white">To signup Page</Link>
        </div>
    );
}