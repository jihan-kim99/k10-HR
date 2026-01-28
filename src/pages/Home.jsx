import React from "react";
import Hero from "../components/Hero";
import Problem from "../components/Problem";
import CostComparison from "../components/CostComparison";
import JobSearch from "../components/JobSearch";
import Housing from "../components/Housing";
import VisaServices from "../components/VisaServices";
import JobSeekerHeader from "../components/JobSeekerHeader";
import CompanySolutions from "../components/CompanySolutions";
import Contact from "../components/Contact";

const Home = ({ scrollToSection }) => {
  return (
    <>
      <div id="home">
        <Hero scrollToSection={scrollToSection} />
      </div>

      <div id="services">
        <Problem />
        <CostComparison />
      </div>

      <div id="job-seekers">
        <JobSeekerHeader />
        <JobSearch />
        <Housing />
        <VisaServices />
      </div>

      <div id="companies">
        <CompanySolutions scrollToSection={scrollToSection} />
      </div>

      <div id="contact">
        <Contact />
      </div>
    </>
  );
};

export default Home;
