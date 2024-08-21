import React from 'react';
import "./Footer.css";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin,} from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <section className="footer-links">
                    <div className="row text-center d-flex justify-content-center pt-5">
                        <div className="col-md-2">
                            <h6 className="text-uppercase font-weight-bold">
                            <h3>About Us</h3>

                            </h6>
                        </div>
                        <div className="col-md-2">
                            <h6 className="text-uppercase font-weight-bold">
                                
                            </h6>
                        </div>
                        <div className="col-md-2">
                            <h6 className="text-uppercase font-weight-bold">
                             
                            </h6>
                        </div>
                        <div className="col-md-2">
                            <h6 className="text-uppercase font-weight-bold">
                              
                            </h6>
                        </div>
                        <div className="col-md-2">
                            <h6 className="text-uppercase font-weight-bold">
                               
                            </h6>
                        </div>
                    </div>
                </section>

                <hr className="my-5" />

                <section className="footer-text">
                    <div className="row d-flex justify-content-center">
                        <div className="col-lg-8 text-center">
                            <p>Feel free to reach out for any inquiries, collaborations, or opportunities. I am always open to discussing new projects and ideas. You can connect with me through the social media links provided or via email.</p>
                        </div>
                    </div>
                </section>

                <section className="footer-social">
                    <a href="https://www.facebook.com/subin.subi.3386585" target="_blank" rel="noopener noreferrer" className="footer-social-icon">
                        <FaFacebook size={30} />
                    </a>
                    <a href="https://www.instagram.com/s.u.b.i_n_" target="_blank" rel="noopener noreferrer" className="footer-social-icon">
                        <FaInstagram size={30} />
                    </a>
                    <a href="https://www.linkedin.com/in/subin-tm-468729288" target="_blank" rel="noopener noreferrer" className="footer-social-icon">
                        <FaLinkedin size={30} />
                    </a>
                    <a href="https://github.com/subintm" target="_blank" rel="noopener noreferrer" className="footer-social-icon">
                        <FaGithub size={30} />
                    </a>
                </section>
            </div>

            <div className="footer-copyright">
              subintmtm70@gmail.com
            </div>
        </div>
    );
};

export default Footer;
