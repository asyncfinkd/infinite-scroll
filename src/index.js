import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { RoutesData } from "routes/route-generator";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Pages = () => {
  return (
    <Routes>
      {RoutesData.map((el) => {
        return (
          <Route key={el.path} path={el.path} element={<el.component />} />
        );
      })}
    </Routes>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense fallback={false}>
        <Pages />
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
