import React from "react";
import Footer from "./Footer";

export default function Layout({ children }) {
  useEffect
  return (
    <div>
      <div className="p-5">{children}</div>
      <Footer />
    </div>
  );
}
