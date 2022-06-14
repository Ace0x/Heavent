import Nav from "./components/Navbar";
import Header from "./sections/Header";
import Info from "./sections/Info";
import Auth from "./sections/Auth";
import CreateLevel from "./sections/CreateLevel";
import Levels from "./sections/Levels";
import AllLevels from "./sections/AllLevels";
import LevelStats from "./sections/LevelStats";
import { AuthProvider } from "./context/authContext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserData from "./sections/UserData";
import CompareUsers from "./sections/CompareUsers";
import CompareLevels from "./sections/CompareLevels";
import CompareLevelStats from "./sections/CompareLevelStats";
import Dashboard from "./sections/Dashboard";
import Game from "./sections/Game";

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
            <Route path="/alllevels" element={<AllLevels />} />
            <Route path="/levelstats/:levelId/:name" element={<LevelStats />} />
            <Route path="*" element={<h1>404</h1>} />
            <Route path="/compare/:user1/:user2" element={<CompareUsers />} />
            <Route path="/levels/compare/:level1/:level2" element={<CompareLevels />} />
            <Route path="/levelstats/compare/:user1/:user2/:level" element={<CompareLevelStats />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/game" element={<Game />} />
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
