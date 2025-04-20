"use client"

import axios from "axios"
import { Preahvihear } from "next/font/google"
import { ChangeEvent, useState } from "react"

export default function SignUp(){
    const [form,setForm] = useState({
        name:'',
        email:'',
        password:''
    })
    function changeField(e:ChangeEvent<HTMLInputElement>){
        const target = (e.target as HTMLInputElement)
        setForm(prev=>({...prev, [target.name]:target.value}))
    }
    async function submitForm(){
        
        const res = await axios.post('http://localhost:3000/api/signup',form)
        console.log(res.data)
    }
    return <div className="flex justify-center items-center">
        <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md ">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Create an Account</h2>
        
        
        <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-600">Name</label>
            <input type="text" id="name" name="name" value={form.name} onChange={(e)=>changeField(e)} required
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        
        <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email</label>
            <input type="email" id="email" name="email" value={form.email} onChange={(e)=>changeField(e)} required
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>

        <div className="pb-2">
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">Password</label>
            <input type="password" id="password" name="password" value={form.password} onChange={(e)=>changeField(e)} required
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>

        <button type="submit" onClick={submitForm}
                className="cursor-pointer w-full bg-blue-600 text-white py-2 rounded-xl font-semibold hover:bg-blue-700 transition duration-300">
            Sign Up
        </button>
        

        <p className="text-sm text-center text-gray-500 mt-6">
        Already have an account?
        <a href="#" className="text-blue-600 hover:underline">Log in</a>
        </p>
    </div>
  </div>
    
}