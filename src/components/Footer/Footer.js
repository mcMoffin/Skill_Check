import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faYoutube,faLinkedin } from '@fortawesome/free-brands-svg-icons';

library.add(faTwitter, faYoutube, faLinkedin);

const Footer = () => {
    return (
        <footer>
            <section className="main_footer">
                <div className='main_footer_wrapper'>
                    <div className="footer_left">
                        <div className="container">
                            <img className='tiiny_footer_logo' src={`${process.env.PUBLIC_URL}/assets/logo-white.png`} alt="Tiiny white Logo" />
                            <p>Tiiny Labs Ltd. is a company registered in England and Wales with company number 12977077</p>
                        </div>
                        <div className="container">
                            <p>Made with</p>
                            <img className='aws_logo' src={`${process.env.PUBLIC_URL}/assets/img/AWS_Logo.png`} alt="AWS Logo" />
                        </div>
                        <div className="container social">
                            <a href="/"><FontAwesomeIcon icon={faTwitter} /></a>
                            <a href="/"><FontAwesomeIcon icon={faYoutube} /></a>
                            <a href="/"><FontAwesomeIcon icon={faLinkedin} /></a>
                        </div>
                    </div>
                    <div className="footer_right">
                        <div className="footer_list">
                            <h3>Products</h3>
                            <ul>
                                <li><a href="/">File Hosting</a></li>
                                <li><a href="/">File Analytics</a></li>
                                <li><a href="/">Password Protect</a></li>
                                <li><a href="/">QR Codes</a></li>
                            </ul>
                        </div>
                        <div className="footer_list">
                            <h3>Use Cases</h3>
                            <ul>
                                <li><a href="/">Sales & Marketing</a></li>
                                <li><a href="/">Designers & Artists</a></li>
                                <li><a href="/">Developers</a></li>
                                <li><a href="/">Real Estate</a></li>
                                <li><a href="/">Recruitment</a></li>
                                <li><a href="/">Hospitality</a></li>
                                <li><a href="/">E-Learning & Publishing</a></li>
                                <li><a href="/">Crypto</a></li>
                                <li><a href="/">Students</a></li>
                            </ul>
                        </div>
                        <div className="footer_list">
                            <h3>Resources</h3>
                            <ul>
                                <li><a href="/">Sales & Marketing</a></li>
                                <li><a href="/">Blog</a></li>
                                <li><a href="/">FAQs</a></li>
                                <li><a href="/">Support</a></li>
                                <li><a href="/">Report abuse</a></li>
                                <li><a href="/">Affiliate program</a></li>
                            </ul>
                        </div>
                        <div className="footer_list">
                            <h3>Useful links</h3>
                            <ul>
                                <li><a href="/">Pricing</a></li>
                                <li><a href="/">Contact</a></li>
                                <li><a href="/">Log in / Sign up</a></li>
                                <li><a href="/">Download MacOS app</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section className="copyright_container">
                <div className="copyright">
                    <span><a href="/">© Tiiny Host 2023</a></span>
                    <span><a href="/">Website by B&B</a></span>
                </div>
                <div className="copyright">
                    <span><a href="/">Terms & Conditions</a></span>
                    <span><a href="/">Privacy Policy</a></span>
                </div>
            </section>
        </footer>
    );
};

export default Footer;