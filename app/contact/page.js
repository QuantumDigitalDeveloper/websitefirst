import Navbar from "../../component/navbar/navbar";

import Hero from "../../component/contact/hero";
import Kontak from "../../component/contact/kontak";
import Faq from "../../component/contact/faq";

export default function Contact() {
  return (
    <>
      <div class="header_service">
        <Navbar />
        <Hero />
      </div>
      <Kontak />
      <Faq />
    </>
  );
}
