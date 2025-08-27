function Contacts(){
    return(
        <section id="contacts" className="backg-light-dark-1 px-lg-5 py-5">
            <div>
                <div className="container m-0 m-lg-3">
                    <h5 className="theme-color fw-bold">CONTACTS</h5>
                    <h4 className="fw-semibold text-color-1">Don't hesitate to drop me a message! 👋 Feel free to reach out! 👇</h4>
                </div>
                <div className="d-flex justify-content-between align-items-center flex-column flex-lg-row px-5 my-4 gap-4">
                    <div className="d-flex flex-column flex-lg-row text-lg-start text-center gap-3">
                        <div className="my-auto">
                            <svg className="contact-icon" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 18l-2 -1l-6 3v-13l6 -3l6 3l6 -3v7.5"></path><path d="M9 4v13"></path><path d="M15 7v5"></path><path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path><path d="M20.2 20.2l1.8 1.8"></path></svg>
                        </div>
                        <div>
                            <div className="fw-bold">Location</div>
                            <div>Cebu, Philippines</div>
                        </div>
                    </div>
                    <div className="d-flex flex-column flex-lg-row text-lg-start text-center gap-3">
                        <div className="my-auto">
                            <svg className="contact-icon" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path><path d="M3 7l9 6l9 -6"></path></svg>
                        </div>
                        <div>
                            <div className="fw-bold">Mail</div>
                            <a className="text-color-2 text-decoration-none" href="mailto:kentadriane2@gmail.com">kentadriane2@gmail.com</a>
                        </div>
                    </div>
                    <div className="d-flex flex-column flex-lg-row text-lg-start text-center gap-3">
                        <div className="my-auto">
                            <svg className="contact-icon" fill="#147efb" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg>
                        </div>
                        <div>
                            <div className="fw-bold">Facebook</div>
                            <a className="text-color-2 text-decoration-none" href="https://www.facebook.com/Kentadriane" target="_blank" rel="noopener noreferrer">Kent Adriane Goc-ong</a>
                        </div>
                    </div>
                </div>
            </div>      
        </section>
    )
}

export default Contacts;