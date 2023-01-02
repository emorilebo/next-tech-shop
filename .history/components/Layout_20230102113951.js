import React, { useEffect } from "react";
import Footer from "./Footer";

export default function Layout({ children }) {
  const {} = useContext()
  useEffect(() => {
    console.log(window.location.href);
    if(window.location.href.includes('success')){

    }
  }, []);

  return (
    <div>
      <div className="p-5">{children}</div>
      <Footer />
    </div>
  );
}
