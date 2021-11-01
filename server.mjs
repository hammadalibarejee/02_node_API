import express from "express";
import morgan from 'morgan';
const port=3000;

// const port=process;
const app = express();
let users=[];
app.use(express.json());
app.get("/users",(req,res)=>{
    res.send(users)
})


app.post("/users",(req,res)=>{
    if(! req.body.name || req.body.address || req.body.email){
        res.status(400).send("invalid data");
    }
    else{
        users.push({
            name:req.body.name,
            email:req.body.email,
            address:req.body.address
        })
        res.send("User Created")
    }
})

app.put("/user/:id",(req,res)=>{
    if (users[req.params.id]){
        if(req.body.name){
            users[req.params.id].name=req.body.name;
        }
        if(req.body.email){
            users[req.params.id].email=req.body.email;
        }
        if(req.body.address){
            users[req.params.id].address=req.body.address;
        }
        res.send(users[req.params.id])
    }
    else{
        res.send("user not found ")
    }
})

app.delete("/user/:id",(req,res)=>{
    if (users[req.params.id]){
        users[req.params.id]={}

    }
    else{
        res.send("user not found")
    }
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })
