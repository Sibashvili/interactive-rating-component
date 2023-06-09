import React from "react";
import starLogo from "./assets/icon-star.svg";
function Mainpage({ setActiveRating, setStatus, activeRating }) {
  function handleClick(e) {
    const point = e.target.value;
    setActiveRating(point);
  }

  return (
    <div className="container">
      <div className="logo">
        <img className="star" src={starLogo} alt="" />
      </div>
      <div className="headTitle">
        <h1 className="title">How did we do?</h1>
        <h2 className="subtitle">
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </h2>
      </div>
      <div className="btns">
        <button
          style={{
            backgroundColor: activeRating === 1 ? "#fc7614" : "#262E38",
          }}
          value={1}
          onClick={handleClick}
          className="btn"
        >
          1
        </button>
        <button value={2} onClick={handleClick} className="btn">
          2
        </button>
        <button value={3} onClick={handleClick} className="btn">
          3
        </button>
        <button value={4} onClick={handleClick} className="btn">
          4
        </button>
        <button value={5} onClick={handleClick} className="btn">
          5
        </button>
      </div>
      <div className="submit">
        <button onClick={() => setStatus(true)} className="submitBtn">
          SUBMIT
        </button>
      </div>
    </div>
  );
}
export default Mainpage;
