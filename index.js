const express = require('express');
const app = express();
if(process.env.NODE_ENV != 'Production'){
    console.log("dotenv")
    require('dotenv').config()
}
const mongoose = require("mongoose");
const twilioRepo = require("./repositories/twiliorepo")

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.post("/success" , async (req , res) => {
  console.log(req.body)
  twilioRepo.create(req.body)
    .then(response => {
      res.send({status : true , response})
    }).catch(err => {
      res.send({status : false , err})
    })

})

app.post("/failure" , async (req , res) => {
  console.log(req.body)
  res.send({status : true , response})

})



mongoose
  .connect(
    process.env.URI,
    { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }
  )
  .then(() => {
    app.listen(process.env.PORT || 4242);
    console.log(`Server connected successfully on port ${process.env.PORT}.`);
  })
  .catch((err) => {
    console.log(err);
  });
