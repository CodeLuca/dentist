import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import { Link, withRouter } from "react-router-dom";

import TopNav from "./TopNav";
import Button from "./ui/Button";

import Lightbox from 'react-images';

@withRouter
@inject("store")
@observer
export default class Gallery extends Component {
	constructor(props) {
		super(props);
		this.store = this.props.store.appState;
		this.state = {
			lightboxIsOpen: false,
			currentImage: 0	
		}
	}

	openLightbox (i) {
		this.setState({
			lightboxIsOpen: true,
			currentImage: i
		})
	}
	closeLightbox () {
		this.setState({
			currentImage: 0,
			lightboxIsOpen: false,
		});
	}
	gotoPrevious () {
		this.setState({
			currentImage: this.state.currentImage - 1,
		});
	}
	gotoNext () {
		this.setState({
			currentImage: this.state.currentImage + 1,
		});
	}

	render() {
		const images = [
			{src: 'http://i.imgur.com/s4r7xED.jpg'},
			{src: 'http://i.imgur.com/4xjkiQU.jpg'},
			{src: 'http://i.imgur.com/lvY6TuA.jpg'},
			{src: 'http://i.imgur.com/cs48bAQ.jpg'},
			{src: 'http://i.imgur.com/dQLCc4a.jpg'},
			{src: 'http://i.imgur.com/kOhV2Aw.jpg'},
			{src: 'http://i.imgur.com/8pBYVmr.jpg'},
			{src: 'http://i.imgur.com/3OQqigh.jpg'},
			{src: 'http://i.imgur.com/ZhO37Fc.jpg'},
			{src: 'http://i.imgur.com/tbyQNC4.jpg'}
		]

		return (
			<div className="page gallery">
				<div className='header'>
					<h1>Bilder</h1>
				</div>
        <div className='photos'>
					<img onClick={this.openLightbox.bind(this, 0)} src='http://i.imgur.com/s4r7xED.jpg' />
          <img onClick={this.openLightbox.bind(this, 1)} src='http://i.imgur.com/4xjkiQU.jpg' />
          <img onClick={this.openLightbox.bind(this, 2)} src='http://i.imgur.com/lvY6TuA.jpg' />
          <img onClick={this.openLightbox.bind(this, 3)} src='http://i.imgur.com/cs48bAQ.jpg' />
          <img onClick={this.openLightbox.bind(this, 4)} src='http://i.imgur.com/dQLCc4a.jpg' />
          <img onClick={this.openLightbox.bind(this, 5)} src='http://i.imgur.com/kOhV2Aw.jpg' />
          <img onClick={this.openLightbox.bind(this, 6)} src='http://i.imgur.com/8pBYVmr.jpg' />
          <img onClick={this.openLightbox.bind(this, 7)} src='http://i.imgur.com/3OQqigh.jpg' />
          <img onClick={this.openLightbox.bind(this, 8)} src='http://i.imgur.com/ZhO37Fc.jpg' />
          <img onClick={this.openLightbox.bind(this, 9)} src='http://i.imgur.com/tbyQNC4.jpg' /> 

					<Lightbox
						images={images}
						currentImage={this.state.currentImage}
						isOpen={this.state.lightboxIsOpen}
						onClickPrev={this.gotoPrevious.bind(this)}
						onClickNext={this.gotoNext.bind(this)}
						onClose={this.closeLightbox.bind(this)}
					/>
        </div>
			</div>
		);
	}
}
