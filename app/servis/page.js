import Navbar from "../../component/navbar/navbar";

import Hero from "../../component/servis/hero";
import Service from "../../component/servis/ourService";
import Choose from "../../component/servis/choose";
import Testimonial from "../../component/servis/testimonial";
import Faq from "../../component/servis/faq";

export default function Servis() {
  return (
    <>
      <div class="header_service">
        <Navbar />
        <Hero />
      </div>
      <Service />
      {/* <Choose /> */}
      <Testimonial />
      {/* <Faq /> */}
    </>
  );
}
