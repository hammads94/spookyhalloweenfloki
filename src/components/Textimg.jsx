import Image1 from '../assets/images/22.png';
import Image2 from '../assets/images/66.png';
import Image3 from '../assets/images/101.png';

import Slider from "react-slick";

const Textimg =()=>{
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1280,
                settings:{
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 991,
                settings:{
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                  }
            }
        ]
    }  
    return(
        <section id="textimg-section">
            <div className="container">

                <div className='textimg-intro'>
                    <h2>NFT's Description</h2>
                    <p>
                    Our first round of utilities will include 500 NFT's. These NFT's can be staked via our ecosystem to earn Santa Floki tokens. They will have additional use in the Santaverse which will release next year. Holding a Spooky Halloween Floki NFT will also allow you to play Santa Floki’s own P2E game, Santa Floki Rush.

                    In addition The NFT's can be used in The Santaverse to purchase land in prime locations at a discount price of Santa Floki. Also those NFT's will give you entry on to the SantaVerse.
                    </p>
                </div>

            <Slider className="sldier-carousel" {...settings}>
                <div class="text-img-slider">
                    <img src={Image1} />
                </div>
                <div class="text-img-slider">
                    <img src={Image2} />
                </div>
                <div class="text-img-slider">
                    <img src={Image3} />
                </div>
                <div class="text-img-slider">
                    <img src={Image2} />
                </div>
                <div class="text-img-slider">
                    <img src={Image1} />
                </div>
                <div class="text-img-slider">
                    <img src={Image3} />
                </div>
                <div class="text-img-slider">
                    <img src={Image1} />
                </div>
        </Slider>
            </div>
        </section>
    );
}

export default Textimg;
                
/*
                <div className="text-img-container">
                    <div className="left-div1">
                        <img src={Image3} />
                    </div>
                    <div className="right-div1">
                        <h2>How Did Spooky Shiba Come To Be?</h2>
                        <p>These are a few of the cool features that make up Spooky Shiba, the horror coin that’s here to stay. 
                            With all these spooky surprises waiting for you around every corner, it might just give you a heart rate 
                            spike that will be worthwhile! The Spooky Shiba token has proven to be more than just a seasonal phenomenon. 
                            In fact, it gained it’s grip in the BSC realm after its release in October of 2021. Some thought its 
                            value would plummet after October 31st, when Halloween came to an end, but quite the opposite happened. 
                            They don’t say “Spooky Season Never Ends” for nothing! Make no mistake, people are taking notice of Spooky 
                            Shiba, including many crypto influencers.</p>
                    </div>
                    <div style={{clear: "both"}}></div>
                </div>


                <div className="text-img-container">
                    <div className="left-div2">
                        <h2>How Did Spooky Shiba Come To Be?</h2>
                        <p>These are a few of the cool features that make up Spooky Shiba, the horror coin that’s here to stay. 
                            With all these spooky surprises waiting for you around every corner, it might just give you a heart rate 
                            spike that will be worthwhile! The Spooky Shiba token has proven to be more than just a seasonal phenomenon. 
                            In fact, it gained it’s grip in the BSC realm after its release in October of 2021. Some thought its 
                            value would plummet after October 31st, when Halloween came to an end, but quite the opposite happened. 
                            They don’t say “Spooky Season Never Ends” for nothing! Make no mistake, people are taking notice of Spooky 
                            Shiba, including many crypto influencers.</p>
                    </div>
                    <div className="right-div2">
                        <img src={Image2} />
                    </div>
                    <div style={{clear: "both"}}></div>
                </div>


                <div className="text-img-container">
                    <div className="left-div3">
                        <img src={Image1} />
                    </div>
                    <div className="right-div3">
                        <h2>How Did Spooky Shiba Come To Be?</h2>
                        <p>These are a few of the cool features that make up Spooky Shiba, the horror coin that’s here to stay. 
                            With all these spooky surprises waiting for you around every corner, it might just give you a heart rate 
                            spike that will be worthwhile! The Spooky Shiba token has proven to be more than just a seasonal phenomenon. 
                            In fact, it gained it’s grip in the BSC realm after its release in October of 2021. Some thought its 
                            value would plummet after October 31st, when Halloween came to an end, but quite the opposite happened. 
                            They don’t say “Spooky Season Never Ends” for nothing! Make no mistake, people are taking notice of Spooky 
                            Shiba, including many crypto influencers.</p>
                    </div>
                    <div style={{clear: "both"}}></div>
                </div>
                */
