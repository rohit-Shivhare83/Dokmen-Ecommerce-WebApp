import React, { useEffect, useState } from "react";
import "../Styles/Checkout.css";
import { CartState } from "../Context/Context";
import swal from "sweetalert";

async function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
}

export default function Checkout() {
  const {
    state: { cart },
  } = CartState();

  const [total, setTotal] = useState();

  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + curr.price * curr.qty, 0));
  }, [cart]);

  const productDetails = {
    product: "",
    quantity: "",
    price: "",
    total: total,
  };

  const [productValues, setProductValues] = useState(productDetails);

  const details = cart.map((item) => ({
    title: item.title,
    Quantity: item.qty,
  }));
  // console.log(JSON.stringify(Object.values(details)));
  // console.log(JSON.stringify(details));

  

  // console.log(productValues);

  async function displayRazorPay() {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );
    if (!res) {
      alert("failed");
      return;
    }

    const verification = await fetch("/verification", {
      method: "POST",
    }).then((v) => v.json());

    const data = await fetch("/razorpay", {
      method: "POST",
      mode: "same-origin",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ post: total }),
    }).then((value) => value.json());
    console.log(data);

    const options = {
      key: "rzp_test_VsCdgSHQjnyYP9",
      currency: data.currency,
      amount: data.amount,
      order_id: data.id,
      name: "Dokmen",
      description: "Thanks for shopping",
      image: "Images/Logo.png",
      notes: {
        OrderDetails: JSON.stringify(details),
        Name: formValues.firstName + formValues.lastName,
        Address:
          formValues.address +','+
          formValues.city +','+
          formValues.state +','+
          formValues.pincode,
        PhoneNo: formValues.phoneNo,
        Total_Paid: total
      },

      handler: function (response) {
        // alert(response.razorpay_payment_id);
        // alert(response.razorpay_order_id);
        // alert(response.razorpay_signature);
        // console.log(verification.post1);
        // console.log(verification.past1);
        // alert(verification.staus1);
        // const nvae = "request is legit"
        // console.log(verification);
        // console.log(orderDetails());
        swal({
          title: "Payment SuccessFull",
          text: `Your Order_Id is "${response.razorpay_order_id}"
          Your PAyment_Id is "${response.razorpay_payment_id}" `,
          icon: "success",
        });

        setInterval(() => {
          window.location = `https:wa.me/+919867348169?text=
          +Name :  +${formValues.firstName + formValues.lastName} +%0a
          Address :  +${formValues.address} +%0a
          +City :  +${formValues.city} +%0a
          +State :  +${formValues.state} +%0a
          +Phone No :  +${formValues.phoneNo} +%0a
          +PinCode :  +${formValues.pincode} +%0a
          +Payment Id :  +${response.razorpay_payment_id} +%0a
          +Razorpay Payment Id : +%0a +${response.razorpay_order_id} +%0a
          +Order: +%0a +${JSON.stringify( details)} +%0a
          +Total : +${total} +%0a
        `;

        }, 5000);
      },
      prefill: {
        name: formValues.firstName,
        contact: formValues.phoneNo,
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.on("payment.failed", function (response) {
      // alert(response.error.code);
      // alert(response.error.description);
      // alert(response.error.source);
      // alert(response.error.step);
      // alert(response.error.reason);
      // alert(response.error.metadata.order_id);
      // alert(response.error.metadata.payment_id);
      swal({
        title: "Payment Failed",
        text: `${response.error.code}
               Please Try Again `,
        icon: "error",
      });
    });

    paymentObject.open();
  }

  const initialValues = {
    firstName: "",
    lastName: "",
    phoneNo: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
  };

  const [formValues, setformValues] = useState(initialValues);
  const [formError, setformError] = useState({});
  const [isSubmit, setisSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformValues({ ...formValues, [name]: value });
    // console.log(formValues);
  };

  const handleSubmit = (e) => {
    // console.log(isSubmit);
    e.preventDefault();
    setformError(validate(formValues));
    setisSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(formError).length === 0 && isSubmit) {
      displayRazorPay();
    }
  },[formError]);

  const validate = (values) => {
    const errors = {};
    if (!values.phoneNo) {
      errors.phoneNo = "Phone No. is Required";
    }

    if (!values.firstName) {
      errors.firstName = "First Name is Required";
    }
    if (!values.lastName) {
      errors.lastName = "Last Name is Required";
    }
    if (!values.address) {
      errors.address = "Address is Required";
    }
    if (!values.city) {
      errors.city = "City is Required";
    }
    if (!values.state) {
      errors.state = "State is Required";
    }
    if (!values.pincode) {
      errors.pincode = "Pin Code is Required";
    }

    return errors;
  };
  console.log(formError);

  return (
    <section>
      <div className="shipping-details">
        <div className="accordion accordion-flush" id="accordionFlushExample">
          <div className="accordion-item">
            <p className="accordion-header" id="flush-headingOne">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                Order Summary : <b>Rs.{total}</b>
              </button>
            </p>
            <div
              id="flush-collapseOne"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                {cart.map((item) => (
                  <>
                    <div className="product-details" key={item.id}>
                      <div>
                        <span style={{ position: "relative" }}>
                          <img
                            src={item.imgUrl}
                            alt=""
                            height="80px"
                            width="80px"
                          />
                          <span
                            className="position-absolute top-0 start-100 translate-middle badge rounded-pill"
                            style={{ backgroundColor: "black" }}
                          >
                            {item.qty}
                          </span>
                        </span>
                        {item.title}
                      </div>

                      <div className="item-price">
                        Rs {item.price * item.qty}
                      </div>
                    </div>
                  </>
                ))}

                <div className="price-details">
                  <div className="price-title">
                    <p>Total</p>
                    {/* <p>Shipping</p> */}
                  </div>
                  <div className="price">
                    <p>{total}</p>
                    {/* <p>Free</p> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-body">
          <form onSubmit={handleSubmit}>
            <h4>Shipping Details</h4>

            <div className="textfield-container">
              <div className="t-1">
                <input
                  type="number"
                  placeholder="Phone No."
                  className="textfield"
                  value={formValues.phoneNo}
                  onChange={handleChange}
                  name="phoneNo"
                />

                <p>{formError.phoneNo}</p>
              </div>

              <div className="t-2">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  className="textfield"
                  value={formValues.firstName}
                  onChange={handleChange}
                />
                <p>{formError.firstName}</p>
              </div>

              <div className="t-3">
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  className="textfield"
                  value={formValues.lastName}
                  onChange={handleChange}
                />
                <p>{formError.lastName}</p>
              </div>

              <div className="t-4">
                <input
                  type="text"
                  name="address"
                  placeholder="Address"
                  className="textfield"
                  value={formValues.address}
                  onChange={handleChange}
                />
                <p>{formError.address}</p>
              </div>

              <div className="t-5">
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  className="textfield"
                  value={formValues.city}
                  onChange={handleChange}
                />
                <p>{formError.city}</p>
              </div>

              <div className="t-6">
                <input
                  type="text"
                  name="state"
                  placeholder="State"
                  className="textfield"
                  value={formValues.state}
                  onChange={handleChange}
                />
                <p>{formError.state}</p>
              </div>

              <div className="t-7">
                <input
                  name="pincode"
                  type="number"
                  placeholder="Pin Code"
                  className="textfield"
                  value={formValues.pincode}
                  onChange={handleChange}
                />
                <p>{formError.pincode}</p>
              </div>
            </div>

            <span className="submit-btn">
              <button onClick={handleSubmit}>Make Payment</button>
            </span>
          </form>
        </div>
      </div>

      <div className="billing-price-details">
        {cart.map((item) => (
          <>
            <div className="product-details">
              <div>
                <span style={{ position: "relative" }}>
                  <img src={item.imgUrl} alt="" height="80px" width="80px" />
                  <span
                    className="position-absolute top-0 start-100 translate-middle badge rounded-pill"
                    style={{ backgroundColor: "black" }}
                  >
                    {item.qty}
                  </span>
                </span>

                {item.title}
              </div>

              <div className="item-price">Rs {item.price * item.qty}</div>
            </div>
          </>
        ))}

        <div className="price-details">
          <div className="price-title">
            <p>Total</p>
          </div>
          <div className="price">
            <p>{total}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
