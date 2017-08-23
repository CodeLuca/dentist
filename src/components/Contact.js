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
					<h1>Contact Us</h1>
				</div>

        <div className='content'>
          <div className='contactForm'>
            <h3>Gjør en avtale:</h3>
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
                <DatePicker hintText="Avtale Dato" mode="landscape" name="date" />
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

          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2000.0331257771213!2d10.720294552115856!3d59.914997581778515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46416dd5457d2ec3%3A0x1cabd3c665dff3f3!2sParkveien+60%2C+0254+Oslo%2C+Norway!5e0!3m2!1sen!2suk!4v1502534972871"></iframe>
          <form action="http://maps.google.com/maps" method="get" target="_blank">
            <div className='directions'>
              <TextField
                hintText="Skriv inn adressen din"
                name="saddr"
                style={{
                  width: '50%'
                }}
              />
              <input type="hidden" name="daddr" value="Parkveien 60, 0254 Oslo, Norway" />
              <RaisedButton
                type="submit" 
                label="Få veibeskrivelse"
                labelStyle={{color: '#eee'}} 
                secondary='true'
              />
            </div>
          </form>
          
          <br />

          <div className='contactForm'>
            <h3>Contact Us:</h3>
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
                  name="message"
                  hintText="Budskap"
                  style={{
                    width: '70%'
                  }}
                  multiLine={true}
                  rows={3}
                  rowsMax={1000}
                /><br />
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
