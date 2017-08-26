import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import { Route, Link } from "react-router-dom";

import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import {List, ListItem} from 'material-ui/List';

@inject("store")
@observer
export default class TopNav extends Component {
	constructor(props) {
		super(props);
		this.store = this.props.store.appState;
		this.state = {
			isDrawerOpen: false,
			listItemOpen: [
				false
			]
		}
	}

	toggleDrawerOpen() {
		this.setState({
			isDrawerOpen: !this.state.isDrawerOpen
		})
	}

	toggleListOpen(i) {
		var tempState = this.state;
		tempState.listItemOpen[i] = !tempState.listItemOpen[i];
		this.setState(tempState);
	}

	goHome() {
		window.location = '/';
	}

	render() {
		return (
			<div>
				<AppBar
					title="Tannlege Homan Zandi AS"
					onTitleTouchTap={
						this.goHome.bind(this)
					}
					iconElementRight={<a href="tel:+47-22-44-18-11"><h4>Tel: (+47) 22 44 18 11</h4></a>}
					onLeftIconButtonTouchTap={
						this.toggleDrawerOpen.bind(this)
					}
					className="primaryAppBar"
					titleStyle ={{
						fontWeight: 300,
						color: 'white !important'
					}}
					iconStyleLeft={{
						color: 'white'
					}}
				/>
				<Drawer
					open={this.state.isDrawerOpen}
					docked={false}
					onRequestChange={this.toggleDrawerOpen.bind(this)}
				>
					<a href='/'>
						<ListItem
							primaryText="Hjem"
							style={{
								backgroundColor: '#00BCD4',
								color: 'white'
							}
						}/>
					</a>

					<ListItem
						primaryText="Rotfylling"
						open={this.state.listItemOpen[0]}
						onNestedListToggle={this.toggleListOpen.bind(this, 0)}
						primaryTogglesNestedList={true}
						nestedItems={[
							<a href='/info1'>
								<ListItem
									key={1}
									style={{
										paddingLeft: '25px'
									}}
									primaryText="Om Moderne Endodonti"
								/>
							</a>,
							<a href='/info2'>
								<ListItem
									key={2}
									style={{
										paddingLeft: '25px'
									}}
									primaryText="Spørsmål Om Rotfylling"
								/>
							</a>,
							<a href='/info3'>
								<ListItem
									key={3}
									style={{
										paddingLeft: '25px'
									}}
									primaryText="Praktisk Om Rotfylling"
								/>
							</a>,
						]}
					/>
					<a href='/team'>
						<ListItem
							primaryText="Våre Medarbeidere"
						/>
					</a>

					<a href='/prices'>
						<ListItem
							primaryText="Prisliste"
						/>
					</a>

					<a href='/articles'>
						<ListItem
							primaryText="Vitenskaplige Artikler"
						/>
					</a>

					<a href='/gallery'>
						<ListItem
							primaryText="Bilder"
						/>
					</a>

					<a href='/contact'>
						<ListItem
							primaryText="Contact Us"
						/>
					</a>

					<a href='/book'>
						<ListItem
							primaryText="Timebestilling"
						/>
					</a>
				</Drawer>
			</div>
		);
	}
}
