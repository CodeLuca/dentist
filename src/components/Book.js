import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import { Link, withRouter } from "react-router-dom";

import TopNav from "./TopNav";
import Button from "./ui/Button";

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import DatePicker from 'material-ui/DatePicker';

@withRouter
@inject("store")
@observer
export default class Contact extends Component {
	constructor(props) {
		super(props);
		this.store = this.props.store.appState;
	}

	render() {
		return (
			<div className="page contact">
				<div className='header'>
					<h1>Timebestilling</h1>
				</div>

        <div className='content'>
          <div className='contactForm'>
              <h3>Gjør en Timebestilling:</h3>
              <form action="https://formspree.io/homan@zandi.no" method="POST">
                <div className='textFields'>
                  <TextField
                    hintText="Fullt Navn"
                    name="name"
                    style={{
                      width: '70%'
                    }}
                  />
                  <br />
                  <TextField
                    hintText="E-mail"
                    name="_replyto"
                    style={{
                      width: '70%'
                    }}
                  />
                  <br />
                  <TextField
                    name="Avtale Type"
                    hintText="Budskap"
                    style={{
                      width: '70%'
                    }}
                    multiLine={true}
                    rows={3}
                    rowsMax={1000}
                  /><br />
                  <DatePicker
                    hintText="Avtale Dato"
                    mode="landscape"
                    name="date"
                    textFieldStyle={{
                      'width': '70%'
                    }}
                  />
                </div>
                <div className='buttons'>
                  <RaisedButton
                    type="submit" 
                    label="Sende"
                    primary={true}
                    labelStyle={{color: '#ddd'}} 
                    style={{width: '150px'}}
                  />
                </div>
              </form>
            </div>
        </div>
      </div>
		);
	}
}
