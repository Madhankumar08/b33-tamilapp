import { useState } from "react";

//const [state, setState] = useState(InitialValue);
export function Counter() {
  //let like = 10;
  const [like, setLike] = useState(0);
  const [disLike, setDisLike] = useState(0);
  return (
    <div>
      <button className="btn-like" onClick={() => setLike(like + 1)}>👍{like}</button>
      <button className="btn-dislike" onClick={() => setDisLike(disLike + 1)}>👎{disLike}</button>
    </div>
  );
}
