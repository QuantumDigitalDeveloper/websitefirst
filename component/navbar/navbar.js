import "../navbar/navbar.css";
import Image from "next/image";
import profilImg from "../navbar/logo.png";

import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <header>
        <nav class="navbar navbar-expand-lg">
          <div class="container">
            <a
              class="navbar-brand p-0"
              href="https://html-templates.evonicmedia.com/cybersafe/index.html"
            >
              <Image src={profilImg} alt="logo" />
            </a>
            <button class="navbar-toggler" onclick="openNav()" type="button">
              <span class="fa-solid fa-bars"></span>
            </button>
            <div
              class="collapse navbar-collapse justify-content-end align-items-center"
              id="navbarNav"
            >
              <ul class="navbar-nav d-flex gap-5 align-items-center">
                <li class="nav-item">
                  <Link class="nav-link p-0" href="/">
                    Home
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link p-0" href="/about">
                    About us
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link p-0" href="contact">
                    Contact
                  </Link>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link mx-2 dropdown-toggle p-0"
                    href="#"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Layanan
                  </a>
                  <ul
                    class="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <li>
                      <Link class="dropdown-item" href="/jdesign">
                        Design
                      </Link>
                    </li>
                    <li>
                      <Link class="dropdown-item" href="/jweb">
                        Web Development
                      </Link>
                    </li>
                    <li>
                      <Link class="dropdown-item" href="/jdigital">
                        Digital Marketing
                      </Link>
                    </li>
                  </ul>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link mx-2 dropdown-toggle p-0"
                    href="#"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    More
                  </a>
                  <ul
                    class="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <li>
                      <Link class="dropdown-item" href="/servis">
                        Services
                      </Link>
                    </li>
                    <li>
                      <Link class="dropdown-item" href="/faq">
                        FAQ
                      </Link>
                    </li>
                    <li>
                      <Link class="dropdown-item" href="/testimonial">
                        Testimonial
                      </Link>
                    </li>
                    <li>
                      <Link class="dropdown-item" href="/price">
                        Pricing plan
                      </Link>
                    </li>
                    <li>
                      <Link class="dropdown-item" href="/blog">
                        Blog
                      </Link>
                    </li>
                  </ul>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link btn_hover"
                    href="https://html-templates.evonicmedia.com/cybersafe/Contact.html"
                  >
                    Get started
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <aside id="mySidepanel" class="sidepanel">
          <div class="sidebar">
            <a
              class="p-0"
              href="https://html-templates.evonicmedia.com/cybersafe/index.html"
            >
              <Image src={profilImg} alt="logo" />
            </a>
            <button class="closebtn" onclick="closeNav()">
              <i class="fa-solid fa-xmark"></i>
            </button>
          </div>
          <div>
            <ul>
              <li class="nav-item">
                <a
                  class="nav-link active"
                  href="https://html-templates.evonicmedia.com/cybersafe/index.html"
                >
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="https://html-templates.evonicmedia.com/cybersafe/About.html"
                >
                  About us
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="https://html-templates.evonicmedia.com/cybersafe/Service.html"
                >
                  Services
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="https://html-templates.evonicmedia.com/cybersafe/Contact.html"
                >
                  Contact
                </a>
              </li>
              <li class="pages">
                <a href="#">More</a>
              </li>
              <li class="collapse_btn nav-item">
                <a
                  class="nav-link plus_collapse"
                  data-bs-toggle="collapse"
                  href="#pages"
                  role="button"
                  aria-expanded="false"
                  aria-controls="pages"
                >
                  <i class="fa-solid fa-plus"></i>
                </a>
                <div class="collapse" id="pages">
                  <ul>
                    <li class="nav-item">
                      <a
                        class="nav-link"
                        href="https://html-templates.evonicmedia.com/cybersafe/faq.html"
                      >
                        FAQ
                      </a>
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link"
                        href="https://html-templates.evonicmedia.com/cybersafe/Testimonial.html"
                      >
                        Testimonial
                      </a>
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link"
                        href="https://html-templates.evonicmedia.com/cybersafe/Pricing.html"
                      >
                        Pricing Plan
                      </a>
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link"
                        href="https://html-templates.evonicmedia.com/cybersafe/Blog.html"
                      >
                        Blog
                      </a>
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link"
                        href="https://html-templates.evonicmedia.com/cybersafe/Coming_soon.html"
                      >
                        Coming Soon
                      </a>
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link"
                        href="https://html-templates.evonicmedia.com/cybersafe/404.html"
                      >
                        404
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </aside>
      </header>
    </>
  );
}
