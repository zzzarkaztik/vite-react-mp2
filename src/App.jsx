import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./Components/About";
import Index from "./Components/Index";
import Weather from "./Components/Weather";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Index />
            </>
          }
        />
        <Route
          path="/weather"
          element={
            <>
              <Weather />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <About />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
