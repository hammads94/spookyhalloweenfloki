import Navigation from "./Navigation";
import video from "../assets/video/video.mp4";
import HeaderLogo from "../assets/images/header-logo.png"; 

const Header =() =>{
    return(
        <header id="header-container">
            <Navigation />

            <div className="wrapper">
                <video className="lazy" loop autoPlay muted src={video} />
            </div>


            <div className="header-logo">
                <img src={HeaderLogo} />
            </div>
            
        </header>
    );
}

export default Header;



document.addEventListener("DOMContentLoaded", function() {
    var lazyVideos = [].slice.call(document.querySelectorAll("video.lazy"));
  
    if ("IntersectionObserver" in window) {
      var lazyVideoObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(video) {
          if (video.isIntersecting) {
            for (var source in video.target.children) {
              var videoSource = video.target.children[source];
              if (typeof videoSource.tagName === "string" && videoSource.tagName === "SOURCE") {
                videoSource.src = videoSource.dataset.src;
              }
            }
  
            video.target.load();
            video.target.classList.remove("lazy");
            lazyVideoObserver.unobserve(video.target);
          }
        });
      });
  
      lazyVideos.forEach(function(lazyVideo) {
        lazyVideoObserver.observe(lazyVideo);
      });
    }
  });