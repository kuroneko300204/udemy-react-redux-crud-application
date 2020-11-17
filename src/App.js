import React from 'react';

const App = () => {
  // Nonameにageが設定されていないがデフォルト値がセットされる。
  const profiles = [
    { name:"Taro", age: 10 },
    { name: "Hanako", age: 5 },
    { name: "Noname" }
  ]

  return (
    <div>
      {
        profiles.map((profile, index) => {
          return <User name={profile.name} age={profile.age} key={index} />
        })
      }
    </div>
  )
  // return <div>
  //   // 記述が冗長なので、リファクタリングする
  //   <User name={"Taro"} age={10} />
  //   <User name={"Hanako"} age={5} />
  // </div>
}

const User = (props) => {
  return <div>Hi, I am {props.name}, and {props.age} years old !</div>
}

// propsのデフォルト値を設定できる
User.defaultProps = {
  age: 1
}

export default App;
