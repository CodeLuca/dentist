import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import { inject, observer } from "mobx-react";
import LazyRoute from "lazy-route";
import DevTools from "mobx-react-devtools";
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import TopBar from "./TopBar";
import Footer from "./Footer";

@inject("store")
@observer
export default class App extends Component {
	constructor(props) {
		super(props);
		this.store = this.props.store;
	}
	componentDidMount() {
		this.authenticate();
	}
	authenticate(e) {
		if (e) e.preventDefault();
		this.store.appState.authenticate();
	}
	render() {
		const {
			authenticated,
			authenticating,
			timeToRefresh,
			refreshToken,
			testval
		} = this.store.appState;
		return (
			<MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
				<div className="wrapper">
					{/*<DevTools />*/}
					<TopBar />
					<Switch>
						<Route
							exact
							path="/"
							render={props => (
								<LazyRoute {...props} component={import("./Home")} />
							)}
						/>

						<Route
							exact
							path="/info1"
							render={props => (
								<LazyRoute {...props} component={import("./info1")} />
							)}
						/>

						<Route
							exact
							path="/info2"
							render={props => (
								<LazyRoute {...props} component={import("./info2")} />
							)}
						/>

						<Route
							exact
							path="/info3"
							render={props => (
								<LazyRoute {...props} component={import("./info3")} />
							)}
						/>

						<Route
							exact
							path="/team"
							render={props => (
								<LazyRoute {...props} component={import("./Team")} />
							)}
						/>

						<Route
							exact
							path="/prices"
							render={props => (
								<LazyRoute {...props} component={import("./PriceList")} />
							)}
						/>

						<Route
							exact
							path="/gallery"
							render={props => (
								<LazyRoute {...props} component={import("./Gallery")} />
							)}
						/>

						<Route
							exact
							path="/contact"
							render={props => (
								<LazyRoute {...props} component={import("./Contact")} />
							)}
						/>

						<Route
							render={props => (
								<LazyRoute {...props} component={import("./NotFound")} />
							)}
						/>
					</Switch>
					<Footer />
				</div>
		  </MuiThemeProvider>
		);
	}
}
