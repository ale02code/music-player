import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { FetchingDataContextProvider } from "./context/FetchingDataContext";

function App() {
  return (
    <FetchingDataContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </FetchingDataContextProvider>
  );
}

export default App;
