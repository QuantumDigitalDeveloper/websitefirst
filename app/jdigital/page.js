import Navbar from "../../component/navbar/navbar";

import Hero from "../../component/jdigital/hero";
import Blog from "../../component/jdigital/blog";
import Work from "../../component/jdigital/work";

export default function Jdigital() {
  return (
    <>
      <div class="header_service">
        <Navbar />
        <Hero />
      </div>
      <Work />
      <Blog />
    </>
  );
}
