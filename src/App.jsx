import * as React from 'react';
import './App.css';

import Header from './components/header/header';
import Footer from './components/footer/footer';
import Employees from './components/employees/employees';

function App() {
  return (
    <div>
      <Header/>
      <Employees/>
      <Footer/>
    </div>
  );
}

export default App;
