import "./work.css";

export default function Work() {
  return (
    <>
      <section class="work">
        <div class="container">
          <div class="row position-relative">
            <figure>
              <img
                src="https://html-templates.evonicmedia.com/cybersafe/assets/Images/bg/about_cercle1.png"
                alt="img"
                class="work-cercle1"
              />
            </figure>
            <div class="col-lg-6 col-md-6 d-flex align-items-center justify-content-center">
              <figure class="position-relative">
                <img
                  src="https://html-templates.evonicmedia.com/cybersafe/assets/Images/home/how_we_work.jpg"
                  alt="img"
                  class="how-we-work"
                />
                <a href="#">
                  <i class="fa-solid fa-play"></i>
                </a>
              </figure>
            </div>
            <div class="col-lg-6 col-md-6 text-md-start text-sm-center text-center mt-md-0 mt-sm-5 mt-5 pt-md-0 pt-sm-3 pt-3">
              <h5>How we work</h5>
              <h2>Your cyber security on a chip</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut laboren do tempor amet elit.
              </p>
              <div class="d-flex align-items-center flex-md-row flex-sm-column flex-column gap-md-4 gap-sm-3 gap-1 mt-4">
                <div>
                  <h2>01</h2>
                </div>
                <div>
                  <h3>Jasa Desain</h3>
                  <p>
                    Kreativitas di Setiap Detail: Proses Desain Kami, Langkah
                    Demi Langkah, Membentuk Inspirasi Menjadi Realitas.
                  </p>
                </div>
              </div>
              <div class="d-flex align-items-center flex-md-row flex-sm-column flex-column gap-md-4 gap-sm-3 gap-1 mt-4">
                <div>
                  <h2>02</h2>
                </div>
                <div>
                  <h3>Jasa Pengembangan Web</h3>
                  <p>
                    Situs Web yang Melayani Bisnis Anda: Proses Pengembangan Web
                    Kami, Membangun Kode, Membangun Masa Depan Anda.
                  </p>
                </div>
              </div>
              <div class="d-flex align-items-center flex-md-row flex-sm-column flex-column gap-md-4 gap-sm-3 gap-1 mt-4">
                <div>
                  <h2>03</h2>
                </div>
                <div>
                  <h3>Jasa Pemasaran Digital</h3>
                  <p>
                    Kunci Sukses Kami: Proses Pemasaran Digital yang Terukur,
                    Mencapai Tujuan Anda dengan Strategi Digital yang Canggih.
                  </p>
                </div>
              </div>
            </div>
            <figure>
              <img
                src="https://html-templates.evonicmedia.com/cybersafe/assets/Images/bg/about_cercle1.png"
                alt="img"
                class="work-cercle2"
              />
            </figure>
          </div>
        </div>
      </section>
    </>
  );
}
