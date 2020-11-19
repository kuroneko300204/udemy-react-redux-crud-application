import React, { Component } from 'react';

const App = () => (<Counter></Counter>)

class Counter extends Component {
  // 初期化処理
  constructor(props) {
    super(props)
    this.state = { count: 0 }
  }

  handlePlusButton = () => {
    // [NG]下記の様に直接状態を変更するのはNG! 再レンダーしてくれないから。
    // this.state = { count: this.state.count + 1 }
    // [OK]setStateが実行されることで、再レンダーできる。
    // 状態を変更するときはsetStateを使用すること！プログラマーが意識せずに済む。
    this.setState({ count: this.state.count + 1 })
  }

  handleMinusButton = () => {
    this.setState({ count: this.state.count - 1 })
  }

  render() {
    console.log("render")
    return (
      <React.Fragment>
        <div>count: { this.state.count }</div>
        <button onClick={this.handlePlusButton}>+1</button>
        <button onClick={this.handleMinusButton}>-1</button>
      </React.Fragment>
    )
  }
}

export default App;
