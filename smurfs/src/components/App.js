import React, { Component } from "react";
import { connect } from "react-redux";

import "./App.css";

class App extends Component {
	componentDidMount() {
		this.props.getSmurfs();
	}

	render() {
		if (this.props.fetching) {
			return <h2>Loading smurfs...</h2>;
		}
		return (
			<div className="App">
				<h1>SMURFS! 2.0 W/ Redux</h1>
				<SmurfForm />
				<Smurfs smurfs={this.props.smurfs} />
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		smurfs: state.smurfs,
		fetchingSmurf: state.fetching
	};
};

export default connect(
	mapStateToProps,
	{ getSmurfs }
)(App);
