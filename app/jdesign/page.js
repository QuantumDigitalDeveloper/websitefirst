import Navbar from "../../component/navbar/navbar";

import Hero from "../../component/jdesign/hero";
import Blog from "../../component/jdesign/blog";
import Work from "../../component/jdesign/work";

export default function Jdesign() {
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
