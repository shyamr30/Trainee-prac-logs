const express = require('express')
const app = express();
require('dotenv').config();


console.log(process.env.ENV_MODE);

app.get('/healthcheck', (req, res)=>{
    if(process.env.ENV_MODE === "production")
        res.status(200).send({"code": 200, "msg": "Production Mode: Healthcheck is success !"})
    else
        res.status(200).send({"code": 200, "msg": "Local Mode: Healthcheck is success!"})
})

app.listen(3000, () =>{
    console.log("Server is running...");
})
