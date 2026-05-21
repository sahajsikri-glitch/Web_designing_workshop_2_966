// CASE : 01 only use effect
// import React, { useEffect } from "react";
// function App() {}
// useEffect(() => {
//   console.log("component loaded")
// },[]);
// return(
//   <h1>"hello students"</h1>
// )
// export default App;

// CASE : 02 both use effect and use state
// function App2 {
//   const [count]
// }

//timer example of case - 02 (ek particular time ke baad ye function perform ho humara)
import React, { useEffect } from "react";

function App3() {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("timer running");
    }, 1000);

    // stop timer after 5 seconds
    setTimeout(() => {
      clearInterval(timer);
      console.log("timer stopped");
    }, 5000);
  }, []);

  return <h1>Check Console</h1>;
}

export default App3;

//exaple -02 (timer reset / stop / )
import React, { useEffect } from "react";
function app4() {}
