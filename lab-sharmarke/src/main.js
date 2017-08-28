import './style/main.scss';

import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';

import NoteContainer from './component/note-container'
import NoteCreateForm from './component/note-create-form'
import NoteItem from './component/note-item'
import NoteList from './component/note-list'


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
            <Route exact path='/create' component={() => <NoteContainer app={this.liftApp()} />} />
          </section>
        </BrowserRouter>
        <NoteList notes={this.state.notes} noteRemove={this.noteRemove}/>

      </main>
    )
  }
}
ReactDom.render(<App />, document.getElementById('root'));
