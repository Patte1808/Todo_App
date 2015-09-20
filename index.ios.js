/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
} = React;

var TodoOverview = require('./src/components/TodoOverview');
var TodoNew = require('./src/components/TodoNew');

var todo_app = React.createClass({

  getInitialState: function() {
    return {
      isEdit: false,
    }
  },

  onNewButtonPress: function() {
    this.refs.nav.navigator.push({
      title: 'New Todo',
      component: TodoNew,
    });
  },

  onEditButtonPress: function() {
    this.setState({
      isEdit: true,
    });
  },

  render: function() {
    return (
      <NavigatorIOS ref='nav' style={styles.container}
        initialRoute={{
          component: TodoOverview,
          title: 'All todos',
          rightButtonTitle: 'New Todo',
          passProps: {
            isEdit: this.state.isEdit
          },
          onRightButtonPress: () => {
            this.refs.nav.navigator.push({
              title: 'New Todo',
              component: TodoNew,
              rightButtonTitle: 'Save',
            });
          }, 
          leftButtonTitle: 'Edit',
          onLeftButtonPress: () => {
            this.onEditButtonPress();
          },
        }}/>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('todo_app', () => todo_app);
