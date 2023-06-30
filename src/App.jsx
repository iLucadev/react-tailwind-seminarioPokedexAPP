import "./App.css";
import { Routes, Route } from "react-router-dom";
import PrivateRoutes from "./utils/PrivateRoutes";
import Layout from "./components/Layout";
import Auth from "./pages/Auth";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route element={<Auth />} path="/signin" />
        <Route element={<PrivateRoutes />}>
          <Route element={<Home />} path="/" exact />
        </Route>
        <Route element={<NotFound />} path="/*" />
      </Routes>
    </Layout>
  );
}
