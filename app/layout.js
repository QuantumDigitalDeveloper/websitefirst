import "./globals.css";
import Footer from "../component/footer/footer";

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowTurnUp } from "@fortawesome/free-solid-svg-icons";

export default function RootLayout({ children }) {
  // button back to top start
  if (typeof window !== "undefined") {
    window.onscroll = function () {
      scrollFunction();
    };
  }

  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      document.getElementById("backToTopBtn").style.display = "block";
    } else {
      document.getElementById("backToTopBtn").style.display = "none";
    }
  }

  function scrollToTop() {
    if (typeof window !== "undefined") {
      // Pastikan kode ini hanya dijalankan di lingkungan peramban
      const scrollToTopBtn = document.documentElement || document.body;
      scrollToTopBtn.scrollIntoView({
        behavior: "smooth",
      });
    }
  }
  // button back to top end

  return (
    <html lang="zxx">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Quantum.</title>
        {/* <link
          rel="shortcut icon"
          href="https://html-templates.evonicmedia.com/cybersafe/assets/Images/fave_icon.png"
          type="image/x-icon"
        /> */}
        <link
          rel="stylesheet"
          href="https://html-templates.evonicmedia.com/cybersafe/assets/css/bootstrap-lib/bootstrap.min.css"
        />
        <link
          rel="stylesheet"
          href="https://html-templates.evonicmedia.com/cybersafe/assets/font-awesome-lib/icon/font-awesome.min.css"
        />
        {/* <link
          rel="stylesheet"
          href="https://html-templates.evonicmedia.com/cybersafe/assets/css/style.css"
        /> */}
        <link
          rel="stylesheet"
          href="https://html-templates.evonicmedia.com/cybersafe/assets/css/responsive.css"
        />
        <link
          rel="stylesheet"
          href="https://html-templates.evonicmedia.com/cybersafe/assets/css/slick.min.css"
        />
      </head>
      <body>
        <div class="site-wrapper">
          {children}
          <Footer />
        </div>
        <a href="#">
          <button onClick={scrollToTop()} id="backToTopBtn" class="btn_hover2">
            <i>
              <FontAwesomeIcon icon={faArrowTurnUp} />
            </i>
          </button>
        </a>
        {/* <script
          async
          src="https://html-templates.evonicmedia.com/cybersafe/assets/js/jquery.js"
        ></script> */}
        <script
          async
          src="https://html-templates.evonicmedia.com/cybersafe/assets/js/waypoints.min.js"
        />
        <script
          async
          src="https://html-templates.evonicmedia.com/cybersafe/assets/js/javascript-lib/bootstrap.min.js"
        />
        <script
          async
          src="https://html-templates.evonicmedia.com/cybersafe/assets/js/slick.min.js"
        />
        <script
          async
          src="https://html-templates.evonicmedia.com/cybersafe/assets/js/custom.js"
        />
      </body>
    </html>
  );
}
