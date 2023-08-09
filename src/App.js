// import logo from './logo.svg';
import Header from './Header/Header';
import Goods from './Goods/Goods';
import Good from './Goods/Good';
import './App.css';
import About from './About';
import Order from './Order';
// import Users from './Users';
// import UserId from './UserId';
import Error from './Error';
import Main from './Main';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const myStyle = { color: 'black', fontFamily: 'Arial', fontSize: '32px'};
const headerData = {
  site_name: 'up react',
  // nav: [
  //   { 'link': 'nav1', 'text': 'my link1'},
  //   { 'link': 'nav2', 'text': 'my link2'},
  //   { 'link': 'nav3', 'text': 'my link3'},
  // ]
  nav: [
    { 'link': '#', 'text': 'Home'},
    { 'link': 'About', 'text': 'About'},
    { 'link': 'Contact', 'text': 'Contact'},
  ]
};

function App_react_dom_router() {
  return (
    <>
      {/* <Header data={headerData} /> */}
      <Router>
        <nav>
          <li className='nav-item'><Link to="/">Main</Link></li>
          <li className='nav-item'><Link to="/about">About</Link></li>
          {/* <li className='nav-item'><Link to="/users">Users</Link></li> */}
          <li className='nav-item'><Link to="/catalog">Catalog</Link></li>
        </nav>
        <Routes>
          <Route exact path='/' element={<Main />} />
          <Route path='/about' element={<About />} />
          {/* <Route path='/users' element={<Users />} /> */}
          <Route path='/catalog' element={<Goods />} />
          {/* <Route path='/users/:userName' element={<UserId />} /> */}
          <Route path='/catalog/:goodId' element={<Good />} />
          <Route path='/order' element={<Order />} />
          <Route path='/order/:goodId' element={<Order />} />
          <Route path='*' element={<Error/>} />
        </Routes>
        {/* <Goods /> */}
      </Router>
      {/* <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code style={myStyle}>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>     */}
      {/* <div>
        Content
      </div> */}
      
    </>

  );
}

export default App_react_dom_router;
