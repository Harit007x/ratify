"use client";
import Link from "next/link";
import React, { useEffect, useState } from 'react';
import { useRouter } from "next/navigation";
import axios from 'axios';
import toast from "react-hot-toast";

export default function LoginPage(){
    const router = useRouter();
    const [user, setUser] = useState({
        email: "",
        password: "",
    })
    
    const [buttonDisabled, setButtonDisabled] = useState(false);
    const [loading, setLoading] = useState(false);

    const onLogin = async () => {
        try {
            setLoading(true);
            const response = await axios.post("/api/users/login", user);
            console.log("Login Success =", response.data);
            router.push("/login");
            toast.success("Login Successfully");
            router.push("/profile");
        } catch (error: any) {
            console.log("Login failed", error.message);
            toast.error(error.message);
        }finally{
            setLoading(false);
        }
    }

    useEffect(() => {
        if(user.email.length > 0 && user.password.length > 0 && user.password.length > 0){
            setButtonDisabled(false);
        }else{
            setButtonDisabled(true);
        }
    }, [user])

    return (
        <div
            className="flex flex-col items-center justify-center min--screen py-2"
        >
            <h1>{loading ? "Processing" : "Login"}</h1>
            <hr/>
            <label htmlFor="email">email</label>
            <input 
                className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
                id="email"
                type="text"
                value={user.email}
                onChange={(e) => setUser({...user, email: e.target.value})}
                placeholder="email"
            />
            <label htmlFor="password">password</label>
            <input 
                className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
                id="password"
                type="password"
                value={user.password}
                onChange={(e) => setUser({...user, password: e.target.value})}
                placeholder="password"
            />
            <button
                className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
                onClick={onLogin}
            >
                Login Here
            </button>
            <Link href="/signup">Visit Signup page</Link>
        </div>
    )
}