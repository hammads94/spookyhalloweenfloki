import Slider from "react-slick";
import Logo1 from '../assets/images/1.png';
import Logo2 from '../assets/images/12.png';
import Logo3 from '../assets/images/63.png';
import Logo4 from '../assets/images/121.png';
import Logo5 from '../assets/images/167.png';
import Logo6 from '../assets/images/208.png';

const Team =() =>{
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
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
                    dots: true
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                  }
            }
        ]
    }  
    return(
        <section id="Team">
            <div className="container">
                <div className="Team-heading">
                    <h2>Team</h2>
                </div>
                <div className="carousel">
                <Slider className="sldier-carousel"  {...settings}>
                <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <img src={Logo1} />
                        </div>
                        <div class="flip-card-back">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et magnam, ipsam quia atque</p>
                        </div>
                    </div>
                </div>

                <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <img src={Logo2} />
                        </div>
                        <div class="flip-card-back">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et magnam, ipsam quia atque</p>
                        </div>
                    </div>
                </div>

                <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <img src={Logo3} />
                        </div>
                        <div class="flip-card-back">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et magnam, ipsam quia atque</p>
                        </div>
                    </div>
                </div>

                <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <img src={Logo4} />
                        </div>
                        <div class="flip-card-back">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et magnam, ipsam quia atque</p>
                        </div>
                    </div>
                </div>

                <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <img src={Logo5} />
                        </div>
                        <div class="flip-card-back">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et magnam, ipsam quia atque</p>
                        </div>
                    </div>
                </div>

                <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <img src={Logo6} />
                        </div>
                        <div class="flip-card-back">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et magnam, ipsam quia atque</p>
                        </div>
                    </div>
                </div>
                </Slider>
                </div>

            </div>
        </section>
    );
}

export default Team;