import React, { useState } from "react";
import "./Mint.css";
function Mint() {
  const [total, setTotal] = useState(1);
  return (
    <div className="mint-div">
      <div className="mint-box">
        <h1>Cosmic Poems</h1>
        <div className="calc-div">
          <div className="left-calc">
            <button
              onClick={() =>
                setTotal((prev) => {
                  if (prev < 2) {
                    return prev + 1;
                  } else {
                    return prev;
                  }
                })
              }
              className="func"
            >
              +
            </button>
            <p className="num">{total}</p>
            <button
              onClick={() => {
                if (total > 1) {
                  setTotal((prev) => prev - 1);
                }
              }}
              className="func"
            >
              -
            </button>
          </div>
          <p>Mint</p>
        </div>
        <p className="total">0/333 minted</p>
        <p>Pre-sale begins on March 20th, 2022</p>
        <p>Public sale is March 21st, 2022</p>
      </div>
    </div>
  );
}

export default Mint;
