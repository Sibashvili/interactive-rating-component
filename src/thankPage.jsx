import React from "react";
import thankLogo from "./assets/illustration-thank-you.svg";
function ThankPage({ activeRating }) {
  return (
    <div className="container2">
      <div className="icon">
        <img className="thx" src={thankLogo} alt="" />
      </div>
      <div className="result">
        <div className="div">
          <h1 className="select">You selected {activeRating} out of 5</h1>
        </div>
        <h2 className="thank">Thank you!</h2>
        <h3 className="subtitle2">
          We appreciate you taking the time to give a rating. If you ever need
          more support, don’t hesitate to get in touch!
        </h3>
      </div>
      ;
    </div>
  );
}
export default ThankPage;
