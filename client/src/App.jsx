import { useState } from "react";
import Nav from "./components/Navbar";
import Header from "./sections/Header";
import Info from "./sections/Info";
import SignUp from "./sections/SignUp";
import { AuthProvider } from "./context/authContext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Nav />
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Header />
                  <Info />
                </>
              }
            />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
