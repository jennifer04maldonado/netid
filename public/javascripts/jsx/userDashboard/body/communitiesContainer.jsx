var CommunityListComponent = require('./communityListContainer');
var CommunityDetailComponent = require('./communityDetailContainer');

var CommunitiesContainer = React.createClass({
	getInitialState: function(){		
		return {
            isDetail: false,
            communities : [],
            activeCommunity: null
        }
	},	
	componentDidMount: function(){	
		var self = this;
		$.get( ".././json_files/community.json", function( dataArray, status ) {
		  //console.log('status: '  + status);	
			if (status == 'success') {				
		 	    if (self.isMounted()) {
		 	        self.setState({
		 		    	communities: dataArray
		         	});	     
		 	    }
		 	}	 
		});
	},	
	toggleView: function(communityId){		
		//console.log('communityName:' + communityId);		
		if (this.state.isDetail) {
			this.setState({isDetail: false});	
		} else {
			this.getActiveCommunity(communityId);
			this.setState({isDetail: true});		
		}
	},	

	getActiveCommunity: function(communityId) {
		var activeCommunity = null;		
		$.each(this.state.communities, function (index,  row) {
			if (communityId == row.id) {
				//console.log("activePersonaId=" + persona.id);
				activeCommunity = row;
			}
		});
		this.setState({activeCommunity: activeCommunity});

  }, 	
	render: function(){
		var communityBody = null;
		if (this.state.isDetail) {
			communityBody = <CommunityDetailComponent activeCommunity={this.state.activeCommunity} viewList={this.toggleView} />;
		} else {
			communityBody = <CommunityListComponent communities={this.state.communities} viewDetail={this.toggleView} />;
		}
		return(						
			<div>
				{communityBody}
			</div>
		)
	}
});

module.exports = CommunitiesContainer;
