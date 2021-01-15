const exp=require("express");
const app=exp();
app.use(exp.json());


//connecting front &back end in angular application
const path=require("path")
app.use(exp.static(path.join(__dirname,"./dist/app")))
const dburl="mongodb+srv://hari:hari@cluster0.nssgj.mongodb.net/test";
const mc=require("mongodb").MongoClient;
mc.connect(dburl,{useNewUrlParser:true,useUnifiedTopology:true},(error,client)=>{
    if(error){
        console.log("during the connecting problem with dburl");
        }
    else{
        dbo=client.db("nandu");
        console.log("connected db");
        
    }    
})

//assign port number
const portNo=1717;
app.listen(portNo,()=>{console.log(`server running on ${portNo}..`)})

// get student only
app.get("/studata",(req,res)=>{

    dbo.collection("sample").find().toArray((err,useArray)=>{
        
       if (err){
        console.log("error in finding data",err)
       }
       else{
           res.json({message:useArray})
       }
    })
})

//post method
app.post("/studentdata/:id",(req,res)=>{
    dbo.collection("sample").findOne({id:req.params.id},(err,result)=>{
        console.log(req.params.id);
        if(err){
            console.log("error in get");
        }
        else if(result==null){
            res.send({message:"given credentials are wrong.please check and try again"})
        }
        else{
            res.json({message:result})
            console.log(res,"15434");
        } 
    })
})
