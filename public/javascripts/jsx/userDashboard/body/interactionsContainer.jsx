var LoadingModalComponent = require('../common/loadingModal');
var InteractionsContainer = React.createClass({
	getInitialState: function() {
		return {
			"interactionsData": {
				"id":"test",
				"interactions":[
					{
						"address" : " ",
						"status" : " ",
						"chatAddress":" "
					}
				]
			},
			"showLoading": false
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
		var emptyState = self.getInitialState().interactionsData;
		 
		this.props.api.account.getInteractions(function(result) { 
			if(self.isMounted()){
				for (var i in result){
					if(result[i].id === personaId) {
						caughtData = true;
						data = result[i];
						for (var j in result[i].interactions){
							data.interactions[j].statusCode = (net.account.getInteractionStatus(result[i].interactions[j].address)).c[0];
						}
						//console.log('this is the data pulled '+data)
						self.setState({interactionsData: data});
						console.log(caughtData)
						caughtData = false
					}else{
						//setting emptystate isn't rerendering blank txs 
						console.log(emptyState.interactions)
						self.setState({
							interactionsData: emptyState.interactions
						})
					}
				}

			}	
		})
  	},
 		
  	createInteraction: function(e) {
  		var personaId = this.props.activePersona.id;
  		var net = this.props.api
	    var self = this;
		var caughtData = false;
		var data = null;

  		this.setState({ 
        	showLoading: true
        })
  		e.preventDefault()
  		net.account.createContract(this.props.activePersona.id)
	    if (this.isMounted()) { 
	      net.account.ee.on('contract',err => {
		    this.props.api.account.getInteractions(function(result) { 
				if(self.isMounted()){
					for (var i in result){
						if(result[i].id === personaId) {
							caughtData = true;
							data = result[i];
							for (var j in result[i].interactions){
								data.interactions[j].statusCode = (net.account.getInteractionStatus(result[i].interactions[j].address)).c[0];
							}
							//console.log(data)
							self.setState({
								interactionsData: data,
								showLoading: false
							});
						}
					}
					if(caughtData == false){
						var emptyState = self.getInitialState().interactionsData;
						self.setState({
							interactionsData: emptyState.interactions,
							showLoading: false
						});
					}
				}	
			})
/*	        this.setState({ 
	        	interactionsData: net.account.newIntData[net.account.newIntData.length - 1],
        		showLoading: false
        	})*/
	      }) 
	    }   		
  	},
	
	updateStatus : function (address, status, rating, event) {
		this.props.api.account.updateIntStatus(address, status, rating)
		console.log(status)
	},  
	
	render: function(){
		var self = this
		var net = this.props.api
		var rows = [];
		var cssClass = "";
		//console.log(this.state.interactionsData.interactions)
		this.state.interactionsData.interactions.forEach(function(interaction, index) {
 			if(interaction.address != " "){
				switch (interaction.statusCode){
					case 0:	cssClass = "btn btn-success interactionsButton";
							//I need to redefine the states for pending on creator and accept on receiver
							interaction.status = "Pending";
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
        	<LoadingModalComponent targetId="interactionsLoading" showLoading={this.state.showLoading}/>
        </div>
		)
	}
});

module.exports = InteractionsContainer;
