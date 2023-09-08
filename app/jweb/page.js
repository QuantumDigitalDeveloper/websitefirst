import Navbar from "../../component/navbar/navbar";

import Hero from "../../component/jweb/hero";
import Blog from "../../component/jweb/blog";
import Work from "../../component/jweb/work";

export default function Jweb() {
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
