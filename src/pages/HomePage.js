import React from "react";
import Opinions from "../components/03 Opinions/Opinions";
import AboutUs from "../components/04 AboutUs/AboutUs";
import Benefits from "../components/05 Benefits/Benefits";
import FAQ from "../components/06 FAQ/FAQ";
import Contact from "../components/07 Contact/Contact";
import Form from "../components/08 Form/Form";
import Layout from "../components/Layout/Layout";
import Hero from "../components/02 Hero/Hero";

import defaultProfileImage from "../assets/images/profile.png";

const HomePage = () => {
  const queryParams = new URLSearchParams(window.location.search);
  const trainerName = queryParams.get("trainerName") || "Domyślne Imię";
  const trainerSubtitle =
    queryParams.get("trainerSubtitle") || "Domyślne Stanowisko";
  const phone = queryParams.get("phone") || "48 123 456 789";
  const profileImageSrc =
    queryParams.get("profileImageSrc") || defaultProfileImage;
  const recommenderName =
    queryParams.get("recommenderName") || "Domyślny Polecający";

  return (
    <Layout
      trainerName={trainerName}
      trainerSubtitle={trainerSubtitle}
      phone={phone}
      profileImageSrc={profileImageSrc}
    >
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
