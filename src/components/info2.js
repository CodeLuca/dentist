import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import { Link, withRouter } from "react-router-dom";

import TopNav from "./TopNav";
import Button from "./ui/Button";

@withRouter
@inject("store")
@observer
export default class Info2 extends Component {
	constructor(props) {
		super(props);
		this.store = this.props.store.appState;
	}

	render() {
		return (
      <div className='page info'>
				<div className='header'>
					<h1>Spørsmål om rotfylling</h1>
				</div>
				<div className='data'>
					<h3>
						Introduksjon
					</h3>
					<p>
						Noen ganger må tenner rotfylles. Her forklares hvorfor og det svares på noen av de mest stilte spørsmål omkring denne type tannbehandling.
					</p>
				</div>
				<div className='data'>
					<h3>
						Hva er en Rotfylling? Når må en tann rotfylles?
					</h3>
					<p>
						En rotfylling er en fyllingsmasse som fyller hele rotkanalen i hver av tannens røtter.
						<br />
						Innerst i en tann er det hulrom og rotkanaler som er fylt med nervevev og blodårer. Den vanligste årsaken til at en tann må rotfylles er tannråte (karies) . Når hullet blir dypt og irritasjonen har pågått lenge nok, blir det tilvekst av bakterier og utvikling av infeksjon. Tannen må da rotbehandles og rotfylles. Andre årsaker er tannskader som slag, ulykker o.s.v. , hvor tannens nerve blir skadet og dør.
					</p>
				</div>
				<div className='data'>
					<h3>
						Er en rotfylt tann svekket?
					</h3>
					<p>
						En rotfylt tann behøver ikke være svekket og kan fungere som andre vitale tenner. Men ofte er den mer utsatt for å brekke hvis den har store fyllinger etter tannråte. Andre ganger mangler mye av kronedelen. Det er derfor mange rotfylte tenner må kronebehandles. En rotfylt tann sitter like godt fast i kjeven som andre tenner, men den har mistet sin evne til å kjenne varme og kulde.
					</p>
				</div>
				<div className='data'>
					<h3>
						Hvordan foregår rotbehandling og rotfylling?
					</h3>
					<p>
						Tannlegen undersøker grundig, ofte med røntgen og stiller så en diagnose og fremlegger en behandlingsplan for pasienten. Etter å ha bedøvet tannen (i noen tilfeller trenger man ikke bedøvelse fordi nerveorganet er dødt) isoleres tannen med en duk slik at arbeidet kan foregå så rent som mulig. Nervekanalene blir renset med spesielle rotfyllingsinstrumenter og skylles med sterile vesker. Tannen kan enten rotfylles ferdig etter en behandling, eller det må legges et bakteriedrepende medikament i nervekanalen for deretter å rotfylle ferdig etter 2-3 uker – noen ganger må man vente lenger. Ut i fra tannens sykdomshistorie vurderer tannlegen hvor lang tid som er best.
					</p>
				</div>
				<div className='data'>
					<h3>
						Hvordan arter smertene seg?
					</h3>
					<p>
						Smerte i tenner kan arte seg på forskjellige måter. De spontane, hurtige smertereaksjoner etter å ha drukket kaldt vann, spist iskrem eller å ha vært ute i kaldt vær, er ofte ikke forbundet med noen form for sykdom. Dette kommer av hypersensibilitet (ising) i dentinet (tannbeinet) og kan for mange mennesker være veldig irriterende og av og til uutholdelig. Hvis en tann etter kald eller varm stimulering gir spontane smerter som ikke forsvinner etter en kort stund, eller at smertene kommer av seg selv uten noen form for stimulering (noen ganger om kvelden når man legger seg), kan det tyde på sykdom i tannen og behov for behandling. Når infeksjonen har kommet langt, kan tannen bli svært øm ved tygging, spising eller berøring.
					</p>
				</div>
				<div className='data'>
					<h3>
						Har det noe å si for vellykketheten av en rotbehandling at det er store smerter ?
					</h3>
					<p>
						Alle undersøkelser viser at prognosen (vellykketheten) for behandlingen ikke har noen sammenheng med eventuelle smerter i tannen. Behandlingen og resultatet vil være det samme med eller uten smerte før behandlingen startet.
					</p>
				</div>
				<div className='data'>
					<h3>
						Hva vil det si at rotkanalen er forkalket eller stengt?
					</h3>
					<p>
						En forsnevring av rotkanaler forekommer med alder. Dette er normal aldringsprosess. Tannråte og infeksjon i rotkanalene kan også resultere i en fortetning og tranghet hvilket gjør behandlingen mer vanskelig og tidkrevende. Mikroskop, nye typer rotkanal instrumenter og elektroniske apparater har gjort behandlingen enklere og sikrere.
					</p>
				</div>
				<div className='data'>
					<h3>
						Hvorfor må man rotfylle en tann som ikke er vond ?
					</h3>
					<p>
						De fleste tenner som må rotfylles har ikke gitt smerte i det hele tatt. Det er funn som tannlegen gjør ved hjelp av røntgenbilder, undersøkelse og boring i tenner som gjør at diagnosen kan stilles. Dette kan være vanskelig å forstå fordi vi forbinder rotfylling med smerte. Men fravær av smerte vil altså ikke nødvendigvis bety at tannen er frisk og at den ikke trenger rotbehandling.
					</p>
				</div>
				<div className='data'>
					<h3>
						Kan en rotfylt tann gi smerte?
					</h3>
					<p>
						Selv om behandlingen er utført etter alle kunstens regler, kan det av forskjellige grunner være at infeksjonen ikke er blitt helt borte. I sjeldne tilfeller kan infeksjonen også komme tilbake i en rotfylt tann og gi smerter. Bakterienes sammenseting og mengde avgjør symptomene.
					</p>
				</div>
				<div className='data'>
					<h3>
						Når må det gjøres et kirurgisk inngrep på roten ?
					</h3>
					<p>
						Dersom den vanlige rotbehandlingen ikke har gitt ønsket resultat eller at tilgjengeligheten i rotkanalen har vært vanskelig eller umulig pga gamle tannlegearbeider som stifter og krone/broer, må det vurderes en kirurgisk løsning. Man løfter av tannkjøttet på utsiden av roten for å kunne nå roten fra undersiden. Deretter fjernes infeksjonen og roten kuttes kortere før rotkanalen instrumenteres fra rotenden for til slutt å fylles med en tett masse.
					</p>
				</div>
				
			</div>
		);
	}
}
