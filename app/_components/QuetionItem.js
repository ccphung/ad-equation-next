import { useState } from "react";

function QuetionItem({ question, response }) {
  const [showResponse, setShowResponse] = useState(false);

  function handleClick() {
    setShowResponse((prev) => !prev);
  }

  return (
    <div className="m-2 ">
      <div className="flex items-center justify-between ">
        <p className="font-semibold mr-2 ">{question}</p>

        <button className="text-[2em] " onClick={handleClick}>
          {showResponse ? "-" : "+"}
        </button>
      </div>

      {showResponse && <p className="text-stone-600 ">{response}</p>}
    </div>
  );
}

export default QuetionItem;
