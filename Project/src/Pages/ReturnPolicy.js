import React from "react";
import "../Styles/ReturnPolicy.css";

export default function ReturnPolicy() {
  return (
    <div className="Return">
      <div className="text">
        <h2>RETURNS, REFUNDS AND EXCHANGE POLICY</h2>

        <div className="return">
          <h3>ELIGIBILITY FOR RETURNS:</h3>
          <p>
            We have a 10 day return policy after receiving your order. To be
            eligible for a return, your product must be unused and in the same
            condition that you received it. It must also be in the original
            packaging. The Product will be subject to a thorough quality check
            in order to be eligible for a return. Dokmen reserves the right to
            refuse to return a product if it is not in its original condition,
            is damaged or missing parts for reasons not due to our error.
            <h6>
              If you intend to return a product, kindly inform us by email at{" "}
              <a href="mailto:empirefootwear@gmail.com">
                empirefootwear@gmail.com
              </a>
            </h6>
          </p>
        </div>
        <div className="return">
          <h3>REFUNDS</h3>
          <p>
            Once your return is received and inspected, we will notify you that
            we have received your returned item by email or phone call. If you
            are approved, then your refund will be processed, and a credit will
            automatically be applied to your credit card or original method of
            payment, within 2-5 days.
            <h6>Shipping in case of returns</h6>
            We will get the items picked from your address. If you consider your
            product to be eligible for a return you should email us at
            empirefootwear@gmail.com and our executive will assist you.
          </p>
        </div>
        <div className="return">
          <h3>EXCHANGES (IF APPLICABLE)</h3>
          <p>
            We only replace items if they are defective or damaged. If you need
            to exchange it for the same item, please send us an email at{" "}
            <a href="mailto:empirefootwear@gmail.com">
              empirefootwear@gmail.com
            </a>{" "}
            and mail your item.
          </p>
        </div>
        <div className="return">
          <h3>CANCELLATION POLICY</h3>
          <p>
            In case you have a change in mind just after making the payment, you
            can drop an e-mail at{" "}
            <a href="mailto:empirefootwear@gmail.com">
              empirefootwear@gmail.com
            </a>{" "}
            with your order number. As long as your order has not been
            dispatched, we can cancel it and refund your amount.
          </p>
        </div>
      </div>
    </div>
  );
}
