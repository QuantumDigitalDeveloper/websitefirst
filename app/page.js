import Navbar from "../component/navbar/navbar";

import Hero from "../component/home/hero";
import About from "../component/home/about";
import Client from "../component/home/ourClient";
import Choose from "../component/home/chooseUs";
import Service from "../component/home/ourService";
import Work from "../component/home/work";
import Price from "../component/home/price";
import Cta from "../component/home/cta";
import Testimonial from "../component/home/testimonial";
import Blog from "../component/home/blog";

export default function Home() {
  return (
    <>
      <div class="header_home">
        <Navbar />
        <Hero />
      </div>
      <About />
      <Client />
      <Choose />
      <Service />
      <Work />
      <Price />
      {/* <Cta />
      <Testimonial /> */}
      <Blog />
    </>
  );
}
