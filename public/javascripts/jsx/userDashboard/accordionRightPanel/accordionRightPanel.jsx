
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
  	//gets called when recieved new props 		
  	componentWillReceiveProps: function(nextProps) {
		//console.log('componentWillReceiveProps: ' + nextProps.activePersona.id);
		this.setState({activePersona: nextProps.activePersona});
  	},	
	render: function() {
		var menuItems = [
			{id: 1, title: 'Members Online', image: '/images/members.png' },
			{id: 2, title: 'Friends Online', image: '/images/friends.png'},
			{id: 3, title: 'Messages', image: '/images/message.png' },
			{id: 4, title: 'My Offers', image: '/images/offers.png' },
			{id: 5, title: 'Survey', image: '/images/survey.png'},
			{id: 6, title: 'Messages', image: '/images/wallet.png' }
		];

		return(
			<div id='rightPanelAndMenuContainer'>
				<div id='rightPanelContentContainer' className='rightCntnr'>
					<div className={this.state.activeMenuId !=1 ? 'hidden' : ''} >
						<MembersOnlinePanel />
					</div>
					<div className={this.state.activeMenuId !=2 ? 'hidden' : ''} >
						<FriendsOnlinePanel {...this.props} />
					</div>
					<div className={this.state.activeMenuId !=3 ? 'hidden' : ''} >
						<YourOffersPanel />
					</div>
				</div>	
				<RightMenuContainer  activeMenuId={this.state.activeMenuId} menuItems={menuItems} displaySelectedPanel={this.displaySelectedPanel}/>
	  		</div>
		)
	}
});
module.exports = RightPanel;