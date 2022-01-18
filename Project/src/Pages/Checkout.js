import React, { useEffect, useState } from "react";
import "../Styles/Checkout.css";
import { CartState } from "../Context/Context";
import bootbox from "bootbox";

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

  async function displayRazorPay() {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );
    if (!res) {
      alert("failed");
      return;
    }

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

      handler: function (response) {
        // alert(response.razorpay_payment_id);
        // alert(response.razorpay_order_id);
        // alert(response.razorpay_signature);

        bootbox.alert(
         "hello bro"
        );

        // window.location = `https://api.whatsapp.com/send?phone=+917972328523&text=
        //   +Name :  +${formValues.firstName + formValues.lastName} +%0a
        //   +Address :  +${formValues.address} +%0a
        //   +City :  +${formValues.city} +%0a
        //   +State :  +${formValues.state} +%0a
        //   +Phone No :  +${formValues.phoneNo} +%0a
        //   +PinCode :  +${formValues.pincode} +%0a
        //   +Payment Id :  +${response.razorpay_payment_id} +%0a
        //   +Razorpay Payment Id :  +${response.razorpay_order_id} +%0a
        // `;
      },
      prefill: {
        name: formValues.firstName,
        contact: formValues.phoneNo,
      },
    };

    const paymentObject = new window.Razorpay(options);
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
    console.log(formValues);
  };

  const handleSubmit = (e) => {
    // console.log(isSubmit);
    e.preventDefault();
    // setformError(validate(formValues));
    // setisSubmit(true);
  };

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

        {bootbox.alert('this is bootbox')}
              <div className="accordion-body">
                {cart.map((item) => (
                  <>
                    <div className="product-details" key={item.id}>
                      <div>
                        <img
                          src={item.imgUrl}
                          alt=""
                          height="80px"
                          width="80px"
                        />
                        {item.title}
                      </div>

                      <div className="item-price">Rs {item.price}</div>
                    </div>
                  </>
                ))}

                <div className="price-details">
                  <div className="price-title">
                    <p>Total</p>
                    <p>Shipping</p>
                  </div>
                  <div className="price">
                    <p>{total}</p>
                    <p>Free</p>
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
              <button>Continue to Shipping</button>

              <button onClick={displayRazorPay}>Make Payment</button>
            </span>
          </form>
        </div>
      </div>

      <div className="billing-price-details">
        {cart.map((item) => (
          <>
            <div className="product-details">
              <div>
                <img src={item.imgUrl} alt="" height="80px" width="80px" />
                {item.title}
              </div>

              <div className="item-price">Rs {item.price}</div>
            </div>
          </>
        ))}

        <div className="price-details">
          <div className="price-title">
            <p>Total</p>
            <p>Shipping</p>
          </div>
          <div className="price">
            <p>{total}</p>
            <p>Free</p>
          </div>
        </div>
      </div>
    </section>
  );
}
