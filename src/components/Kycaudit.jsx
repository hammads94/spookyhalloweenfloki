import kyc from '../assets/images/kyc.jpeg';
import Audit from '../assets/images/audit.jpeg';

const Kycaudit=()=>{
    return(
        <section id="KYC">
            <div className="container">
                <div className="KYC-heading">
                    <h2>KYC & AUDIT</h2>
                </div>

                <div className="KYC-audit-links">
                    <div className="KYC-link">
                        <a href='https://github.com/cyberscope-io/kyc/blob/main/1-shf/kyc.png' target="_blank" rel="noopener noreferrer"><img src={kyc} /></a>
                    </div>
                    <div className="audit-link">
                        <a href='https://github.com/cyberscope-io/audits/blob/main/1-shf/audit.pdf' target="_blank" rel="noopener noreferrer"><img src={Audit} /></a>
                    </div>
                    <div style={{clear: "both"}}></div>
                </div>
            </div>
        </section>
    );
}

export default Kycaudit;