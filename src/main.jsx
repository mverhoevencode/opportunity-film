import { createRoot } from "react-dom/client";
import "./index.css";
import Homepage from "./homepage.jsx";
import Navigation from "./navigation.jsx";
import Footer from "./footer.jsx";
import ReactLenis from "lenis/react";
import { motion } from "motion/react";

createRoot(document.getElementById("homepage")).render(
  <>
    <ReactLenis
      root
      options={{
        lerp: 0.075,
      }}
    >
      <Navigation />
      <Homepage />
      <Footer />
    </ReactLenis>
  </>,
);
