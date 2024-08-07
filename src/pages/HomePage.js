import React from "react";
import Opinions from "../components/03 Opinions/Opinions";
import AboutUs from "../components/04 AboutUs/AboutUs";
import Benefits from "../components/05 Benefits/Benefits";
import FAQ from "../components/06 FAQ/FAQ";
import Contact from "../components/07 Contact/Contact";
import Form from "../components/08 Form/Form";
import Layout from "../components/Layout/Layout";
import Hero from "../components/02 Hero/Hero";

const HomePage = () => {
  const queryParams = new URLSearchParams(window.location.search);
  const recommenderName =
    queryParams.get("recommenderName") || "Domyślny Polecający";

  return (
    <Layout>
      <Hero recommenderName={recommenderName} />
      <Opinions />
      <AboutUs />
      <Benefits />
      <FAQ />
      <Contact />
      <Form />
    </Layout>
  );
};

export default HomePage;
