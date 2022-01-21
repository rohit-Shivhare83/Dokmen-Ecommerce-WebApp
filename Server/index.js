const app = require("express")();
const cors = require("cors");
const Razorpay = require("razorpay");
const shortId = require("shortid");
const path = require("path");
const PORT = process.env.PORT || 3000;
const { json } = require("express");
const express = require("express");
const crypto = require('crypto');
const bodyParser = require("body-parser");

app.use(bodyParser.json())
app.use(cors());
app.use(json())
app.use(express.static(path.join(__dirname,"../Project/build")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../Project/build", "index.html"));
});


const razorpay = new Razorpay({
  key_id: "rzp_test_VsCdgSHQjnyYP9",
  key_secret: "MJAKG3pH8qx5OQ8KzIVdvTkQ",
});

app.post('/verification', (req, res) => {
	// do a validation
	const secret = '1234567890'
  // var oderid = null ;

	console.log(req.body)

	const crypto = require('crypto')

	const shasum = crypto.createHmac('sha256', secret)
	shasum.update(JSON.stringify(req.body))
	const digest = shasum.digest('hex')

	console.log(digest, req.headers['x-razorpay-signature'])

	if (digest === req.headers['x-razorpay-signature']) {
    
		console.log('request is legit')
    // console.log(JSON.stringify(req.body, null, 4));
    console.log(req.body.payload.payment.entity.id);
    console.log(req.body.payload.payment.entity.description);
    console.log(req.body.payload.payment.entity.order_id);
		// process it
	  // oderid = req.body.payload.payment.entity.order_id;
    // oderid = true;
	} 
  else {
    // pass it
	}
  res.json({ 
    // post1: oderid,
    status: 'ok',

 });
})

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
