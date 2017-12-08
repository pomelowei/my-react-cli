import React from 'react';
import Header from './header.jsx';
import Index from './index.jsx'

import '../assets/scss/main.scss';

const App = () => {
  return (
      <div className="header-visible">
        <Header />
        <Index />
      </div>
  );
};

export default App;
