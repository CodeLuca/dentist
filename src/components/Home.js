import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import {GridList, GridTile} from 'material-ui/GridList';
import FontIcon from 'material-ui/FontIcon';

@inject("store")
@observer
export default class Home extends Component {
	constructor(props) {
		super(props);
		this.store = this.props.store;
	}

	render() {
		const store = this.store;
		return (
			<div className="page home">
				<div className='banner'>
					 <img src='http://i.imgur.com/50QtL2D.png' alt=""/> 
				</div>	
				<div className='homeContent'>
					<div className='images'>
						<a href='/contact'>
							<div className='imageContainer'>
								<div className='image' style={{'background-image': "url('http://i.imgur.com/kOhV2Aw.jpg')"}}>
								</div>
								<div className='text'>
									Timebestilling
								</div>
							</div>
						</a>
						<a href='/contact'>
							<div className='imageContainer'>
								<div className='image' style={{'background-image': "url('http://i.imgur.com/jmhQ1BV.jpg')", 'background-position': 'center 65%'}}>
								</div>
								<div className='text'>
									Kontakt oss
								</div>
							</div>
						</a>
						<a href='/prices'>
							<div className='imageContainer'>
								<div className='image' style={{'background-image': "url('http://i.imgur.com/lvY6TuA.jpg')", 'background-position': 'center 40%'}}>
								</div>
								<div className='text'>
									Prisliste
								</div>
							</div>
						</a>
						<a href='/team'>
							<div className='imageContainer'>
								<div className='image' style={{'background-image': "url('http://i.imgur.com/6XltU10.jpg')", 'background-position': 'center 20%'}}>
								</div>
								<div className='text'>
								Medarbeidere
								</div>
							</div>
						</a>
						<a href='/prices'>
							<div className='imageContainer'>
								<div className='image' style={{'background-image': "url('http://i.imgur.com/dQLCc4a.jpg')", 'background-position': 'center 53%'}}>
								</div>
								<div className='text'>
									Vitenskaplige artikler
								</div>
							</div>
						</a>
						<a href='/gallery'>
							<div className='imageContainer'>
								<div className='image' style={{'background-image': "url('http://i.imgur.com/8pBYVmr.jpg')", 'background-position': 'center 60%'}}>
								</div>
								<div className='text'>
									Bilder
								</div>
							</div>
						</a>
					</div>
				</div>
			</div>
		);
	}
}
