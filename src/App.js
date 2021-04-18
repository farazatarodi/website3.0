import AOS from 'aos';
import 'aos/dist/aos.css';
import Circle from './components/Circle';
import SW from './scroll.png';

function App() {
  AOS.init({ duration: 1200 });
  return (
    <div className="App">
      <div className="first">
        <div className="name-container">
          <h1 className="name" data-aos="slide-up" data-aos-duration="700">
            Faraz Atarodi
          </h1>
        </div>
        <div className="title-container">
          <h2
            className="title"
            data-aos="slide-up"
            data-aos-duration="700"
            data-aos-delay="300"
          >
            Developer
          </h2>
        </div>
        <div className="scroll-wheel">
          <img src={SW} alt="" />
        </div>
      </div>
      <div className="second">
        <h1>2</h1>
      </div>
      <div className="third">
        <h1>3</h1>
      </div>
      <div className="c-container">
        <Circle
          dims={'40rem'}
          top={'-11rem'}
          left={'-15rem'}
          aos={'fade-down-right'}
        />
        <Circle
          dims={'20rem'}
          top={'-5rem'}
          left={'9rem'}
          aos={'fade-down-right'}
          delay={'250'}
        />
        <Circle
          dims={'50rem'}
          top={'95vh'}
          left={'75vw'}
          aos={'fade-down-left'}
          anchor={'top-center'}
        />
        <Circle
          dims={'100rem'}
          top={'270vh'}
          left={'-25vw'}
          aos={'fade-up-right'}
          anchor={'top-bottom'}
        />
        <Circle
          dims={'20rem'}
          top={'290vh'}
          left={'45%'}
          aos={'fade-up-right'}
          anchor={'top-bottom'}
        />
      </div>
    </div>
  );
}

export default App;
