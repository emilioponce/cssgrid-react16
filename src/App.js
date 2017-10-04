import React, {Component} from 'react';
import Comp1 from './Comp1';
import Comp2 from './Comp2';
import Comp3 from './Comp3';

class App extends Component {
  render() {
    return <section id="page">
      <div className="header">
        <Comp1/>
        <Comp2/>
      </div>
      <div className="breadcrumb">
      <Comp3/>
      </div>
      <div className="zona-esquerra">esquerra</div>
      <main>Main area</main>
      <div className="zona-dreta">dreta</div>
      <footer>Footer</footer>
    </section>
  }
}

export default App;
