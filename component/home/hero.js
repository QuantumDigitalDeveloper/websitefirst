import "./hero.css";

export default function Hero() {
  return (
    <>
      <section class="banner">
        <div class="container">
          <figure>
            <img
              src="https://html-templates.evonicmedia.com/cybersafe/assets/Images/bg/header_cercle1.png"
              alt="img"
              class="header-cercle1"
            />
          </figure>
          <figure>
            <img
              src="https://html-templates.evonicmedia.com/cybersafe/assets/Images/bg/header_cercle2.png"
              alt="img"
              class="header-cercle2"
            />
          </figure>
          <div class="row d-flex align-items-center gap-md-0 gap-sm-4 gap-4">
            <div class="col-lg-6 col-md-6 d-flex flex-column align-items-md-start align-items-sm-center align-items-center justify-content-center gap-md-4 gap-sm-3 gap-3">
              <h1>Grouwth Your Bussiness</h1>
              <p>
                Selamat datang di Quantum, tempat di mana desain menemui
                teknologi untuk menghasilkan pengalaman digital yang luar biasa.
              </p>
              <a
                href="https://html-templates.evonicmedia.com/cybersafe/About.html"
                class="btn_hover mt-3"
              >
                Learn more
              </a>
            </div>
            <div class="col-lg-6 col-md-6 d-flex justify-content-end">
              <figure>
                <img
                  src="https://html-templates.evonicmedia.com/cybersafe/assets/Images/home/banner.png"
                  alt="banner"
                />
              </figure>
            </div>
          </div>
        </div>
      </section>
      <section class="banner_card">
        <div class="container d-flex gap-lg-5 gap-md-4 gap-sm-5 gap-4 justify-content-between flex-md-row flex-sm-column flex-column align-items-center">
          <div>
            <figure>
              <img
                src="https://html-templates.evonicmedia.com/cybersafe/assets/Images/icon/banner_card1.png"
                alt="img"
              />
            </figure>
            <h4>Web Developer</h4>
            <p>
              Kode adalah bahasa kami, dan situs web adalah kanvas kami. Kami
              mengembangkan solusi web yang responsif dan fungsional untuk
              meningkatkan kinerja bisnis Anda.
            </p>
            <a
              href="https://html-templates.evonicmedia.com/cybersafe/About.html"
              class="btn_hover2"
            >
              <i class="fa-solid fa-greater-than"></i>
            </a>
          </div>
          <div>
            <figure>
              <img
                src="https://html-templates.evonicmedia.com/cybersafe/assets/Images/icon/banner_card2.png"
                alt="img"
              />
            </figure>
            <h4>Design Grafis</h4>
            <p>
              Buat kesan pertama yang tak terlupakan dengan design yang
              menakjubkan. Tim desain kami akan membantu Anda menciptakan
              tampilan dan pengalaman yang sesuai dengan merek Anda.
            </p>
            <a
              href="https://html-templates.evonicmedia.com/cybersafe/About.html"
              class="btn_hover2"
            >
              <i class="fa-solid fa-greater-than"></i>
            </a>
          </div>
          <div>
            <figure>
              <img
                src="https://html-templates.evonicmedia.com/cybersafe/assets/Images/icon/banner_card3.png"
                alt="img"
              />
            </figure>
            <h4>Digital Marketing</h4>
            <p>
              Kami adalah ahli di dunia digital. Dari strategi SEO hingga
              kampanye iklan yang disesuaikan, kami membantu Anda mencapai
              target audiens Anda dan meningkatkan konversi.
            </p>
            <a
              href="https://html-templates.evonicmedia.com/cybersafe/About.html"
              class="btn_hover2"
            >
              <i class="fa-solid fa-greater-than"></i>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
