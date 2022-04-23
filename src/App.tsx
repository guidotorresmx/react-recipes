import Pages from "./pages/Pages";
import Navbar from "./components/Navbar";

import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Pages />
      </Router>
    </div>
  );
}

export default App;
