const app = require("express")();
const cors = require("cors");
const Razorpay = require("razorpay");
const shortId = require("shortid");
const path = require("path");
const PORT = process.env.PORT || 3000;
const { urlencoded } = require("express");
const { json } = require("express");
const express = require("express");

// const productData = require('./db.json')

app.use(cors());
// app.use(urlencoded());
app.use(json())
app.use(express.static(path.join(__dirname,"../Project/build")));
// app.get("/about", (req, res) => {
//   res.sendFile(path.join(__dirname, "db.json"));
// });
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../Project/build", "index.html"));
});
// app.get('/api',function(req,res){
//   console.log('total value is :',req.body.post);
// //  price =req.body.total;
//  res.send(`${req.body.post}`)
// })

const razorpay = new Razorpay({
  key_id: "rzp_test_VsCdgSHQjnyYP9",
  key_secret: "MJAKG3pH8qx5OQ8KzIVdvTkQ",
});

app.post("/razorpay", async (req, res) => {
  const product = req.body.post;

  
  console.log(req.body.total);
  const payment_capture = 1;
  const currency = "INR";
  const amount = product;

  const options = {
    currency,
    receipt: shortId.generate(),
    payment_capture,
    amount: amount*100,
  };

  try {
    const response = await razorpay.orders.create(options);
    console.log(response);
    res.json({
      id: response.id,
      currency: response.currency,
      amount: amount,
    });
  } catch (error) {
    console.log(error);
  }

  // res.send(res.json);
});

app.listen(PORT, () => {
  console.log(`listening to ${PORT}`);
});
