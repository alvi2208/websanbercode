import { useState } from "react";

const Tugas8 = () => {
  const [countLike, setCountLike] = useState(0);
  const [countDisLike, setCountDisLike] = useState(0);

  const getMessage = () => {
    console.log("pesan dibaca");
    return countLike < 10
      ? "State count kurang dari 10"
      : "State count sudah lebih dari 10!!";
  };

  return (
    <div>
      <button onClick={() => setCountLike(countLike + 1)}>
        {countLike} 👍
      </button>
      <p>{getMessage()}</p>
      <button onClick={() => setCountDisLike(countDisLike + 1)}>
        {countDisLike} 👇
      </button>
    </div>
  );
};

export default Tugas8;
