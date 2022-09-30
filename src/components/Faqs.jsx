import React, { Component } from 'react';
import Faq from 'react-faq-component';

const data = {
    /*title: "FAQ (How it works)",*/
    rows: [
        {
            title: "When is the Presale on Pinksale?",
            content: `Subscription Presale on Pinksale will start on Friday 30th September and will be public. 
            Please refer to Pinksale's Subscription. Presale section to understand the process. `,
        },
        {
            title: "What is the Slippage to be used at launch? ",
            content:
                "Set the slippage to 12-15%.",
        },
        {
            title: "What is the Max Wallet & Max Transaction?",
            content: `Max Wallet is set to 1% of Total Supply & Max Transaction is set to 0.5% of total Supply `,
        },
        {
            title: "Is the Liquidity Locked?",
            content: <p>Liquidity is Locked on Pinksale for 6 months. </p>,
        },
        {
            title: "Where can i buy SHF? ",
            content: `You can buy Spooky Halloween Floki from Pancakeswap or Poocoin after it's live.  `,
        },
        {
            title: "Who is the team behind the project?",
            content: `The lead team consists like-minded individuals with years of experience. 
            Skynet the Lead dev of Santa Floki & Larry are the 2 devs of the project.   `,
        },
        {
            title: "Has the Contract being Audited? Has the team done a KYC Verification? ",
            content: `Yes the contract has been audited from Coinsniper and the team has passed the KYC verification. `,
        },
    ],
};

const styles = {
    bgColor: 'black',
    titleTextColor: "white",
    rowTitleColor: "white",
    rowContentColor: 'white',
    arrowColor: "white",
    rowTitleTextSize: '25px',

    rowContentPaddingTop: '10px',
    rowContentPaddingBottom: '30px',
    rowContentPaddingLeft: '50px',
    rowContentPaddingRight: '150px',
    transitionDuration: "1s",
};

const config = {
    // animate: true,
    // arrowIcon: "V",
    // tabFocus: true
};

const Faqs=()=>{
    return(
        <section id="faq-section">
            <div className='container'>
                <div className='faq-heading'>
                    <h2>FREQUENTLY ASKED QUESTIONS</h2>
                </div>
                <Faq 
                    data={data}
                    styles={styles}
                    config={config}
                />
            </div>
        </section>
    );
}
export default Faqs;

/*export default function Faqs {

    return (
        <div>
            <Faq
                data={data}
                styles={styles}
                config={config}
            />
        </div>
    );
}*/