'use strict';

var React = require('react-native');

var {
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableOpacity,
} = React;

var styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
	},
	cellContainer: {
		flex: 1,
	    flexDirection: 'column',
	    justifyContent: 'center',
	    alignItems: 'stretch',
	    backgroundColor: '#F5FCFF',
	    borderWidth: 0.5,
	    borderColor: '#d6d7da',
	    padding: 5,
	},
  	celltitlerow: {
	    flex: 1,
	    flexDirection: 'row',
	    justifyContent: 'flex-start',
	    alignItems: 'stretch',
	    backgroundColor: '#F5FCFF',
  	},
});

class TodoOverview extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<View>
				<Text>Test123</Text>
			</View>
		);
	}
}

module.exports = TodoOverview;