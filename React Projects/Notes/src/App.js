import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Note from './components/Note';
import Header from './components/Header';

class App extends Component {
    constructor(props){
        super(props)
        
        this.state = {
            notes: []
        }
        
        this.noteRandomPosition = this.noteRandomPosition.bind(this)
        this.add = this.add.bind(this)
		this.nextId = this.nextId.bind(this)
    }
    
    componentWillMount() {
        var self = this
        fetch(`https://baconipsum.com/api/?type=all-meat&sentences=50`)
            .then(response => response.json())
            .then(json => json[0]
                            .split('. ')
                            .forEach(sentence => self.add(sentence.substring(0, 25))))
    }
    
    add(text) {
		this.setState(prevState => ({
			notes: [
				...prevState.notes,
				{
					id: this.nextId(),
					note: text
				}
			]
		}))
	}
    
    nextId() {
		this.uniqueId = this.uniqueId || 0
		return this.uniqueId++
	}
    
    noteRandomPosition(note, i){
        return (
            <Note> {note.note} </Note>
        )
    }
            
    render() {
        return (
          <div className="App">
            <Header />
            {this.state.notes.map(this.noteRandomPosition)}
          </div>
        );
    }
}

export default App;
