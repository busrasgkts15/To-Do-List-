import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import UsersPage from "./pages/UsersPage";
import Layout from "./components/Layout.js";
import HookFormModal from "./components/HookFormModal.js";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/todo" element={<UsersPage />} />
            <Route path="/hook" element={<HookFormModal isOpen={true}/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
