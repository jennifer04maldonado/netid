var React = require('react');
var RatingsPanel = require('./ratingspanel.jsx');
var RightMenuContainer = require('./rightmenucontainer.jsx');
var YourOffersPanel = require('./yourofferspanel.jsx');
var FriendsOnlinePanel = require('./yourfriends.jsx');
var MembersOnlinePanel = require('./membersonline.jsx');
var MasterSettingsPanel = require('./mastersettings.jsx');


//INPUT NONE
//OUTPUT: CONTAINER FOR ACCORDION
var RightPanel = React.createClass({
	getInitialState: function() {
		return {
			activeMenuId: '',
			className: ''
		}
	},
	displaySelectedPanel: function(activeMenuId) {
		this.setState({activeMenuId: activeMenuId});
		this.setState({className: 'out'});
		console.log('root : ' + activeMenuId);
	},
	render: function() {
		var menuItems = [
			{id: 1, title: 'Master Settings'},
			{id: 2, title: 'Your Offers'},
			{id: 3, title: 'Members Online'},
			{id: 4, title: 'Friends Online'}
		];

		var activePanel;
		console.log('chosen this: ' + this.state.activeMenuId);
		switch (this.state.activeMenuId) {
			case '1':
				console.log('master settgins');
				activePanel = <MasterSettingsPanel />;
				break;
			case '2':
				console.log('you offers');
				activePanel = <YourOffersPanel />;
				break;
			case '3':
				console.log('members online');
				activePanel = <MembersOnlinePanel />;
				break;
			case '4':
				console.log('frined onlne');
				activePanel = <FriendsOnlinePanel />;
				break;
		}

		return(
			<div id='rightPanelAndMenuContainer' className={this.state.className}>
				<div id='rightPanelContentContainer'> {activePanel} </div>
				<RightMenuContainer  menuItems={menuItems} displaySelectedPanel={this.displaySelectedPanel}/>
	  		</div>
		)
	}
});

ReactDOM.render(
	<RightPanel />, 
	document.getElementById('rightControlPanel')
);