import { Link } from "react-router-dom";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import "./NotFound.css";

export default function NotFound() {
  return (
    <>
      <Navbar />

      <main className="not-found">
        <h1>404</h1>

        <h2>Page Not Found</h2>

        <p>
          The page you are looking for does not exist.
        </p>

        <Link
          to="/"
          className="not-found-link"
        >
          Back to Home
        </Link>
      </main>

      <Footer />
    </>
  );
}