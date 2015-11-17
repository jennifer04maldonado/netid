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
			{id: 1, title: 'Members Online', image: '/images/people1.png' },
			{id: 2, title: 'Friends Online', image: '/images/people1.png'}
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