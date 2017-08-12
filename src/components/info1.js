import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import { Link, withRouter } from "react-router-dom";

import TopNav from "./TopNav";
import Button from "./ui/Button";

@withRouter
@inject("store")
@observer
export default class Info1 extends Component {
	constructor(props) {
		super(props);
		this.store = this.props.store.appState;
	}

	render() {
		return (
      <div className='page info'>
				<div className='header'>
					<h1>Om Moderne Endodonti</h1>
				</div>
				<div className='data'>
					<h3>
						Introduksjon
					</h3>
					<p>
						Det har vært en stor utvikling i endodontien de senere år. Ny forskning , bruk av moderne teknologi som mikroskop, ultralyd og maskinell instrumentering gir enklere behandling og bedre prognose.
						<br />
						<br />
						Faget endodonti har hatt en stor utvikling de senere årene. Den stadig mer avanserte og høyteknologiske forskningen i basalfagene mikrobiologi, immunologi, patologi og den raske utviklingen av bedre, mer effektivt og nøyaktig utstyr, har sterkt bidratt til en økt forståelse og bedre behandlingsresultater. Dette har resultert i at endodontien er blitt en mer spennende, presis og forutsigbar vitenskap.
					</p>
				</div>
				<div className='data'>
					<h3>
						Infeksjonsykdom
					</h3>
					<p>
						Det er ikke mange år siden man oppdaget hvor stor betydning bakterienes egenskaper og kvantitet hadde i endodontien. Det faktum at man hadde med en infeksjonssykdom å gjøre, har ført til nyere og mer antibakterielt målrettede behandlingsmetoder. Screening av munnhulens og rotkanalens mikroflora har åpnet nye dører for forståelsen av samspillet mellom ulike bakterier, deres produkter og vertens immunforsvar. Nye metoder er utviklet for å kunne dyrke og klassifisere anaerobe bakterier. Dette var som en revolusjon i oppdagelsen av infeksjonens kompliserte sykdomsbilde. Anaerob dyrkning, isolasjon av gram negative anaerobe bakterier, analyse av bakterienes sammensetning og ulike toksiner ved hjelp av metoder som DNA probing og DNA amplifikasjon, gasskromatografi, elektroforese osv., har gitt oss en verden av nye muligheter for diagnose og behandling.
					</p>
				</div>
				<div className='data'>
					<h3>
						Maskinell Instrumentering
					</h3>
					<p>
						Det har vært en lang og spennende historie i utviklingen av rotkanalinstrumenter og preparering av rotkanalen. Ulike metallinstrumenter med forskjellig struktur, form og egenskaper har vært lansert gjennom årene. Forståelse og viten om rotkanalens anatomi gir grunnlag for å velge de best egnede rotkanalinstrumenter, enten det er maskinelt eller for hånd. Riktig valg og bruk av instrumenter, minsker risikoen for problemer som frakturer og perforasjoner.
						<br />
						<br />
						Det biologiske formålet med å rense og preparere er å frigjøre rotkanalsystemet for bakterier og deres endotoksiner. Formålet med en mekanisk instrumentering er å fjerne dentin og forme prepareringen slik at rotkanalsystemet blir renset og klargjort for en tredimensjonal og tett obturering. Det er viktig å ha en kon preparering hvor den originale rotkanalanatomien blir bevart og posisjonen av foramen ikke displaseres. Utvikling av roterende instrumenter og alloyer som Nikkel-titan har bidratt til å oppfylle disse kriterier. Nikkel-Titan er et superelastisk alloy, som har den unike egenskap å kunne gjenfinne sin opprinnelige form og posisjon. Dette gjør det mulig å rense rotkanalsystemer på en enklere, sikrere og mer effektiv måte. En rekke konsepter og strategier har blitt utviklet. Felles for mange av dem er at den originale rotkanalanatomien med eventuelle kurvaturer blir bibeholdt, samtidig som faren for instrumentfraktur reduseres betydelig. Systemer som GT, Protape, Quantec, FKG-RaCe og flere andre er blitt introdusert de senere år.
					</p>
					</div>
				<div className='data'>
					<h3>
						Mikroskop
					</h3>
					<p>
						Mikroskop kan anvendes rutinemessig i endodontien, men er spesielt godt egnet til å finne kalsifiserte kanaler, oppdage perforasjoner og frakturlinjer, fjerne frakturerte instrumenter og stifter, revisjonsbehandling og ikke minst endodontisk mikrokirurgi. Forstørrelsen er gjerne fra 4x til 25x, og lyset gir et meget godt innsyn og dybdeskarphet uten noen form for skygge. Bruk av mikroskop øker kvaliteten og korter ned tidsforbruket ved endodontisk behandling.
					</p>
				</div>
				<div className='data'>
					<h3>
						RaCe fra FKG-denture
					</h3>
					<p>
						RaCe er et sveitsisk produkt som står for ”reaming alternating cutting edge”. Reamerne er laget av Nikkel-Titan og man oppnår en unik design, effektiv, skånsom og presis peparering. Med dette systemet reduserers frakturfaren betraktelig. Bruk av roterende maskiner som f.eks Septico kan gi en meget nøyaktig og reproduserbar instrumentering. Hastighet og torque programmeres på forhånd for å tilpasses ulike behandlinger – som f.eks revisjoner. Når intrumentet spiser seg inn i dentin , vil maskinen gi lydsignaler for å varsle at det er like før instrumentet setter seg fast. Samtidig aktiveres en autorevers med tilbakerotering av instrumentet, noe som betyr en ytterligere reduksjon av frakturfaren.
					</p>
				</div>
				<div className='data'>
					<h3>
						Apeks lokator
					</h3>
					<p>
						Elektronisk apex lokator er et reativt nytt apparat som kan måle instrumentets posisjon i forhold til apeks. En rekke studier viser at en apex lokator kan være like god eller bedre enn dental røntgen til til å bestemme instrumenteringslengden. En stor fordel er det også å slippe røntgen opptak og røntgenstråling.Undersøkelser har også vist at den røntgenologiske apeks ikke alltid samsvarer med den anatomiske. Apeks lokatoren måler den elektriske motstanden mellom den orale slimhinne og foramen apikale basert på prinsippet om at motstanden mellom periodontiet og et referansepunkt som den oral mukosa er den samme. En elektrode plasseres i nær kontakt med innersiden av underleppen mens den andre elektroden festes på instrumentet. Strømmen settes på når instrumentet føres inn i kanalen , og når instrumentet når foramen apikal vil den elektriske motstanden måles lik referansepunktet som er den orale slimhinne. Målingene vises på maskinens display som digitale tallverdier eller kurver. Bruk av apeks lokator er kontraindisert i vitale rotåpne tenner og i kasus med store blødninger og eksudater. Her kan strømmen avledes og gi feil målinger. Hvis tannen har store amalgamfyllinger, gullkroner eller metallstifter/reamere i en av kanalene, kan dette også gi feil målinger. Endo Analyzer fra Analytic og Root ZX er eksempler på anerkjente merker.
					</p>
				</div>
				<div className='data'>
					<h3>
						Ultralyd
					</h3>
					<p>
						Ultralyd og nyutviklede CRP instrumenter gir muligheter for å løse endodontiske problemer som før var uhyre kompliserte og tidkrevende. Ultralyd er derfor godt egnet til revisjoner, fjernelse av stifter og frakturerte instrumenter, lokalisering av kalsifiserte rotkanaler og retrograd preparasjon ved apicektomier. Ultralyd blokkerer ikke innsynet i arbeidsfeltet slik vinkelstykket gjør. I tillegg er arbeidsendene på mikrotippene 10 ganger mindre enn det minste rosenbor. Den abrasive tippen fører til en presis og skånsom fjernelse av dentin. Apparatet sender ultrasonisk energi med en gitt frekvens som overfører vibrasjoner til mikrotippen. Operatøren behøver ikke å bevege noe instrument lenger , – det er mikrotippen som gjør hele jobben ved å bevege seg med høy energi og hastighet. Tannlegen behøver bare å lede håndstykket.
					</p>
				</div>
			</div>
		);
	}
}
