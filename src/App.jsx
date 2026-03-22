import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState, createContext } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./utils/scrollTop";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Career from "./pages/Career";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import ApplyForm from "./pages/ApplyForm";
import Products from "./pages/Product";

// Components
import AuthForm from "./components/AuthForm";

export const AuthContext = createContext(null);

function App() {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  // Persist user
  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  // Backend ping
  // useEffect(() => {
  //   const apiUrl = import.meta.env.VITE_API_URL;
  //   if (!apiUrl) return;

  //   fetch(`${apiUrl}/ping`)
  //     .then((res) => res.text())
  //     .then((data) => console.log("✅ Connected to backend:", data))
  //     .catch((err) =>
  //       console.error("❌ Backend connection error:", err)
  //     );
  // }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <Router>
        <ScrollToTop />

        <div className="flex flex-col min-h-screen">
          <Header />

          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/career" element={<Career />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/apply/:jobId" element={<ApplyForm />} />
              <Route path="/auth/*" element={<AuthForm />} />
              <Route path="/services" element={<Services />} />
              <Route path="/products" element={<Products />} />
            </Routes>
          </main>

          <Footer />

          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            pauseOnHover
            draggable
          />
        </div>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
