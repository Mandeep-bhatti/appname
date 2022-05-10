import React from "react";
import "./Accordin.css";
import { data } from "./data";
function Accordin() {
  const [state, setActive] = React.useState(-1)
  // let [close, setClose] = React.useState(false);
  // console.log(close);
  const refrr = React.useRef();
  const handler = (index) => {
    if (state === index) {
      setActive(-1);
      return;
    }
    setActive(index);
  }
  return (
    <>
      <div className="accordin">
        {
          data.map((val, index) => {
            return (<>
              <h6 key={index} ref={refrr} className="question" onClick={() => handler(index)}>
                {val.question}
              </h6>
              { state === index ?
                  <Answer ans={val.answer} />
                  : ""
              }
            </>)
          })
        }
      </div>
    </>
  );
}
const Answer = (props) => {
  return (
    <>
      <p className="ans">{props.ans}</p>
    </>
  );
};
export default Accordin;
