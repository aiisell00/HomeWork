import { BrowserRouter, Routes, Route, json } from "react-router-dom";
import "./App.css";
import Admin from "./components/pages/Admin";
import Edit from "./components/Edit";
import Post from "./components/Post";
import Layout from "./components/Layout";
import { useReducer, reducer } from "react";

function App() {
  const [state, dispatch] = useReducer(reducer, {
    data: [],
  });
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            path="/admin"
            element={<Admin state={state} dispatch={dispatch} />}
          />
          <Route path="/edit" element={<Edit />} />
          <Route
            path="/post"
            element={<Post state={state} dispatch={dispatch} />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
