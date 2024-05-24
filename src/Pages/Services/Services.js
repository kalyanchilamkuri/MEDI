import React from "react";
import Banner from "../../Components/Banner/Banner";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import ServiceCard from "../../Components/ServiceCard/ServiceCard";
import SerBox from "../../Components/ServicesCards/SerBox";
import MedicineBox from "../../Components/SugggestingMedicines/MedicalBox";
import Some from "../../Components/SugggestingMedicines/Some";
const Services = () => {
  return (
    <div>
      <Header />
      <Banner page={"services"} />
     
      <SerBox />
      <div style={{ marginTop: "0px" }}>
        {" "}
        <ServiceCard />
      </div>
      <MedicineBox />
      <br />
      <br />
      <h1>Suggesting Best Hospitals</h1>
      <br />
      <br />
      <Some />
      
      <Footer />
    </div>
  );
};

export default Services;
