import React, { Component } from 'react';

class Test extends Component {
  state = {
    title: '',
    body: ''
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => response.json())
      .then(data =>
        this.setState({
          title: data.title,
          body: data.body
        })
      );
  }

  //   componentWillMount() {
  //     console.log('componentWillMount...');
  //   }

  //   componentDidUpdate() {
  //     console.log('coponentDidUpdate...');
  //   }

  //   componentWillUpdate() {
  //     console.log('componentWillUpdate...');
  //   }

  //   componentWillReceiveProps(nextProps, nextState) {
  //     console.log('componentWIllReceiveProps...');
  //   }

  //   static getDerivedStateFromProps(nextProps, prevState) {
  //     return {
  //       test: 'something'
  //     };
  //   }

  //   getSnapshotBeforeUpdate(prevProps, prevState) {
  //     console.log('getSnapshotBeforeUpdate...');
  //   }

  render() {
    const { title, body } = this.state;
    return (
      <div>
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
    );
  }
}

export default Test;
