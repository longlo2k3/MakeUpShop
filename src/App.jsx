import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes } from "./Routes";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <Router>
        <div>
          <Navbar />
        </div>

        <Routes>
          {publicRoutes.map((route, index) => {
            const Pages = route.component;
            return <Route key={index} path={route.path} element={<Pages />} />;
          })}
        </Routes>
      </Router>
    </>
  );
}

export default App;
