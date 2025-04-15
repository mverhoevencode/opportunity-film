import { createRoot } from "react-dom/client";
import "./index.css";
import Homepage from "./homepage.jsx";
import Navigation from "./navigation.jsx";
import Footer from "./footer.jsx";

createRoot(document.getElementById("homepage")).render(
  <>
    <Navigation />
    <Homepage />
    <Footer />
  </>,
);
