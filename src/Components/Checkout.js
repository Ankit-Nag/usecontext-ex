import {useEffect,useRef} from 'react'

export function Checkout() {
    const creditCardNoRef = useRef(null);
  
    useEffect(() => {
      creditCardNoRef.current.focus();
    }, []);
  
    function handleCardSubmit() {
      const cardDetail = creditCardNoRef.current.value;
      console.log(cardDetail);
    }
  
    return (
      <div className="flex flex-col mg-sm">
        {" "}
        <label>
          Credit Card:
          <input className="mg-sm" ref={creditCardNoRef} type="text"></input>
        </label>
        <button onClick={handleCardSubmit} className="btn btn-primary">
          Submit
        </button>
      </div>
    );
  }