import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import { Link, withRouter } from "react-router-dom";

import TopNav from "./TopNav";
import Button from "./ui/Button";

@withRouter
@inject("store")
@observer
export default class Info3 extends Component {
	constructor(props) {
		super(props);
		this.store = this.props.store.appState;
	}

	render() {
		return (
      <div className='page info'>
				<div className='header'>
					<h1>Praktisk om rotfylling</h1>
				</div>
				<div className='data'>
					<h3>
						Hvorfor må du rotfylle tannen?
					</h3>
					<p>
						Tannråte (karies) og dype fyllinger har over tid påført tannens nervevev skade. Dette kan gi en betennelsesreaksjon i tannnerven. Noen ganger utvikles det også infeksjon med bakterier. I de fleste tilfeller skjer denne prosessen uten smerte, men i noen tilfeller kan det bli tannpine. For å bli kvitt betennelse og bakterier, må tannlegen rense nervekanalene med forskjellige rotfyllingsinstrumenter og spesielle skyllemidler. Noen ganger kan tannen rotfylles ferdig med en gang, men oftest går behandlingen over to tannlegebesøk. Mellom første og senere tannlegetime legges det et antibakterielt middel i de rensede nervekanalene.
					</p>
				</div>
				<div className='data'>
					<h3>
						Blir det smerte etter behandlingen?
					</h3>
					<p>
						Det kan bli noe ømhet etter at nervekanalene er renset, men stor sett er det smertefritt. Ved enkelte tilfeller, kan det bli smerter og noen ganger hevelse. Dette vil normalt bli bra etter den første dagen, men skulle smerten vedvare eller hevelsen bli større, er det nødvendig å underrette tannlegen. Av og til må det gis antibiotika i tillegg.
					</p>
				</div>
				<div className='data'>
					<h3>
						Hvor mye koster en rotfylling ?
					</h3>
					<p>
						En rotfylling er et tidkrevende arbeid. Vanligvis vil en rotfylling på en jeksel koste ca. kr 4000,- og en rotfylling på fronttenner ca. kr 3000,- . Prisvariasjoner er avhengig av vanskelighetsgraden. Du kan diskutere behandlingsplan og kostnadsoverslaget med tannlegen.
					</p>
				</div>
				<div className='data'>
					<h3>
						Hvorfor må man ofte lage en krone på tannen etter en rotfylling ?
					</h3>
					<p>
						Tenner som blir rotfyllt kan dessverre bli noe svekket. Store fyllinger og tannråte (karies) har også på forhånd svekket tannen. Alt dette kan resultere i at tannen brekker eller at det er for lite igjen av tannen til å lage en fylling. For å få til en varig erstatning på den rotfylte tannen , bør man derfor ofte lage en krone.
					</p>
				</div>
			</div>
		);
	}
}
