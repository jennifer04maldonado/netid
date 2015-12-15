

var RatingsPanel = require('./ratingspanel.jsx');
var RightMenuContainer = require('./rightmenucontainer.jsx');
var MessagesContainer = require('./messagesContainer.jsx');
var CommunitiesContainer = require('./communitiesContainer.jsx');
var SurveysContainer = require('./surveysContainer.jsx');
var WalletContainer = require('./walletContainer.jsx');
var MessagesContainer = require('./messagesContainer.jsx');

var YourOffersPanel = require('./yourofferspanel.jsx');
var FriendsOnlinePanel = require('./yourfriends.jsx');
var MembersOnlinePanel = require('./membersonline.jsx');

var RightPanel = React.createClass({
	//set default to 'Friends Online'
	getInitialState: function() {
		return {
			selectedMenuId: 2,
			activeTopMenuId: 2,
			activeBottomMenuId: 4
		}
	},
	displaySelectedPanel: function(activeMenuId) {
		if (parseInt(activeMenuId) > 3) {
			this.setState({activeBottomMenuId: activeMenuId});
		} else {
			this.setState({activeTopMenuId: activeMenuId});
		}
		this.setState({selectedMenuId: activeMenuId});

	},
  	//gets called when recieved new props 		
  	componentWillReceiveProps: function(nextProps) {
		//console.log('componentWillReceiveProps: ' + nextProps.activePersona.id);
		this.setState({activePersona: nextProps.activePersona});
  	},	
	setMemberPersona: function(memberPersona) {				
		this.props.setMemberPersona(memberPersona);
	},
	render: function() {
		var menuItems = [
			{id: 1, title: 'Messages', image: '/images/message.png' },
			{id: 2, title: 'Connections', image: '/images/members.png'},
			{id: 3, title: 'Communities', image: '/images/friends.png' },
			{id: 4, title: 'Offers', image: '/images/offers.png' },
			{id: 5, title: 'Surveys', image: '/images/survey.png'},
			{id: 6, title: 'Wallet', image: '/images/wallet.png' }
		];

		return(
			<div id="rightPanelAndMenuContainer">
				<div id="rightPanelContentContainer" className="rightCntnr">
					<div id='rightPanelTopDiv'>
						<div className={this.state.activeTopMenuId == 1 ? 'selected' : ' hidden'} >
							<MessagesContainer useIPFS={this.props.useIPFS} peerIdHash={this.props.peerIdHash}/>
						</div>
						<div className={this.state.activeTopMenuId == 2 ? 'selected' : 'hidden'} >
							<FriendsOnlinePanel {...this.props} setMemberPersonaId={this.setMemberPersonaId} />
						</div>
						<div className={this.state.activeTopMenuId == 3 ? 'selected' : 'hidden'} >
							<CommunitiesContainer useIPFS={this.props.useIPFS} peerIdHash={this.props.peerIdHash} />
						</div>
					</div>
					<div id='rightPanelBottomDiv'>
						<div className={this.state.activeBottomMenuId == 4 ? 'selected' : 'hidden'} >
							<YourOffersPanel useIPFS={this.props.useIPFS} peerIdHash={this.props.peerIdHash}/>
						</div>
						<div className={this.state.activeBottomMenuId == 5 ? 'selected' : 'hidden'} >
							<SurveysContainer useIPFS={this.props.useIPFS} peerIdHash={this.props.peerIdHash}/>
						</div>
						<div className={this.state.activeBottomMenuId == 6 ? 'selected' : 'hidden'} >
							<WalletContainer useIPFS={this.props.useIPFS} peerIdHash={this.props.peerIdHash}/>
						</div>					
					</div>
				</div>	
				<RightMenuContainer  selectedMenuId={this.state.selectedMenuId} menuItems={menuItems} displaySelectedPanel={this.displaySelectedPanel}/>
	  		</div>
		)
	}
});
module.exports = RightPanel;