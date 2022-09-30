
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faTelegram
  } from "@fortawesome/free-brands-svg-icons";

const Footer =()=>{
    return(
        <section id="footer">
            <div className="container">
                <div className="footer-container">

                    <div className="inline-container footer-links">
                        <h2>QUICK LINKS:</h2>
                        <ul>
                            <a href="#header-container"><li>HOME</li></a>
                            <a href="#tokenomics"><li>TOKENOMICS</li></a>
                            <a href="#roadmap"><li>ROADMAP</li></a>
                            <a href="#"><li>AUDIT & KYC</li></a>
                            <a href="#faq-section"><li>FAQ's</li></a>
                        </ul>
                    </div>
                    <div className="inline-container icon-div">
                        <h2>SOCIAL MEDIA:</h2>
                        
                            <a href="t.me/SpookyHalloweenFloki"
                            className="telegram social" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faTelegram} size="2x" />
                            </a>
                            <a href="https://twitter.com/SpookyHlwFloki" className="twitter social" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faTwitter} size="2x" />
                            </a>
                    </div>

                    <div className="footer-text">
                        <p>
                        *All content on the Spooky Halloween Floki website is not financial advice. <br />
                        *Spooky hallooween Floki complies with the rules of all GDPR
                        </p>

                        <p>© 2022 SPOOKY HALLOWEEN FLOKI</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Footer;