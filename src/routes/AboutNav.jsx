import React from "react";
import PageHeader from "../components/PageHeader";
import About from "../components/About";
import Features from "../components/Features";
import Team from "../components/Team";

const AboutNav = () => {
  return (
    <>
      <PageHeader title="About Us" readOnly />
      <About />
      <Features />
      <Team />
    </>
  );
};

export default AboutNav;
