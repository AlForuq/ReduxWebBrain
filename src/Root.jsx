import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./redux/Counter";
import { getStudent } from "./redux/Student";

export const Root = () => {
    const [option , setOption] = useState(null)
  const anyCounter = useSelector((anyStore) => anyStore);
  const dispatch = useDispatch();

  // console.log(anyCounter.counterDemo);
  //   console.log(anyCounter.studentDemo);

  useEffect(() => {
    dispatch(getStudent());
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <select onChange={(e)=>setOption(e.target.value)} >
        <option value={1} >1</option>
        <option value={2} >2</option>
        <option value={3} >3</option>
        <option value={4} >4</option>
        <option value={5} >5</option>
      </select>

      <button onClick={() => dispatch(increment())}>Plus</button>
      <button onClick={() => dispatch(decrement({ a: option || 1 }))}>Minus</button>
      <h1>counterDemo: {anyCounter.counterDemo.data} </h1>

      <div>
        studentDemo:{" "}
        {anyCounter.studentDemo.student.map((value) => {
          return (
            <div key={value.id}>
              {value.id} - {value.name}
            </div>
          );
        })}{" "}
      </div>
    </div>
  );
};
