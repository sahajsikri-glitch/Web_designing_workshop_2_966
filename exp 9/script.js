// CASE : 01 only use effect
import React, { useEffect } from "react";
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
function App3() {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("timer runnning"); // at console this will display
    }, 1000);
  }, []);
  return (
    <h1>check console</h1> // at ui this will display
  );
}
export default App3;
