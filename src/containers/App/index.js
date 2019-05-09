import React, { Component } from 'react';
import styles from './style.css'; 

import Header from '../../components/Header'
import NotesViewer from '../../components/noteViewer'
import NotesScroller from '../../components/notesScroller'
import Note from '../../components/note'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div id="wrapper">
          <NotesScroller />
          <NotesViewer />
        </div>
      </div>
    );
  }
}

export default App;