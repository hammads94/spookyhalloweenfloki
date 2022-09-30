
import './App.css';
import './Responsive.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Introduction from './components/Introduction';
import Marketplace from './components/Marketplace';
import Team from './components/Team';
import Image from './components/Image';
import Textimg from './components/Textimg';
import Signup from './components/Signup';
import Footer from './components/Footer';
import Tokenomics from './components/Tokenomics';
import Faqs from './components/Faqs';
import Roadmap from './components/Roadmap';
import Kycaudit from './components/Kycaudit';

function App() {
  return (
    <div className="body">
      <Header />
      <Introduction />
      <Tokenomics />
      <Roadmap />
      <Textimg />
      <Kycaudit />
      <Faqs />
      <Footer />
    </div>
  );
}

export default App;
