import React, { Component } from 'react';

class Note extends Component {
    constructor(props){
        super(props)
        
        this.state = {
            names: []
        }
        
        this.style = {
			right: this.randomBetween(0, window.innerWidth - 80, 'px'),
			top: this.randomBetween(0, window.innerHeight - 80, 'px'),
			transform: `rotate(${this.randomBetween(-35, 25, 'deg')})`
		}
    }
    
    randomBetween(x, y, s) {
		return x + Math.ceil(Math.random() * (y-x)) + s
	}
    
    render() {
        return (
          <div className="note" style={this.style}>
            <p className="caption">
                {this.props.children}
            </p>
          </div>
        );
    }
}

export default Note;