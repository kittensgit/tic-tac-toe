import React from 'react';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      count: 0
    }

    this.winnerLine = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]

  }

  isWinner = () => {
    let s = (this.state.count % 2 === 0) ? 'X' : 'O';
    for (let i = 0; i < 8; i++) {
      let line = this.winnerLine[i]
      if (this.state.squares[line[0]] === s && this.state.squares[line[1]] === s && this.state.squares[line[2]] === s) {
        setTimeout(() => {
          alert(s + ' win')
        }, 100)
        setTimeout(() => {
          this.setState({ squares: Array(9).fill(null) })
          this.setState({ count: 0 })
        }, 3000)
      }
    }
  }
  clickHandler = (event) => {
    let data = event.target.getAttribute('data');
    let currentSquares = this.state.squares;
    if (currentSquares[data] === null) {
      currentSquares[data] = (this.state.count % 2 === 0) ? 'X' : 'O'
      this.setState({ count: this.state.count + 1 })
      this.setState({ squares: currentSquares })
    } else {
      alert('wrong!!')
    }
    this.isWinner()
  }

  render() {
    return (
      <div className="tic-tac-toe">
        {this.state.squares.map((s, index) => <div className='ttt-grid' onClick={this.clickHandler} data={index}>{s}</div>)}
      </div>
    );
  }
}

export default App;
