export default function Faq() {
  return (
    <>
      <section class="faq">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-md-6 d-flex pe-md-5 pe-sm-0 pe-0 flex-column justify-content-center gap-3 text-md-start text-sm-center text-center position-relative">
              <figure>
                <img
                  src="https://html-templates.evonicmedia.com/cybersafe/assets/Images/bg/about_cercle1.png"
                  alt="img"
                />
              </figure>
              <h5>FAQ</h5>
              <h2>Still confused about our features?</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div class="col-lg-6 col-md-6 mt-md-0 mt-sm-4 mt-4">
              <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingOne">
                    <button
                      class="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      What are the objective of this service?
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    class="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <p class="accordion-body">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Aliquam hendrerit aliquet fermentum. Nulla non metus
                      sapien. Quisque nec aliquet ante.
                    </p>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingTwo">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      What is cyber security?
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                  >
                    <p class="accordion-body">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Aliquam hendrerit aliquet fermentum. Nulla non metus
                      sapien. Quisque nec aliquet ante.
                    </p>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingThree">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      How to try this cyber service?
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                  >
                    <p class="accordion-body">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Aliquam hendrerit aliquet fermentum. Nulla non metus
                      sapien. Quisque nec aliquet ante.
                    </p>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingFour">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFour"
                      aria-expanded="false"
                      aria-controls="collapseFour"
                    >
                      How to pay for this?
                    </button>
                  </h2>
                  <div
                    id="collapseFour"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingFour"
                    data-bs-parent="#accordionExample"
                  >
                    <p class="accordion-body">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Aliquam hendrerit aliquet fermentum. Nulla non metus
                      sapien. Quisque nec aliquet ante.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
