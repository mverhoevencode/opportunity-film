import { createRoot } from "react-dom/client";
import "./index.css";
import Homepage from "./homepage.jsx";
import Navigation from "./navigation.jsx";
import Footer from "./footer.jsx";
import ReactLenis from "lenis/react";
import { useState } from "react";
import logo from "./assets/logo.png";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <>
      {loggedIn ? (
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
      ) : (
        <Login setLoggedIn={setLoggedIn} />
      )}
    </>
  );
}

function Login({ setLoggedIn }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const correctPassword = "megatron";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === correctPassword) {
      setError("");
      setLoggedIn(true); // Gebruik setLoggedIn om de state te updaten
    } else {
      setError("Wachtwoord is onjuist");
    }
  };

  return (
    <>
      <div className="bg-darkblack fixed inset-0 z-[100] h-screen w-screen">
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              alt="Your Company"
              src={logo}
              className="mx-auto h-20 w-auto"
            />
            <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight">
              Binnen dringen op de site
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm/6 font-medium"
                >
                  Wachtwoord
                </label>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="password"
                    className="focus:outline-darkgreen placeholder:text-darkblack text-darkblack block w-full rounded-md bg-white px-3 py-1.5 text-base outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 sm:text-sm/6"
                  />
                  {error && <p className="text-sm text-red-500">{error}</p>}
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="hover:bg-offwhite hover:text-darkblack mb-16 w-full cursor-pointer rounded-full border px-8 py-3 transition-colors"
                >
                  Poging wagen
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

createRoot(document.getElementById("homepage")).render(<App />);
