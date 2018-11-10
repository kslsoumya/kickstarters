import React, { Component } from 'react';
import NavBar from './navBar';
import HomePage from '../containers/homePage'
import DataList from '../containers/dataList'

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <br/>
        <HomePage />
        <br/>
        <DataList />
        </div>
    );
  }
}
