import React, { Component } from 'react';

class App extends Component {
  render() {
    // ***定数を使用したJSX***
    // const greeting = "Hi, mikeneko!";
    // const dom = <h1 className="foo">{greeting}</h1>;
    // return dom;

    // ***イベントを使用したJSX〜その1〜***
    // return <input type="text" onClick={() => {console.log("I am clicked.")}} />

    // ***イベントを使用したJSX〜その2〜***
    // return <input type="text" onChange={() => {console.log("I am clicked.")}} />

    // ***HTMLのforを使用したJSX***
    return (
      <React.Fragment>
        <label htmlFor="bar">bar</label>
        <input type="text" onChange={() => {console.log("I am clicked.")}} />
      </React.Fragment>
    )
  }
}

export default App;
