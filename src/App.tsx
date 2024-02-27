import { Route, Routes } from "react-router-dom";
import Login from "~/pages/Login";
import Dashboard from "~/pages/Dashboard";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/sing-in" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
