import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import { Link, withRouter } from "react-router-dom";

import TopNav from "./TopNav";
import Button from "./ui/Button";

@withRouter
@inject("store")
@observer
export default class PriceList extends Component {
	constructor(props) {
		super(props);
		this.store = this.props.store.appState;
	}

	render() {
		return (
			<div className="page prices">
				<div className='header'>
					<h1>Prisliste</h1>
				</div>
        <div className='content'>
          {/* <div className='head'>
            <h3>Treatment</h3>
            <h3>Price</h3>
          </div> */}
          <div className='row title'>
            <h3>Undersøkelse</h3>
          </div>
           <div className='row'>
            <h3>Undersøkelse hos spesialist etter refusjon</h3>
            <h3>450-650 kr</h3>
          </div>
          <div className='row'>
            <h3>Undersøkelse med to røntgen bilder</h3>
            <h3>950 kr</h3>
          </div>
            <div className='row'>
            <h3>Undersøkelse hos tannpleier</h3>
            <h3>850 kr</h3>
          </div>
             
             
          <div className='row title'>
            <h3>Røntgen</h3>
          </div>
          <div className='row'>
            <h3>Ordinær røntgen bilde</h3>
            <h3>95 kr</h3>
          </div>
          <div className='row'>
            <h3>OPG</h3>
            <h3>700 kr</h3>
          </div>
   <div className='row'>
            <h3>CBCT uten refusjon</h3>
            <h3>2500 kr</h3>
          </div>
           <div className='row'>
            <h3>CBCT med refusjon</h3>
            <h3>1300 kr</h3>
          </div>


          <div className='row title'>
            <h3>Rotfylling</h3>
          </div>
          <div className='row'>
            <h3>En seanse</h3>
            <h3>6000 kr</h3>
          </div>
          <div className='row'>
            <h3>To seanse</h3>
            <h3>6500-7000 kr</h3>
          </div>

                 <div className='row title'>
            <h3>Kirurgi</h3>
          </div>
           <div className='row'>
            <h3>Apikal kirurgi etter refusjon</h3>
            <h3>4000-5000 kr</h3>
          </div>
         
    

          <div className='row title'>
            <h3>Trekking av tenner</h3>
          </div>
          <div className='row'>
            <h3>Ukomplisert ekstraksjon av tann eller rot</h3>
            <h3>800 kr</h3>
          </div>
          <div className='row'>
            <h3>Kirurgisk fjerning av retinert tann eller dyptliggende rot</h3>
            <h3>3500 kr</h3>
          </div>
          <div className='row title'>
            <h3>Kroner og implantater</h3>
          </div>
          <div className='row'>
            <h3>Helkeramisk krone på en jeksel</h3>
            <h3>7000 kr</h3>
          </div>
          <div className='row'>
            <h3>Implantat i overkjevens front</h3>
            <h3>30 000 kr</h3>
          </div>
          <div className='row'>
            <h3>Helkeramisk krone på et implantat i overkjeven</h3>
            <h3>30 000 kr</h3>
          </div>
                   <div className='row title'>
            <h3>Periodontal behandling</h3>
          </div>
           <div className='row'>
            <h3>Tannkjøttbehandling u. kirurgi</h3>
            <h3>1500 kr</h3>
          </div>
             <div className='row'>
            <h3>Rensing av tannsten</h3>
            <h3>1500 kr</h3>
          </div>
         
        </div>
			</div>
		);
	}
}
