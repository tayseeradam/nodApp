import { useEffect, useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(localStorage.getItem("counter")
 ? JSON.parse(localStorage.getItem("counter")):0
   
  );
  //
  const handleIncrement = () => {
    setCounter(counter + 1);
  };
  //
  const handleDecrement = () => {
    setCounter(counter - 1);
  };

  //useEffectt

  useEffect(() => {
    localStorage.setItem("counter",   counter);
  }, [counter]);

  //
  return (
    <div className="flex  text-4xl justify-center items-center gap-4 h-screen font-bold">
      <button
        className="flex justify-center items-center px-4 py-2
       bg-green-600 rounded-md"
        onClick={handleIncrement}
      >
        +
      </button>
      <small>{counter}</small>
      <button
        className="flex justify-center items-center
       bg-red-600 px-4 py-2 rounded-md  "
        onClick={handleDecrement}
      >
        -
      </button>
    </div>
  );
};

export default Counter;

