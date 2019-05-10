import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addNote } from '../../redux/actions/notes';

import Header from '../../components/Header'
import NotesViewer from '../../components/noteViewer'
import NotesScroller from '../../components/notesScroller'
import Note from '../../components/note'
import AddNoteModal from '../../components/addNoteModal'

import styles from './style.css'; 


class App extends Component {
  state = {
    notes: [],
    selectedNote: null,
    showAddModal: false,
  }

  componentDidMount() {
    this.setState({ notes : this.props.notes})
  }

  onClickCard = (note) => {
    this.setState({ 
      selectedNote: note
    })
  }

  onFilterSearch = (value) => {
     console.log("filter",value)
  }

  onClickAddNote = () => {
    console.log("hello")
    this.setState({ showAddModal : true})
  }

  AddNoteToRedux = (note) => {
    this.props.dispatch(addNote({
     ...note
    }))
  }

  onCancelModal = () => {
    this.setState({ showAddModal : false})
  }

  render() {
    return (
      <div>
        <Header 
          onFilterSearch={this.onFilterSearch}
          onClickAddNote={this.onClickAddNote}/>
        <div id="wrapper">
          <NotesScroller 
              notes={this.state.notes || []}
              onClickNote={this.onClickCard} />
          <NotesViewer note={this.state.selectedNote} />
        </div>

        <AddNoteModal visible={this.state.showAddModal}
                       onCancelModal={this.onCancelModal}
                       addNote={this.AddNoteToRedux}
        />
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