import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import { Link, withRouter } from "react-router-dom";

import TopNav from "./TopNav";
import Button from "./ui/Button";

@withRouter
@inject("store")
@observer
export default class Team extends Component {
	constructor(props) {
		super(props);
		this.store = this.props.store.appState;
	}

	render() {
		return (
			<div className="page team">
				<div className='header'>
					<h1>Våre Medarbeidere</h1>
				</div>
        <div className="data">
          <div className='person'>
            <div className='content'>
              <div className='pic'></div>
              <div className='desc'>
                <h3>Tannlege Homan Zandi</h3>
                <p>
                  Cand. Odont 1996.
                  <br />
                  Spesialist i Endodonti (rotfylling og rotkirurgi).
                  <br />
                  Forskningsstipendiat fra norsk forskningsråd 1994-1996 i mikrobiologi
                  <br />
                  Privat praktiserende tannlege siden 1996. London 1997-1998. King’s College dental hospital i London. Oslo 1998-2008
                  <br />
                  Spesialist i endodonti 2003
                  <br />
                  Henvisningspraksis siden 2003
                  <br />
                  Instruktørtannlege avd. endodonti siden 2000.
                  <br />
                  Universitetslektor avd. endodonti. Arbeider både med grunnutdanning og videreutdanningen, med særlig vekt på endodontisk kirurgi
                  <br />
                  Holder en rekke kurs for allmenntannleger i klinisk endodonti
                  <br />
                  Forskningsstipendiat Universitetet i  Oslo
                </p>
              </div>
            </div>
          </div>
          <div className='person'>
            <div className='content'>
              <div className='pic' style={{'background-image': 'url(http://i.imgur.com/t7vOqOs.jpg)'}}></div>
              <div className='desc'>
                <h3>Tannlege Andre Roushan</h3>
                <p>
                  Cand. Odont 1999.
                  <br />
                  Forskningsstipendiat fra norsk forskningsråd 1997-1998 i oralpatologi
                  <br />
                  Militærtannlege ved Garnisonen i Sør-Varanger i 1999-2000
                  <br />
                  Tannlege ved den offentlige tannhelsetjenesten i Trondheim fra 2000-2002
                  <br />
                  Privatpraktiserende tannlege i egen praksis fra 2002-2005
                  <br />
                  Spesialistkandidat i endodonti ved Det Odontologiske Fakultet, UiO
                  <br />
                  Privatpraktiserende tannlege ved EndoPro tannklinikk
                  <br />
                  Spesialist i endodonti ved henvisningspraksis hos Homan Zandi fra 2008
                  <br />
                  Instruktørtannlege ved avdeling for endodonti ved UiO
                  <br />
                  Universitetslektor med ansvar for grunn- og spesialbehandling ved UiO
                </p>
              </div>
            </div>
          </div>
          <div className='person'>
            <div className='content'>
              <div className='pic' style={{'background-image': 'url(http://i.imgur.com/vQLOSw2.jpg)', 'background-position': 'center 30%'}}></div>
              <div className='desc'>
                <h3>Tannlege Trude Bøe</h3>
                <p>
                  Cand. Odont 1999.
                  <br />
                  Spesialist i endodonti 2004
                  <br />
                  Privatpraktiserende tannlege siden 1999
                  <br />
                  Vestfold kommunale Tannlegevakt i Tønsberg 1999-2001
                  <br />
                  Instruktørtannlege ved avdeling for endodonti ved UiO 2005-2006
                </p>
              </div>
            </div>
          </div>
          <div className='person'>
            <div className='content'>
              <div className='pic' style={{'background-image': 'url(http://i.imgur.com/YEEXoqU.jpg)', 'background-position': 'center 10%'}}></div>
              <div className='desc'>
                <h3>Tannlegeassistent Daria Sinelchtchikova</h3>
                <p>
                    Utdannet som tannlege ved det statlige medisinke institutt i Arkhangelsk, Russland i 1993
                    <br />
                    Jobbet ved Arkhangelsk kliniske sykehus, avd. for kjeve- og ansiktskirugi, 1998-2000
                    <br />
                    Jobbet hos Homan Zandi siden 2007
                </p>
              </div>
            </div>
          </div>
        </div>
			</div>
		);
	}
}
