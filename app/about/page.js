import Navbar from "../../component/navbar/navbar";

import Hero from "../../component/about/hero";
import AboutUs from "../../component/about/about";
import Client from "../../component/about/ourClient";
import Vision from "../../component/about/ourVision";
import Count from "../../component/about/count";
import Choose from "../../component/about/choose";
import Testimonial from "../../component/about/testimonial";

export default function About() {
  return (
    <>
      <div class="header_about">
        <Navbar />
        <Hero />
      </div>
      <AboutUs />
      <Client />
      <Vision />
      {/* <Count /> */}
      <Choose />
      {/* <Testimonial /> */}
    </>
  );
}
