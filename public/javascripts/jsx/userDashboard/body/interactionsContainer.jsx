var InteractionsContainer = React.createClass({
	getInitialState: function() {
		return {
			interactionsData: {
				"id":"",
				"interactions":[
					{
						"address" : " ",
						"status" : " ",
						"chatAddress":" "
					}
				]
			}
		}
	},	
 
	componentWillReceiveProps: function(nextProps) {
			this.componentDidMount();
	},
  	getInteractions: function() {
		$.get('.././json_files/data/netid-account/personas/interactionsSchema.json', function(result) {
			return result;
	   	}.bind(this));
  	},

  	createInteraction: function() {
  		console.log('test')
  		var net = this.props.api
  		net.account.createContract()
	    if (this.isMounted()) { 
	      net.account.ee.on('contract',err => {
	        //console.log('Freind Object Received '+ net.account.friendsList.length+' friends')
	        var allFriends = net.account.friendsList;
	        var thisPersonaFriends = [];
	        for (var i=0; i < net.account.friendsList.length; i++) {
	          if (personaId == net.account.friendsList[i].persona_id) {
	              thisPersonaFriends.push(net.account.friendsList[i]);
	          }
	        }
	        done(thisPersonaFriends, allFriends);
	      }) 
	    }   		
  	},
	  
  	//this method fetches data from IPFS or AJAX				
	componentDidMount: function() {
      	var personaId = this.props.activePersona.id;
	    var self = this;
		var caughtData = false;
		var result = null;
		result = (this.props.useIPFS) ? this.props.api.account.getInteractions() : this.getInteractions();
		if(self.isMounted()){
			for (var i in result){
					if(result[i].id === this.props.activePersona.id) {
						caughtData = true;
						self.setState({interactionsData: result[i]});
					}
			}
			if(caughtData == false){
				var emptyState = this.getInitialState().interactionsData;
				self.setState({interactionsData: emptyState});
			}
		}
	},

	render: function(){
		var rows = [];
		var cssClass = "";
		this.state.interactionsData.interactions.forEach(function(interaction, index) {
			switch (interaction.status){
				case "accept":	cssClass = "btn btn-success interactionsButton";
					break;
				case "rate":	cssClass = "btn btn-info interactionsButton";
					break;
				case "dispute": cssClass = "btn btn-warning interactionsButtons";
					break;
				default: cssClass = "btn btn-default interactionsButton";
			}
			rows.push(
				<tr key={index}>
					<td>{interaction.address}</td>
					<td><a href="#"><i className="fa fa-commenting chatTransactionIcon"></i></a></td>
					<td className={cssClass}>{interaction.status}</td>
				</tr>
			);
		});
		
		return(
			<div className='bodyContent'>
				<div className="row col-sm-8 col-sm-offset-2 interactionsContainer">
	                <div className="row">
	                	<h3>Interactions</h3>
	                    <button data-toggle="collapse" data-target="#addInterDiv" className="btn"><i className="fa fa-plus-circle"></i>Create New Interaction</button>
	                    <div id='addInterDiv' className='collapse well col-sm-12 '>
		                    <form action="" ref = "form">
		                    	<textarea className="col-sm-12 etherAddress" placeholder="Ether Address" rows="1" id="responderContractAddy"></textarea>
								<textarea className="col-sm-12 parametersOfInteraction" placeholder="Parameters of Interaction" rows="3"></textarea>
							    <button className="btn btn-default" onClick={this.createInteraction}>Submit</button>
							</form> 
						</div>	
                	</div>
				<div className="row col-sm-12 panel panel-default">
		            <table className="table table-striped">
		            	<thead>
					      	<tr>
						        <th>Transactions</th>
						        <th>Chat</th>
						        <th>Status</th>
					      	</tr>
					   </thead>
					   <tbody>
					      	{rows}
					    </tbody>
		            </table>
				</div>
        	</div>
        </div>
		)
	}
});

module.exports = InteractionsContainer;
