import { useGlobalContext } from "./context";

function CertificateModal(){

    const {selectedCertificate, setShowCertModal} = useGlobalContext();

    return(
        <div className="cert-modal position-fixed top-0 start-0 p-3">
            <button type="button" class="btn-close btn-close-white position-absolute end-0 top-0 m-4" aria-label="Close" onClick={()=>setShowCertModal(false)}></button>
            <div className="d-flex justify-content-center align-items-center h-100 w-100">
                <img style={{maxWidth:"80%"}} src={require(`../assets/img/${selectedCertificate}.jpg`)} alt="" />
            </div>
        </div>
    )
}

export default CertificateModal;