import aboutBackground from "../assets/img/about-background.jpg";

function AboutMe() {
  return (
    <section
      id="about"
      className="d-flex justify-content-center align-items-center backg-light-dark-1"
    >
      <div className="d-flex align-items-lg-start align-items-center flex-column flex-lg-row col-lg-9 col-md-12 gap-4">
        <img
          className="img-fluid rounded-3"
          src={aboutBackground}
          alt="about-pic"
          style={{ maxWidth: "500px", width: "80%" }}
        />
        <div className="text-lg-start text-center px-lg-0 px-4">
          <h5 className="theme-color fw-bold">ABOUT ME</h5>
          <h4 className="text-color-1 fw-semibold">
            A dedicated Web Developer based in Cebu, Philippines 🚩
          </h4>
          <div className="text-color-2">
            <div>
              Hi, I’m <strong>Kent Adriane Goc-ong</strong>
              <img
                className="mb-2 inline-block"
                style={{ height: "24px", width: "24px" }}
                src="/waving-hand.gif"
                alt="waving-hand"
              />
            </div>
            <p>
              I’m a self-driven <strong>web developer</strong> who enjoys
              building <strong>full-stack applications</strong> with tools like{" "}
              <strong>
                ReactJS, Tailwind, Bootstrap, MongoDB, and Supabase
              </strong>
              . I love turning ideas into clean, responsive, and user-friendly
              experiences. I’m curious by nature, quick to learn, and I enjoy
              solving problems with both creativity and logic.
            </p>
            <p>
              Beyond coding, I value teamwork and enjoy collaborating with
              people who share the same drive for creating meaningful projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
