import './style/main.scss';

import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';

import NoteCreateForm from './component/create-note-container'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: []
    }
    this.liftApp = this.liftApp.bind(this);
  }

  liftApp() {
    return {
      state: this.state,
      setState: this.setState.bind(this)
    }
  }

  componentDidUpdate() {
    console.log('__STATE__', this.state);
  }

  render() {
    return (
      <main>
        <BrowserRouter>
          <section>
            <Route exact path='/create' component={() => <NoteCreateForm app={this.liftApp()} />} />
          </section>
        </BrowserRouter>
      </main>
    )
  }
}
ReactDom.render(<App />, document.getElementById('root'));
