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
  	getInteractions: function() {
		$.get('.././json_files/data/netid-account/personas/interactionsSchema.json', function(result) {
			return result;
	   	}.bind(this));
  	},

  	getInteractionsIPFS: function(personaId) {
	      	
	    var self = this;
		var caughtData = false;
		 
		this.props.api.account.getInteractions(function(result) { 
			if(self.isMounted()){
				for (var i in result){
						if(result[i].id === personaId) {
							caughtData = true;

							self.setState({interactionsData: result[i]});
						}
				}
				if(caughtData == false){
					var emptyState = self.getInitialState().interactionsData;
					self.setState({interactionsData: emptyState});
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
	
	updateStatus : function( address, status){
		this.props.api.account.updateIntStatus(address, status);
	},  
	
  	//this method fetches data from IPFS or AJAX				
	componentDidMount: function() {
      	var personaId = this.props.activePersona.id;

		if (this.props.useIPFS) {
			this.getInteractionsIPFS(personaId);
		} else {
			this.getInteractions(personaId);
		}

	},
	
	render: function(){
		var self = this
		var net = this.props.api
		var rows = [];
		var cssClass = "";
		this.state.interactionsData.interactions.forEach(function(interaction, index) {
 			var contractState = net.account.getInteractionStatus(interaction.address);
 			if(contractState){
				switch (contractState.c[0]){
					case 0:	cssClass = "btn btn-success interactionsButton";
							interaction.status = "Accept";
							break;
					case 1:	cssClass = "btn btn-info interactionsButton";
							interaction.status = "Rate";
							break;
					case 2: cssClass = "btn btn-warning interactionsButtons";
							interaction.status = "Dispute";
							break;
					default: cssClass = "btn btn-default interactionsButton";
							 interaction.status = "Done";
				}
				rows.push(
					<tr key={index}>
						<td> {interaction.address} </td>
						<td><a href="#"><i className="fa fa-commenting chatTransactionIcon"></i></a></td>
						<td className={cssClass} onClick={self.updateStatus.bind(this, interaction.address, contractState.c[0])} > {interaction.status} </td>
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
	                    <div id='addInterDiv' className='collapse well col-sm-12 '>
		                    <form action="" ref = "form">
		                    	<textarea className="col-sm-12 etherAddress" placeholder="Ether Address" rows="1" id="responderContractAddy"></textarea>
								<textarea className="col-sm-12 parametersOfInteraction" placeholder="Parameters of Interaction" rows="3"></textarea>
							    <button className="btn btn-default" onClick={this.createInteraction} >Submit</button>
							</form> 
						</div>	
                	</div>
				<div className="row col-sm-12 panel panel-default">
		            <table ref = "interactionsTable" className="table table-striped">
		            	<thead>
					      	<tr>
						        <th>Interactions</th>
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
        	<LoadingModalComponent showLoading={this.state.showLoading}/>
        </div>
		)
	}
});

module.exports = InteractionsContainer;
