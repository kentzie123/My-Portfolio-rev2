import { useGlobalContext } from "./context";


const certificateImages = import.meta.glob('../assets/img/*.jpg', { eager: true });

function CertificateModal() {
    const { selectedCertificate, setShowCertModal } = useGlobalContext();


    const imageSrc = selectedCertificate
        ? certificateImages[`../assets/img/${selectedCertificate}.jpg`]?.default
        : '';

    return (
        <div className="cert-modal position-fixed top-0 start-0 p-3">
            <button 
                type="button" 
                className="btn-close btn-close-white position-absolute end-0 top-0 m-4" 
                aria-label="Close" 
                onClick={() => setShowCertModal(false)}
            ></button>
            <div className="d-flex justify-content-center align-items-center h-100 w-100">
                {imageSrc && (
                    <img 
                        style={{ maxWidth: "80%" }} 
                        src={imageSrc} 
                        alt={selectedCertificate} 
                    />
                )}
            </div>
        </div>
    );
}

export default CertificateModal;