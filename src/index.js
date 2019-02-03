import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

// we are subclassing React.Component
class App extends React.Component {
	// very first function used for initialization in JS
	// constructor(props) {
	// 	// super() is reference to parents' constructor()
	// 	super(props);
	// 	// this is the only time use this.state to set state
	// 	// other times use setState!!!!!
	// 	this.state = { lat: null, errorMsg: "" };
	// }

	state = { lat: null, errorMsg: "" };

	componentDidMount() {
		// this is a Callback function
		window.navigator.geolocation.getCurrentPosition(
			position => this.setState({ lat: position.coords.latitude }),
			err => this.setState({ errorMsg: err.message })
		);
	}

	componentDidUpdate() {
		console.log("Component was updated.");
	}

	renderContent() {
		if (this.state.errorMsg && !this.state.lat) {
			return <div>Error: {this.state.errorMsg}</div>;
		}
		if (!this.state.errorMsg && this.state.lat) {
			// return <div>Latitude: {this.state.lat}</div>;
			return <SeasonDisplay lat={this.state.lat} />;
		}
		return <Spinner message="Please enable location sensor..." />;
	}

	// React says you must define render()
	render() {
		return <div className="fake-one">{this.renderContent()}</div>;
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));
