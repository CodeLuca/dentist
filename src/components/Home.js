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
						<a href='/info1'>
							<div className='image' style={{'background-image': "url('http://i.imgur.com/s4r7xEDm.jpg')"}}>
								Om Moderne Endodonti
							</div>
						</a>
						<a href='/info2'>
							<div className='image' style={{'background-image': "url('http://i.imgur.com/4xjkiQUm.jpg')"}}>
								Spørsmål Om Rotfylling
							</div>
						</a>
						<a href='/info3'>
							<div className='image' style={{'background-image': "url('http://i.imgur.com/lvY6TuAm.jpg')"}}>
								Praktisk Om Rotfylling
							</div>
						</a>
						<a href='/team'>
							<div className='image' style={{'background-image': "url('http://i.imgur.com/cs48bAQm.jpg')"}}>
								Våre Medarbeidere
							</div>
						</a>
						<a href='/prices'>
							<div className='image' style={{'background-image': "url('http://i.imgur.com/dQLCc4am.jpg')"}}>
								Prisliste
							</div>
						</a>
						<a href='/gallery'>
							<div className='image' style={{'background-image': "url('http://i.imgur.com/kOhV2Awm.jpg')"}}>
								Bilder
							</div>
						</a>
						<a href='/contact'>
							<div className='image' style={{'background-image': "url('http://i.imgur.com/8pBYVmrm.jpg')"}}>
								Contact Us
							</div>
						</a>
					</div>
					<div className='contentRow'>
						<div className='icon'>
								<FontIcon 
								className="material-icons"
								style={{
									fontSize: '7em',
									color: '#444',
									marginRight: '30px'
								}}
								>
									people
								</FontIcon>
						</div>
						<div className='text'>
							<h3>Om Oss:</h3>
							<p>Vi er tre tannleger som  er spesialister i endodonti/rotfylling, og to klinikkassistenter. Vi holder til i hyggelige lokaler, meget sentralt i Parkvn og ønsker deg velkommen til en smertefri behandling!</p>
						</div>
					</div>
					<div className='contentRow'>
						<div className='icon'>
							<FontIcon 
							className="material-icons"
							style={{
								fontSize: '7em',
								color: '#444',
								marginRight: '30px'
							}}
							>
								star
							</FontIcon>
						</div>
						<div className='text'>
							<h3>God Service:</h3>
							<p>Vi er rangert som en av de beste tannlegerne i Oslo, og har noen av de største vurderingene av noen tannlege i verden! Vi er rangert som en av de beste tannlegerne i Oslo, og har noen av de største vurderingene av noen tannlege i verden!</p>
						</div>
					</div>
					<div className='contentRow'>
						<div className='icon'>
							<FontIcon 
							className="material-icons"
							style={{
								fontSize: '7em',
								color: '#444',
								marginRight: '30px'
							}}
							>
								flash_on
							</FontIcon>
						</div>
						<div className='text'>
							<h3>Rask Service:</h3>
							<p>Alle prosedyrene vi gjennomfører er raske og smertefri, slik at du får best mulig opplevelse mens du er i vår omsorg. Alle prosedyrene vi gjennomfører er raske og smertefri, slik at du får best mulig opplevelse mens du er i vår omsorg.</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
