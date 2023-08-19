import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      
    <nav className="navbar">
        <div className="navbar-title">DORSIN</div>
        <a href="" className="toggle-button">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
        </a>
        <div className="navbar-links">
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">Services</a></li>
                <li><a href="">Features</a></li>
                <li><a href="">Pricing</a></li>
                <li><a href="">Team</a></li>
                <li><a href="">Blog</a></li>
                <li><a href="">Contact</a></li>
            </ul>
        </div>
        <div className="button">
            <button class="btn">Try it free</button>
        </div>
    </nav>

    
    
    <div>
        <h1>Our Services</h1>
        <p>We craft digital, graphic and dimensional thinking, to create category leading brand experiences that have meaning and add a value for our clients.</p>
        <div className='card-container'>
          <div className='card'>
            <i class="fa-thin fa-diamond"></i>
            <h2 className='card-title'>Digital Design</h2>
            <p className='card-content'>Some quick example text to build on the card title and make up the bulk of the card's content. Moltin gives you the platform.</p>
          </div>

          <div className='card'>
            <h2 className='card-title'>Unlimited Colors</h2>
            <p className='card-content'>Credibly brand standards compliant users without extensible services. Anibh euismod tincidunt ut laoreet.</p>
          </div>

          <div className='card'>
            <h2 className='card-title'>Strategy Solutions</h2>
            <p className='card-content'>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean necessary regelialia.</p>
          </div>
        </div>


        <div className='card-container'>
          <div className='card'>
            <h2 className='card-title'>Awesome Support</h2>
            <p className='card-content'>It is a paradisematic country, in which roasted parts of sentences fly into your mouth leave for the far World.</p>
          </div>

          <div className='card'>
            <h2 className='card-title'>Truly Multipurpose</h2>
            <p className='card-content'>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
          </div>

          <div className='card'>
            <h2 className='card-title'>Easy to customize</h2>
            <p className='card-content'>Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia.</p>
          </div>
        </div>
    
    
    </div>
    </div>
  );
}

export default App;
