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
		console.log('dynaimc call to panel: ' + activeMenuId);
		this.setState({activeMenuId: activeMenuId});
	},
  	//gets called when recieved new props 		
  	componentWillReceiveProps: function(nextProps) {
		console.log('componentWillReceiveProps: ' + nextProps.activePersona.id);
		this.setState({activePersona: nextProps.activePersona});
  	},

	render: function() {
		var menuItems = [
			{id: '1', title: 'Members Online', image: '/images/people1.png' },
			{id: '2', title: 'Friends Online', image: '/images/people1.png'}
		];

		var activePanel;
		console.log('selected menuId: ' + this.state.activeMenuId);
		switch (this.state.activeMenuId) {
			case '1':
				console.log('membersOnline');
				activePanel = <MembersOnlinePanel {...this.props} />;
				break;
			case '2':
				console.log('friended onlne');
				activePanel = <FriendsOnlinePanel {...this.props} />;
				break;
			default: 
				activePanel = <FriendsOnlinePanel {...this.props} />;
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