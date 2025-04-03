import aboutBackground from '../assets/img/about-background.jpg';

function AboutMe() {
    return (
        <section id="about" className="d-flex justify-content-center align-items-center backg-light-dark-1">
            <div className='d-flex align-items-lg-start align-items-center flex-column flex-lg-row col-lg-9 col-md-12 gap-4'>
                <img className="img-fluid rounded-3" src={aboutBackground} alt="about-pic" style={{maxWidth:"500px", width:"80%"}}/>
                <div className='text-lg-start text-center px-lg-0 px-4'>
                    <h5 className="theme-color fw-bold">ABOUT ME</h5>
                    <h4 className="text-color-1 fw-semibold">A dedicated Web Developer based in Cebu, Philippines 🚩</h4>
                    <p className="text-color-2">
                        As an aspiring computer programmer, I'm <strong>Kent Adriane Goc-ong</strong>, a dedicated enthusiast in the world of coding. 
                        With a passion for crafting clean and efficient solutions, I specialize in <strong>React JS & Bootstrap</strong>. 
                        A Graduate student in <strong>Computer Engineering</strong> from <em>Center for Industrial Technology and Enterprise</em>, I am on a mission to turn ideas into impactful digital experiences. 
                        Let's connect and embark on the exciting journey of innovation together!
                    </p>
                </div>
            </div>
        </section>
    );
}

export default AboutMe;
