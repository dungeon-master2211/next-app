import { NextApiRequest, NextApiResponse } from "next"

interface Signup{
    name:string
    email:string
    password:string
}

export async function POST(req:Request,res:NextApiResponse){
    try{
        console.log(req)
        const body = await req.json()
        console.log(body)
        return Response.json({message:'User added successfully!'})
    }catch(e){
        console.log(e)
        return Response.json({
            error:'error signing up user'
        })
    }
    
}