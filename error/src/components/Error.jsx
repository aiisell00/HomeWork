// import React, { useEffect, useReducer } from "react";
// import axios from "axios";
// const reducer = (state, action) => {
//   switch (action.type) {
//     case "SetData":
//      return {...state, data:action.data}
//      case "ShowData":
//         return {...state, data:action.data}
//     default:
//       break;
//   }
// };
// const Error = () => {
//   const [state, dispatch] = useReducer(reducer, {
//     data: [],
//     loading: true,
//     error: false,
//   });
//   useEffect(() => {
//     axios("https://jsonplaceholder.typicode.com/posts/1")
//       .then((res) => {
//         dispatch({ type: "SetData", data: res.data });
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//       });
//   }, []);
//   return (
//     <div>
//       <button onClick={() => {
//         dispatch({
//             type:"ShowData"
//         })
//       }}>Fetch Request</button>
//       <p></p>
//     </div>
//   );
// };

// export default Error;
