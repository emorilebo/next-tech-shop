import React, { useEffect } from "react";
import Footer from "./Footer";

export default function Layout({ children }) {
  useEffect(() => {
    console.log()
  }, []);

  return (
    <div>
      <div className="p-5">{children}</div>
      <Footer />
    </div>
  );
}
