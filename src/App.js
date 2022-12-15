import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Mail from "./components/Mail/Mail";
import MailList from "./components/Mail/MailList";
import SideBar from "./components/SideBar/SideBar";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="app_body">
          <SideBar />

          <Routes>
            <Route path="/mail" element={<Mail/>} />

            <Route exact path="/" element={<MailList/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
