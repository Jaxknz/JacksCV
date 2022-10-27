import { useState , } from 'react';
import './App.css';
import MainMint from './MainMint';
import NavBar from './NavBar';
import About from './About';
import Team from './Team';
import Roadmap from './Roadmap';
import Footer from './Footer';
import FAQ from './FAQ';

function App() {
  const [accounts, setAccounts] = useState([]);
  return( 
    <div className="App">
  <div className='overlay'>
    <div className='moving-background'>

      < NavBar accounts={accounts} setAccounts={setAccounts}/>
      <MainMint accounts={accounts} setAccounts={setAccounts}/>
      <About/>
      <Team/>
      <Roadmap/>
      <FAQ/>
      <Footer/>
    </div>
 </div>

  </div>
  );
}

export default App;
