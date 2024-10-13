import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes } from "./Routes";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { SeviceContext } from "./Components/SeviceContext/SeviceContext";

function App() {
  return (
    <SeviceContext>
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
        <div>
          <Footer />
        </div>
      </Router>
    </SeviceContext>
  );
}

export default App;
