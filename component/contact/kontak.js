export default function Kontak() {
  return (
    <>
      <section class="contact_page">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-md-6 position-relative pe-lg-5 pe-md-4 pe-sm-2 pe-2">
              <figure>
                <img
                  src="https://html-templates.evonicmedia.com/cybersafe/assets/Images/bg/about_cercle1.png"
                  alt="img"
                  class="contact-cercle1"
                />
              </figure>
              <div class="mapouter">
                <iframe
                  class="gmap_iframe"
                  src="https://maps.google.com/maps?width=501&amp;height=400&amp;hl=en&amp;q=Evonicsoft.com&amp;t=&amp;z=10&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                ></iframe>
              </div>
            </div>
            <div class="col-lg-6 col-md-6 mt-md-0 mt-sm-5 mt-4 text-md-start text-sm-center text-center position-relative">
              <h2>Get in touch with us</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut laboren amet elit.
              </p>
              <form id="contact-form">
                <div id="contact-message"> </div>
                <div class="d-flex gap-lg-4 gap-md-3 gap-sm-4 gap-3">
                  <input type="text" placeholder="Your name" />
                  <input type="email" placeholder="Email address" required />
                </div>
                <div class="d-flex gap-lg-4 gap-md-3 gap-sm-4 gap-3">
                  <input type="text" placeholder="Phone number" />
                  <input type="text" placeholder="Subject" />
                </div>
                <div>
                  <textarea
                    cols="30"
                    rows="8"
                    placeholder="Write here message"
                  ></textarea>
                </div>
                <button type="submit">Submit</button>
              </form>
              <figure>
                <img
                  src="https://html-templates.evonicmedia.com/cybersafe/assets/Images/bg/about_cercle1.png"
                  alt="img"
                  class="contact-cercle2"
                />
              </figure>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
