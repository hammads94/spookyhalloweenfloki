import shape1 from "../assets/images/shape//home_6/token_1.png";
import shape2 from "../assets/images/shape//home_6/token_2.png";
import shape3 from "../assets/images/shape//home_6/token_3.png";
import shape4 from "../assets/images/shape//home_6/token_4.png";
import shape5 from "../assets/images/shape//home_6/token_5.png";


const Tokenomics =()=>{
    return(



        <section id="token_distribution_06">

            <div className="container">
                <div className="tokenomics-heading">
                    <h2>CONTRACT</h2>
                </div>

                <div className="tokenomics-div">
                    <div className="single-div">
                        <p>Name: Spooky Halloween Floki</p>
                        <p>Symbol: SHF</p>
                        <p>Supply: 10bn</p>
                        <p>Contract Address: <br/> 0x9f59E79127fAD40bBC26c1eC6578d345AF40bD1f</p>
                    </div>
                </div>

                <div className="tokenomics-heading2">
                    <h2>TOKENOMICS</h2>
                </div>
            


        <div className="row distribution_single_items">    

        <div className="col-sm-12 col-md-6 col-lg-6 distribution_single_item  wow fadeInUp" data-wow-duration="2s" data-wow-delay=".3s">
               <div className="distribution_single">
                   <div className="distribution_wrapper">
                        <div className="distribution_details">
                           <h3>BUY TAX</h3>
                           <div className="token_shape">
                                <span className="shape1 header-shape"><img src={shape1} alt="" /></span>
                                <span className="shape2 header-shape"><img src={shape2} alt="" /></span>
                                <span className="shape3 header-shape"><img src={shape3} alt="" /></span>
                                <span className="shape4 header-shape"><img src={shape4} alt="" /></span>
                                <span className="shape5 header-shape"><img src={shape5} alt="" /></span>  
                           </div>
                       </div> 
                       <ul className="details_content">
                        <li className="details details_1">
                            <p>Marketing+development</p> 
                            <div className="details_caption">
                                <span>4%</span>
                            </div>
                        </li>
                       <li className="details details_2">
                            <p>SantaFloki Pump</p> 
                            <div className="details_caption">
                                <span>1%</span>
                            </div>
                        </li>
                       <li className="details details_3">
                            <p>DEV</p> 
                            <div className="details_caption">
                                <span>1%</span>
                            </div>
                        </li>
                       <li className="details details_4">
                            <div className="details_caption">
                                <span>1%</span>
                            </div>
                            <p>BURN</p> 
                        </li>
                       </ul>
                   </div>
               </div>
            </div>    
          
            <div className="col-sm-12 col-md-6 col-lg-6 distribution_single_item  wow fadeInUp" data-wow-duration="2s" data-wow-delay=".3s">
               <div className="distribution_single">
                   <div className="distribution_wrapper">
                        <div className="distribution_details">
                           <h3>SELL TAX</h3>
                           <div className="token_shape">
                                <span className="shape1 header-shape"><img src={shape1} alt="" /></span>
                                <span className="shape2 header-shape"><img src={shape2} alt="" /></span>
                                <span className="shape3 header-shape"><img src={shape3} alt="" /></span>
                                <span className="shape4 header-shape"><img src={shape4} alt="" /></span>
                                <span className="shape5 header-shape"><img src={shape5} alt="" /></span>  
                           </div>
                       </div> 
                       <ul className="details_content">
                       <li className="details details_1">
                            <p>Marketing+development</p> 
                            <div className="details_caption">
                                <span>10%</span>
                            </div>
                        </li>
                       <li className="details details_2">
                            <p>SantaFloki Pump</p> 
                            <div className="details_caption">
                                <span>1%</span>
                            </div>
                        </li>
                       <li className="details details_3">
                            <p>DEV</p> 
                            <div className="details_caption">
                                <span>1%</span>
                            </div>
                        </li>
                       <li className="details details_4">
                            <div className="details_caption">
                                <span>1%</span>
                            </div>
                            <p>BURN</p> 
                        </li>
                       </ul>
                   </div>
               </div>
            </div>  
        </div>           
        </div>
    </section>
    );
}

export default Tokenomics;
        /*
        <section id="tokenomics">
            <div className="container">
                <div className="tokenomics-heading">
                    <h2>CONTRACT</h2>
                </div>

                <div className="tokenomics-div">
                    <div className="single-div">
                        <p>Name: Spooky Halloween Floki</p>
                        <p>Symbol: SHF</p>
                        <p>Supply: 10bn</p>
                    </div>
                </div>

                <div className="tokenomics-heading2">
                    <h2>TOKENOMICS & TAXES</h2>
                </div>
*/



                
{/*
                <div className="tokenomics-container">
                    <div className="left">
                        <h3>11% BUY TAX</h3>
                        <p>
                            <ul>
                                <li>6% Marketing</li>
                                <li>2% Development</li>
                                <li>1% SantaFloki Pump</li>
                                <li>1% You</li>
                                <li>1% LP</li>
                            </ul>
                        </p>
                    </div>
                    <div className="right">
                        <h3>12% SELL TAX</h3>
                        <p>
                            <ul>
                                <li>7% Marketing</li>
                                <li>2% Development</li>
                                <li>1% SantaFloki Pump</li>
                                <li>1% You</li>
                                <li>1% LP</li>
                            </ul>
                        </p>
                    </div>
                    <div style={{clear: "both"}}></div>
                </div>

    

            </div>
        </section>
        */}
