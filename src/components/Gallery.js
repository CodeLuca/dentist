import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import { Link, withRouter } from "react-router-dom";

import TopNav from "./TopNav";
import Button from "./ui/Button";

@withRouter
@inject("store")
@observer
export default class Gallery extends Component {
	constructor(props) {
		super(props);
		this.store = this.props.store.appState;
	}

	render() {
		return (
			<div className="page gallery">
				<div className='header'>
					<h1>Bilder</h1>
				</div>
        <div className='photos'>
          <img src='http://i.imgur.com/s4r7xED.jpg' />
          <img src='http://i.imgur.com/4xjkiQU.jpg' />
          <img src='http://i.imgur.com/lvY6TuA.jpg' />
          <img src='http://i.imgur.com/cs48bAQ.jpg' />
          <img src='http://i.imgur.com/dQLCc4a.jpg' />

          <img src='http://i.imgur.com/kOhV2Aw.jpg' />
          <img src='http://i.imgur.com/8pBYVmr.jpg' />
          <img src='http://i.imgur.com/3OQqigh.jpg' />
          <img src='http://i.imgur.com/ZhO37Fc.jpg' />
          <img src='http://i.imgur.com/tbyQNC4.jpg' />
        </div>
			</div>
		);
	}
}
