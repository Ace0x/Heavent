import Nav from "./components/Navbar";
import Header from "./sections/Header";
import Info from "./sections/Info";
import Auth from "./sections/Auth";
import Levels from "./sections/Levels";
import { AuthProvider } from "./context/authContext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserData from "./sections/UserData";
import { FetchProvider } from "./context/fetchContext";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <FetchProvider>
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
              <Route path="/mylevels" element={<Levels />} />
            </Routes>
          </Router>
        </FetchProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
