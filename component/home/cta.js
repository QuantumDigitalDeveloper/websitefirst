import "./cta.css";

export default function Cta() {
  return (
    <>
      <section class="experience">
        <div class="container text-center d-flex flex-column gap-3">
          <h2>Want to experience our features? get a free 7-days trial.</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.
          </p>
          <div class="d-flex gap-md-3 gap-sm-3 gap-2 flex-md-row flex-sm-row flex-column justify-content-center align-items-center mt-3">
            <a href="#" class="btn_hover">
              Learn more
            </a>
            <a href="#" class="get">
              Start free trial
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
