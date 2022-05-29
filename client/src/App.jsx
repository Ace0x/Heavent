import Nav from "./components/Navbar";
import Header from "./sections/Header";
import Info from "./sections/Info";
import Auth from "./sections/Auth";
import { AuthProvider } from "./context/authContext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserData from "./sections/UserData";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Nav />
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
            <Route path="/signup" element={<Auth authType="signup" />} />
            <Route path="/login" element={<Auth authType="login" />} />
            <Route path="/userdata" element={<UserData />} />
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
