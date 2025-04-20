import { NextApiRequest, NextApiResponse } from "next"
import { PrismaClient } from "../../generated/prisma/client"
interface Signup{
    name:string
    email:string
    password:string
}
const client = new PrismaClient()
export async function POST(req:Request,res:NextApiResponse){
    try{
        console.log(req)
        const body = await req.json()
        // Store body in db
        await client.user.create({
            data:{
                name:body.name,
                email:body.email,
                password:body.password
            }
        })
        return Response.json({message:'User added successfully!'})
    }catch(e){
        console.log(e)
        return Response.json({
            error:'error signing up user'
        })
    }
    
}