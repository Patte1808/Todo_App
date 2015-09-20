'use strict';

var React = require('react-native');

var {
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableOpacity,
} = React;

var TodoDetail = require('./TodoDetail');

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
		var ds = new ListView.DataSource({
			rowHasChanged: (r1, r2) => r1 !== r2
		});

		this.state = {
			dataSource: ds.cloneWithRows(['Test1', 'Test2'])
		}
	}

	render() {
		return(
			<View style={styles.container}>
				<ListView
					dataSource={this.state.dataSource}
					renderRow={this.renderTodo}
					style={styles.listView} />
			</View>
		);
	}

	showTodo(id) {
		this.props.navigator.push({
			title: 'Todo',
			component: TodoDetail,
			passProps: {
				todoId: id,
			},
		});
	}

	renderTodo(todo) {
		return (
			<TouchableOpacity
				activityOpacity={0.5}
				onPress={() => this.showTodo(todo.id)}>
				<View style={styles.cellContainer}>
					<View style={styles.cellTitleRow}>
						<Text>Titelzeile</Text>
					</View>
					<Text style={styles.description}>Description</Text>
				</View>
			</TouchableOpacity>
		);
	}
}

module.exports = TodoOverview;