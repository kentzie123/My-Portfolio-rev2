import { useGlobalContext } from "./context";

const certificates = [
    {
        title: "Computer System Servicing (NCII)",
        certImgUrl: "css",
        from: "TESDA",
        dateAcquired: "September 29, 2020"
    },
    {
        title: "Computer System Servicing (NCII)",
        certImgUrl: "sample",
        from: "TESDA",
        dateAcquired: "September 29, 2020"
    }
];

const images = import.meta.glob("../assets/img/*.jpg", { eager: true });

function Certificates() {
    const { setShowCertModal, setSelectedCertificate } = useGlobalContext();

    function certModal(img) {
        setShowCertModal(true);
        setSelectedCertificate(img);
    }

    return (
        <section id="certificates" className="backg-light-dark-2 px-lg-5 py-5">
            <div className="container m-0 m-lg-3">
                <h5 className="theme-color fw-bold">CERTIFICATES</h5>
                <h4 className="fw-semibold text-color-1">
                    Diligently pursuing certification programs to enhance proficiency and tackle fresh opportunities head-on. 🎓
                </h4>
            </div>
            <div className="d-flex flex-wrap justify-content-center p-3 mt-5 mx-3 gap-2">
                {certificates.map((cert, index) => {
                    const certImgSrc = images[`../assets/img/${cert.certImgUrl}.jpg`]?.default;

                    return (
                        <div key={index} className="certificate card mb-3 rounded-3 shadow-lg" style={{ maxWidth: "25rem", minWidth: "14rem" }}>
                            <div className="card-header bg-transparent h5">{cert.title}</div>
                            <div className="card-body text-success overflow-hidden">
                                {certImgSrc ? (
                                    <img
                                        className="cert-img card-img"
                                        src={certImgSrc}
                                        onClick={() => certModal(cert.certImgUrl)}
                                        alt={cert.title}
                                    />
                                ) : (
                                    <p>Image not found</p>
                                )}
                            </div>
                            <div className="card-footer bg-transparent">
                                <blockquote className="blockquote mt-3 mb-0">
                                    <footer className="blockquote-footer">
                                        {cert.from} <cite title="Source Title">({cert.dateAcquired})</cite>
                                    </footer>
                                </blockquote>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

export default Certificates;
