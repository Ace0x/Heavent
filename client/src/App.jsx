import Nav from "./components/Navbar";
import Header from "./sections/Header";
import Info from "./sections/Info";
import Auth from "./sections/Auth";
import CreateLevel from "./sections/CreateLevel";
import Levels from "./sections/Levels";
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
            <Route path="/mylevels" element={<Levels />} />
            <Route path="/createlevel" element={<CreateLevel />} />
            <Route path="*" element={<h1>404</h1>} />
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;