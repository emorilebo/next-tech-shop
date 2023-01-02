import React, { useEffect } from "react";
import Footer from "./Footer";

export default function Layout({ children }) {
  useEffect(() => {
    console.log(window.location.href);
    if()
  }, []);

  return (
    <div>
      <div className="p-5">{children}</div>
      <Footer />
    </div>
  );
}