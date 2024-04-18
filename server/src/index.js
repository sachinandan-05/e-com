
import dotenv from "dotenv"
import app from "./app.js";

dotenv.config(
    {
        path:".env"
    }
)
app.get("/",(req,res)=>{
    res.send("welcome")
})


app.listen(process.env.PORT || 8080 ,()=>{
    console.warn( `app is lising on port: ${process.env.PORT}`);
})
// console.log(process.env.PORT)