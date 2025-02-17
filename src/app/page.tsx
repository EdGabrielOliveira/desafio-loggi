import React from "react";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Footer from "./Components/Footer/Footer";

export default function page() {
  return (
    <div className="flex flex-col">
      <Header />
      <Hero />
      <Footer />
    </div>
  );
}
