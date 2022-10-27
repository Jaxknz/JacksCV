import './App.css';
import Main from './Main';
import NavBar from './NavBar';
import About from './About';
import Education from './Education';
import Work from './Work';
import Footer from './Footer';

function App() {
  return( 
    <div className="App">
  <div className='overlay'>
    <div className='moving-background'>

      < NavBar />
      <Main/>
      <About/>
      <Education/>
      <Work/>
      <Footer/>
    </div>
 </div>

  </div>
  );
}

export default App;
