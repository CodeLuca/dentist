import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import { Link, withRouter } from "react-router-dom";

@withRouter
@inject("store")
@observer
export default class Footer extends Component {
	constructor(props) {
		super(props);
		this.store = this.props.store.appState;
	}

	render() {
		return (
			<div className="footer">
        <h4>Tannlege Homan Zandi AS</h4>
        <p><b>Adress:</b> Parkveien 60, 0254 Oslo</p>
				<p> | </p>
        <p><b>Phone:</b> (+47) 22 44 18 11</p>
				<p> | </p>
        <p><b>Faks:</b> (+47) 22 44 18 12</p>
			</div>
		);
	}
}
