"use client";
import Link from "next/link";
import React, { useEffect, useState } from 'react';
import { useRouter } from "next/navigation";
import axios from 'axios';
import toast from "react-hot-toast";
import { buttonVariants } from "@/components/ui/button";
import { UserAuthForm } from "@/components/signup-form";
import { Icons } from "@/components/icons";
import { cn } from "@/lib/utils";

export default function SignUpPage(){
    const router = useRouter();
    
    const [user, setUser] = useState({
        email: "",
        password: "",
        username: "",
    });

    const [buttonDisabled, setButtonDisabled] = useState(false);
    const [loading, setLoading] = useState(false);
    
    const onSignup = async () => {
        try {
            setLoading(true);
            const response = await axios.post("/api/users/signup", user);
            console.log("Signp Success =", response.data);
            toast.success("Signup Successfully");
            router.push("/login");
        } catch (error: any) {
            console.log("Signup failed", error.message);
            toast.error(error.message);
        }finally{
            setLoading(false);
        }
    }

    useEffect(() => {
        if(user.email.length > 0 && user.password.length > 0 && user.username.length > 0){
            setButtonDisabled(false);
        }else{
            setButtonDisabled(true);
        }
    }, [user]);

    return (
        // <div
        //     className="text-center w-80 flex flex-col items-center justify-center min--screen py-2"
        // >
        //     <h1>{loading ? "Processing" : "Signup"}</h1>
        //     <hr/>
        //     <label htmlFor="username">Username</label>
        //     <Input
        //         className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-red"
        //         id="username"
        //         type="text"
        //         value={user.username}
        //         onChange={(e) => setUser({...user, username: e.target.value})}
        //         placeholder="username"
        //     />
        //     <label htmlFor="email">email</label>
        //     <Input
        //         className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
        //         id="email"
        //         type="text"
        //         value={user.email}
        //         onChange={(e) => setUser({...user, email: e.target.value})}
        //         placeholder="email"
        //     />
        //     <label htmlFor="password">password</label>
        //     <Input
        //         className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
        //         id="password"
        //         type="password"
        //         value={user.password}
        //         onChange={(e) => setUser({...user, password: e.target.value})}
        //         placeholder="password"
        //     />
        //     <Button
        //         className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
        //         onClick={onSignup}
        //     >
        //         {buttonDisabled ? "No Sign Up" : "SignUp Here"}
        //     </Button>
        //     <Link href="/login">Visit Login page</Link>
        // </div>
      <div className="container flex h-screen w-screen flex-col items-center justify-center">
        <Link
          href="/login"
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "absolute right-4 top-4 md:right-8 md:top-8"
          )}
        >
          Login
        </Link>
        {/* <div className="hidden h-full bg-muted lg:block" /> */}
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              {/* <Icons.logo className="mx-auto h-6 w-6" /> */}
              <h1 className="text-2xl font-semibold tracking-tight">
                Create an account
              </h1>
              <p className="text-sm text-muted-foreground">
                Enter your email below to create your account
              </p>
            </div>
            <UserAuthForm />
            <p className="px-8 text-center text-sm text-muted-foreground">
              By clicking continue, you agree to our{" "}
              <Link
                href="/terms"
                className="hover:text-brand underline underline-offset-4"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                href="/privacy"
                className="hover:text-brand underline underline-offset-4"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    )
}