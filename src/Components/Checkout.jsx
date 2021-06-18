import { useEffect, useRef } from "react";

export function Checkout() {
  const inputRef = useRef(null);

  useEffect(()=>{
      inputRef.current.focus();
  },[])

  function handleCardSubmit(){
      const cardNumber = inputRef.current.value;
      console.log({cardNumber})
  }

  return (
    <div className="search-input mg-2 flex flex-center flex-col">
      <label className="input-label">
        <h3>Credit Card Number:</h3>
        <input
          ref={inputRef}
          className="input"
          placeholder="Enter CC Number"
          type="text"
        ></input>
      </label>
      <button className="btn btn-green mg-1"
      onClick={handleCardSubmit}
      >
          Submit
      </button>
    </div>
  );
}
