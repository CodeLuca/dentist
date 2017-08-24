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
							<div className='image' style={{'background-image': "url('http://i.imgur.com/I0DdvAc.jpg')"}}>
								Timebestilling
							</div>
						</a>
						<a href='/contact'>
							<div className='image' style={{'background-image': "url('http://i.imgur.com/jmhQ1BV.jpg')"}}>
								Kontakt oss
							</div>
						</a>
						<a href='/prices'>
							<div className='image' style={{'background-image': "url('http://i.imgur.com/lvY6TuAm.jpg')"}}>
								Prisliste
							</div>
						</a>
						<a href='/team'>
							<div className='image' style={{'background-image': "url('http://i.imgur.com/6XltU10.jpg')"}}>
							 Medarbeidere
							</div>
						</a>
						<a href='/prices'>
							<div className='image' style={{'background-image': "url('http://i.imgur.com/dQLCc4am.jpg')"}}>
								Vitenskaplige artikler
							</div>
						</a>
						<a href='/gallery'>
							<div className='image' style={{'background-image': "url('http://i.imgur.com/kOhV2Awm.jpg')"}}>
								Bilder
							</div>
						</a>
				

					
					</div>
					<div className='contentRow'>
						
				
					</div>
					<div className='contentRow'>
				
					</div>
					<div className='contentRow'>
						<div className='icon'>
					
						</div>
						
					</div>
				</div>
			</div>
		);
	}
}
