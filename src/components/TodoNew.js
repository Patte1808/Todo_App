'use strict';

var React = require('react-native');

var {
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableOpacity,
  TextInput,
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
  	form: {
  		flex: 1,
  		flexDirection: 'column',
	    alignItems: 'stretch',
	    margin: 70
  	}
});

class TodoOverview extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<View style={styles.container}>
				<View style={styles.form}>
					<TextInput
    					style={{height: 40, borderColor: 'gray', borderWidth: 1}}
						placeholder="Title"
					/>
					<TextInput
						style={{height: 40, borderColor: 'gray', borderWidth: 1}}
						placeholder="Description"
						multiline={true}
					/>
				</View>
			</View>
		);
	}
}

module.exports = TodoOverview;