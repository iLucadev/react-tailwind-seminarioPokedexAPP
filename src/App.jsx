import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProtectedRoutes } from "./utils/ProtectedRoutes";
import Layout from "./components/Layout";
import Auth from "./pages/Auth";
import Home from "./pages/Home";

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoutes>
                <Route index element={<Home />} />
              </ProtectedRoutes>
            }
          />
          <Route path="/signin" element={<Auth />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
