import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addNote } from '../../redux/actions/notes';

import Header from '../../components/Header'
import NotesViewer from '../../components/noteViewer'
import NotesScroller from '../../components/notesScroller'
import Note from '../../components/note'

import styles from './style.css'; 


class App extends Component {
  state = {
    notes: []
  }

  componentDidMount() {
    this.setState({ notes : this.props.notes})
    this.props.dispatch(addNote({
      title:'Title1',
      subtitle: 'subtitle2',
      content: 'Hello'
    }))
    this.props.dispatch(addNote({
      title:'Title1',
      subtitle: 'subtitle2',
      content: 'Hello'
    }))
    this.props.dispatch(addNote({
      title:'Title1',
      subtitle: 'subtitle2',
      content: 'Hello'
    }))
  }


  render() {
    return (
      <div>
        <Header />
        <div id="wrapper">
          <NotesScroller notes={this.state.notes || []} />
          <NotesViewer />
        </div>
      </div>
    );
  }
}


const mapStateToProps = state => {
  console.log(state)
  return {
    notes: state.notesReducer.notes
  }
}

const mapDispatchToProps = dispatch => ({
  dispatch
})

export default connect(mapStateToProps, mapDispatchToProps)(App);