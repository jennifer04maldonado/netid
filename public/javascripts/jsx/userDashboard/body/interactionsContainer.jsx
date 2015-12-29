var LoadingModalComponent = require('../common/loadingModal');
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
			},
			showLoading: false
		}
	},	
 
	componentWillReceiveProps: function(nextProps) {
		if (nextProps.activePersona !== this.props.activePersona) {	      	
	      	var personaId = nextProps.activePersona.id;			
			if (this.props.useIPFS) {
				this.getInteractionsIPFS(personaId);
			} else {
				this.getInteractions(personaId);
			}			
		}
	},
  	getInteractions: function(personaId) {
		var self = this;
		var caughtData = false;
		$.get('.././json_files/data/netid-account/personas/interactionsSchema.json', function(result) {
			var data = null;
			for (var i in result){
				if(result[i].id == personaId) {
					caughtData = true;
					data = result[i];
					for (var j in data.interactions) {
						data.interactions[j].statusCode = Math.floor(Math.random() * (4 - 0)) + 0;
					}
					self.setState({interactionsData: data});
				}
				
			}
			if(!caughtData){
					var emptyState = this.getInitialState().interactionsData;
					self.setState({interactionsData: emptyState});
			}
			return result;
	   	}.bind(this));
  	},

  	getInteractionsIPFS: function(personaId) {
	    var net = this.props.api
	    var self = this;
		var caughtData = false;
		var data = null;
		 
		this.props.api.account.getInteractions(function(result) { 
			if(self.isMounted()){
				for (var i in result){
					if(result[i].id === personaId) {
						caughtData = true;
						data = result[i];
						for (var j in result[i].interactions){
							data.interactions[j].statusCode = (net.account.getInteractionStatus(result[i].interactions[j].address)).c[0];
						}
						self.setState({interactionsData: data});
					}
				}
				if(caughtData == false){
					var emptyState = self.getInitialState().interactionsData;
					self.setState({interactionsData: emptyState.interactions});
				}
			}	
		})
  	},
 		
  	createInteraction: function(e) {
  		this.setState({ 
        	showLoading: true
        })
  		e.preventDefault()
  		var net = this.props.api
  		net.account.createContract()
	    if (this.isMounted()) { 
	      net.account.ee.on('contract',err => {
	        this.setState({ 
        		showLoading: false
        	})
	      }) 
	    }   		
  	},
	
	updateStatus : function (address, status, event) {
		if(status == 1 || status == 2){
			//expand row here to add buttons/ratings	
		}
		this.props.api.account.updateIntStatus(address, status);
	},  
	
	render: function(){
		var self = this
		var net = this.props.api
		var rows = [];
		var cssClass = "";
		this.state.interactionsData.interactions.forEach(function(interaction, index) {
 			if(interaction.address != " "){
				switch (interaction.statusCode){
					case 0:	cssClass = "btn btn-success interactionsButton";
							interaction.status = "Accept";
							break;
					case 1:	cssClass = "btn btn-info interactionsButton";
							interaction.status = "Rate";
							break;
					case 2: cssClass = "btn btn-warning interactionsButton";
							interaction.status = "Dispute / Confirm";
							break;
					default: cssClass = "btn btn-default interactionsButton";
							 interaction.status = "Finished";
				}
				rows.push(
					<tr key={index}>
						<td> {interaction.address} </td>
						<td className="interactionRating">5</td>
						<td className="interactionChat"><a href="#"><i className="fa fa-commenting chatTransactionIcon"></i></a></td>
						<td className={cssClass} onClick={self.updateStatus.bind(null, interaction.address, interaction.statusCode)} > {interaction.status} </td>
					</tr>
				);
			}
		});
		
		return(
			<div className='bodyContent'>
				<div className="row col-sm-8 col-sm-offset-2 interactionsContainer">
	                <div className="row">
	                	<h3>Interactions</h3>
	                    <button data-toggle="collapse" data-target="#addInterDiv" className="btn"><i className="fa fa-plus-circle"></i>Create New Interaction</button>
	                    <div id="addInterDiv" className="collapse well col-sm-12">
		                    <form action="" ref = "form">
		                    	<textarea className="col-sm-12 etherAddress" placeholder="Ether Address" rows="1" id="responderContractAddy"></textarea>
								<textarea className="col-sm-12 parametersOfInteraction" placeholder="Parameters of Interaction" rows="3"></textarea>
							    <button className="btn btn-default" onClick={this.createInteraction} >Send</button>
							</form> 
						</div>	
                	</div>
				<div className="row col-sm-12 panel panel-default">
		            <table ref = "interactionsTable" className="table table-hover">
		            	<thead>
					      	<tr>
						        <th>Interaction Number</th>
						        <th>Rating</th>
						        <th>Chat</th>
						        <th className="interactionStatus">Status</th>
					      	</tr>
					   </thead>
					   <tbody>
					      	{rows}
					    </tbody>
		            </table>
				</div>
        	</div>
        	<LoadingModalComponent showLoading={this.state.showLoading}/>
        </div>
		)
	}
});

module.exports = InteractionsContainer;
