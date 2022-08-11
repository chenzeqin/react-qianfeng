import React from 'react';
import Demos from './demos';
import HooksDemo from './demos/hooks-demo';
import Maoyan from './proxy-demo/Maoyan';
import Maizuo from './router-pages';


function App() {
  return (
    <div className="App">
      {/* <HooksDemo></HooksDemo> */}
      {/* <Demos></Demos> */}
      {/* react-router-dom v5 demo */}
      {/* <Maizuo></Maizuo> */}
      {/* http proxy demo */}
      <Maoyan></Maoyan>
    </div>
  );
}

export default App;
