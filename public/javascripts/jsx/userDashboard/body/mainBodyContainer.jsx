

var MessagesComponent = require('./messageContainer');
var InteractionsComponent = require('./interactionsContainer');
var SettingsComponent = require('./settingsContainer');
var ProfileComponent = require('./profileContainer');
var CommunitiesComponent = require('./communitiesContainer');
var HomeComponent = require('./homeContainer');

var MainBodyContainer = React.createClass({
	getInitialState: function() {
		return {
			activePersona: this.props.activePersona
		}	
	},
  	//gets called when recieved new props 		
  	componentWillReceiveProps: function(nextProps) {
		//console.log('componentWillReceiveProps: ' + nextProps.activePersona.persona_name);
		this.setState({activePersona: nextProps.activePersona});
  	},
    addAllCommunitiesState: function(community){
    	this.props.addAllCommunitiesState(community);
    },               
    addMyCommunitiesState: function(community){
    	this.props.addMyCommunitiesState(community);
    },   	  
	render: function(){
		var activeBody = null;

		switch (this.props.headerSelection) {
			case 'home':
				activeBody = <HomeComponent activePersona={this.state.activePersona} />;
				break;
			case 'messages':
				activeBody = <MessagesComponent activePersona={this.state.activePersona} />;
				break;
			case 'interactions':
				activeBody = <InteractionsComponent useIPFS={this.props.useIPFS} activePersona={this.state.activePersona} api={this.props.api} />;
				break;
			case 'profile':
				activeBody = <ProfileComponent activePersona={this.props.viewMemberPersona ? this.props.memberPersona : this.state.activePersona} />;
				break;	
			case 'communities':
				activeBody = <CommunitiesComponent 
									activePersona={this.state.activePersona} 
									myCommunities={this.props.myCommunities} 
									allCommunities={this.props.allCommunities}
									addAllCommunitiesState={this.addAllCommunitiesState}
	                       		 	addMyCommunitiesState={this.addMyCommunitiesState}
	                   			/>;
				break;
			case 'settings':
				activeBody = <SettingsComponent activePersona={this.props.viewMemberPersona ? this.props.memberPersona : this.state.activePersona} />;
				break;					
			default:
				activeBody = <HomeComponent activePersona={this.state.activePersona} />;
		}

		return(
			<div>
				{activeBody}
			</div>
		)
	}
});

module.exports = MainBodyContainer;
