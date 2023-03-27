import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Vessels from "./pages/Vessels/Vessels";
import routes from "./routes";

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <div className="main">
        <Routes>
          <Route path="ports/:name" element={<Vessels />} />
          {routes.map((route, index) => {
            return (
              <Route path={route.path} element={route.element} key={index} />
            );
          })}
        </Routes>
      </div>
    </div>
  );
}

export default App;
