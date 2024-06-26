// zod is a library to validate the data..zode schema ko validate krta hai
// documentation=>zod.dev
// In this zod library two things are very important safeParse() and schema
const express = require('express');
const app=express();
const zod = require('zod');
app.use(express.json()); 

console.log(zod);  // object of zod
// safeParse() is used to check the compatibility which is a method of zod
// we will make schema in zod library to validate the data

// creating a schema for strings
// const mySchema = z.string();

const mySchema2 = zod.array(zod.number());

const userSchema = zod.object({
    email:zod.string().email(),
    password:zod.string().min(6),
    country:zod.literal("IN").or(zod.literal('US')),// literal means india ya US m se hi select kr sakte hai aur koi other country nhi
})

app.post('/yashu',(req,res)=>{
    const user = req.body.user;
    let response = userSchema.safeParse(user);
    if(!response.success){
        res.status(411).json({msg:response.error.issues[0].message});
    }
    else{
        res.status(200).json({msg:response.data});
    }
    console.log(response);
    res.send(response);
})
// app.post('/yashu',(req,res)=>{
//     let yashasvi = req.body.yashasvi;
//     let response = mySchema2.safeParse(yashasvi); // data ko safeParse krenge
//     if(!response.success){
//         res.status(411).json({msg:response.error.issues[0].message});
//     }
//     else{
//         res.status(200).json({msg:response.data});
//     }
//     console.log(response);
//     res.send(response);
// })
app.listen(5050,()=>{
    console.log('server connected at port 5050');
})