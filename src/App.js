import './App.css';
import { Component } from 'react';
import LikeButton from './components/LikeButton';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <LikeButton />
      </div>
    );
  }
}
