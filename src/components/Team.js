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
              <div className='pic' style={{'background-image': 'url(http://i.imgur.com/TLzK3vV.jpg)'}}></div>
              <div className='desc'>
                <h3>Tannlege Homan Zandi</h3>
                <p>
                  Cand. Odont 1996.
                  <br />
                  Spesialist i Endodonti 2003
                  <br />
                  Forskningsstipendiat fra norsk forskningsråd 1994-1996 i mikrobiologi
                  <br />
                  Privat praktiserende tannlege siden 1996. London 1997-1998. King’s College dental hospital i London. Oslo 1998-2008
                  <br />
                  Henvisningspraksis siden 2003
                  <br />
                  Instruktørtannlege avd. endodonti siden 2000.
                  <br />
                  Universitetslektor avd. endodonti. Arbeider både med grunnutdanning og videreutdanningen, med særlig vekt på endodontisk kirurgi
                  <br />
                  Holder en rekke kurs for allmenntannleger i klinisk endodonti
                  <br />
                  PhD kandidat Universitetet i  Oslo
                </p>
              </div>
            </div>
          </div>
          <div className='person'>
            <div className='content'>
              <div className='pic' style={{'background-image': 'url(http://i.imgur.com/JTzrBGe.jpg)', 'background-position': 'center 30%'}}></div>
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
              <div className='pic' style={{'background-image': 'url(http://i.imgur.com/1ocAMHg.jpg)'}}></div>
              <div className='desc'>
                <h3>Tannlege Anders Valnes</h3>
                <p>
                  Cand. Odont 1999.
                  <br />
                  Ferdigutdannet i 2010  (Uteksaminert fra Poznan University of Medical Sciences med graden Doctor of Dental Surgery (DDS) i 2010)
                  <br />
                  Privatpraktiserende tannlege 2010-2013
                  <br />
                  Instruktør ved Odontologisk fakultet avdeling for kjeve- og ansiktsradiologi siden 2012
                  <br />
                  Spesialist i kjeve- og ansiktsradiologi siden 2017
                  
                </p>
              </div>
            </div>
          </div>
          <div className='person'>
            <div className='content'>
              <div className='pic' style={{'background-image': 'url(http://i.imgur.com/N4zbpxM.jpg)'}}></div>
              <div className='desc'>
                <h3>Tannpleier Sindy Tran</h3>
                <p>
                  <br />
                  Ferdigutdannet juni 2015 tannlegehøyskole Oslo
                  <br />
                  Jobbet hos Erik Svendsrud 2015 til 2016
                  <br />
                  Jobbet hos Haslum tannlegekontor 2015 til og med nå
                  <br />
                  Jobbet som tannlege sekretær for Per Nygaard Østby  fra 2003 til 2010
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
              <div className='pic' style={{'background-image': 'url(http://i.imgur.com/glLTaxE.jpg)'}}></div>
              <div className='desc'>
                <h3>Tannlegeassistent Rounak Karimi</h3>
                <p>
                 
                  <br />
                  Utdannet tannhelsesekretær i 2008
                  <br />
                  Jobbet både i offentlig og privat sektor
                  <br />
                  Allmenn påbyggning i 2009
                  <br />
                  Jobbet hos Homan Zandi siden 2009
                
                </p>
              </div>
            </div>
          </div>
          <div className='person'>
            <div className='content'>
              <div className='pic' style={{'background-image': 'url(http://i.imgur.com/URi9WyD.jpg)', 'background-position': 'center 30%'}}></div>
              <div className='desc'>
                <h3>Tannlegeassistent Jenny Gonzalez Solhaug</h3>
                <p>
                 
                  <br />
                  Ferdig utdannet tannhelsesekretær
                  <br />
                  Kvadraturen skolesenter 
                  <br />
                  Jobbet hos Homan Zandi siden 2015
                  <br />
                  
                </p>
              </div>
            </div>
          </div>
        
        </div>
			</div>
		);
	}
}
