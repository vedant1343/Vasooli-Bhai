import {Routes, BrowserRouter, Route} from "react-router-dom";
import LoginSignup from "./components/LoginSignup";
import React from "react";

import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import {UserProvider} from "./components/UserContext.jsx";
import GiftCards from "./components/GiftCards";
import Tips from "./components/Tips";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>

    <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route path="/" element={<App/>}/>
          <Route path="/signup" element={<LoginSignup/>}/>
          <Route path="/login" element={<LoginSignup/>}/>
          {/* <Route path="history" element={<History />} /> */}
          <Route path="/coupons" element={<GiftCards />} />
          <Route path="/tips" element={<Tips />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
