var React = require('react');
var RatingsPanel = require('./ratingspanel.jsx');
var RightMenuContainer = require('./rightmenucontainer.jsx');
var YourOffersPanel = require('./yourofferspanel.jsx');
var FriendsOnlinePanel = require('./yourfriends.jsx');
var MembersOnlinePanel = require('./membersonline.jsx');

var RightPanel = React.createClass({
	//set default to 'Friends Online'
	getInitialState: function() {
		return {
			activeMenuId: '2'
		}
	},
	displaySelectedPanel: function(activeMenuId) {
		this.setState({activeMenuId: activeMenuId});
	},
	render: function() {
		var menuItems = [
			{id: 1, title: 'Members Online', image: '/images/members.png' },
			{id: 2, title: 'Friends Online', image: '/images/friends.png'},
			{id: 3, title: 'Messages', image: '/images/message.png' },
			{id: 4, title: 'Members Online', image: '/images/members.png' },
			{id: 5, title: 'Friends Online', image: '/images/friends.png'},
			{id: 6, title: 'Messages', image: '/images/message.png' }
		];

		var activePanel;
		console.log('selected menuId: ' + this.state.activeMenuId);
		switch (this.state.activeMenuId) {
			case '1':
				console.log('master settgins');
				activePanel = <MembersOnlinePanel />;
				break;
			case '2':
				console.log('frined onlne');
				activePanel = <FriendsOnlinePanel />;
				break;
			case '3':
				console.log('messages');
				activePanel = <YourOffersPanel />;
				break;
			case '4':
				console.log('messages');
				activePanel = <YourOffersPanel />;
				break;
			case '5':
				console.log('messages');
				activePanel = <YourOffersPanel />;
				break;
			case '6':
				console.log('messages');
				activePanel = <YourOffersPanel />;
				break;			
		}

		return(
			<div id='rightPanelAndMenuContainer'>
				<div id='rightPanelContentContainer'>
					{activePanel}
					<YourOffersPanel />
				</div>
				<RightMenuContainer  activeMenuId={this.state.activeMenuId} menuItems={menuItems} displaySelectedPanel={this.displaySelectedPanel}/>
	  		</div>
		)
	}
});

module.exports = RightPanel;