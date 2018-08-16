import React, {Component} from 'react';
import { Provider } from "react-redux";
import configureStore from './redux/config';
import {StackNavigator} from './navigation'
export default class App extends Component {
  render() {
    return (
      <Provider store={configureStore()}>
        <StackNavigator/>
      </Provider>
    );
  }
}
