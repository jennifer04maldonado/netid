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
  		console.log('test')
  		var net = this.props.api
  		net.account.createContract()
	    if (this.isMounted()) { 
	      net.account.ee.on('contract',err => {
	        //console.log('Freind Object Received '+ net.account.friendsList.length+' friends')
	        console.log('contract created, event emitted')
	        this.setState({ 
        		showLoading: false
        	})
	      }) 
	    }   		
  	},
	
	test : function(){
		console.log('it worked')
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
			var intContract = web3.eth.contract([{"constant":true,"inputs":[],"name":"disputed","outputs":[{"name":"","type":"bool"}],"type":"function"},{"constant":true,"inputs":[],"name":"initiatorRating","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[],"name":"setToFinal","outputs":[],"type":"function"},{"constant":true,"inputs":[],"name":"responderConf","outputs":[{"name":"","type":"bool"}],"type":"function"},{"constant":true,"inputs":[],"name":"responder","outputs":[{"name":"","type":"address"}],"type":"function"},{"constant":false,"inputs":[],"name":"confirmRating","outputs":[],"type":"function"},{"constant":true,"inputs":[],"name":"responderRating","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[],"name":"dataHash2","outputs":[{"name":"","type":"string"}],"type":"function"},{"constant":true,"inputs":[],"name":"respRated","outputs":[{"name":"","type":"bool"}],"type":"function"},{"constant":true,"inputs":[],"name":"rateCount","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[],"name":"initiator","outputs":[{"name":"","type":"address"}],"type":"function"},{"constant":true,"inputs":[],"name":"disputer","outputs":[{"name":"","type":"address"}],"type":"function"},{"constant":true,"inputs":[],"name":"initRated","outputs":[{"name":"","type":"bool"}],"type":"function"},{"constant":true,"inputs":[],"name":"dataHash1","outputs":[{"name":"","type":"string"}],"type":"function"},{"constant":true,"inputs":[],"name":"initiatorConf","outputs":[{"name":"","type":"bool"}],"type":"function"},{"constant":true,"inputs":[],"name":"state","outputs":[{"name":"","type":"uint8"}],"type":"function"},{"constant":false,"inputs":[],"name":"confirmInvite","outputs":[],"type":"function"},{"constant":false,"inputs":[],"name":"cancelInvite","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"init","type":"address"}],"name":"setInitiator","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"firstPart","type":"string"},{"name":"secondPart","type":"string"}],"name":"setHash","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"rating","type":"uint256"}],"name":"rate","outputs":[],"type":"function"},{"constant":false,"inputs":[],"name":"dispute","outputs":[],"type":"function"},{"inputs":[{"name":"init","type":"address"}],"type":"constructor"},{"anonymous":false,"inputs":[],"name":"InteractionConfirmed","type":"event"},{"anonymous":false,"inputs":[],"name":"InitRated","type":"event"},{"anonymous":false,"inputs":[],"name":"RespRated","type":"event"},{"anonymous":false,"inputs":[],"name":"Rated","type":"event"},{"anonymous":false,"inputs":[],"name":"Disputed","type":"event"},{"anonymous":false,"inputs":[],"name":"Confirmed","type":"event"}]); 
 			var contractState = net.account.getInteractionStatus(interaction.address) 			
 			if (contractState) {
 				console.log('testing');
	 			console.log(contractState.c[0])
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
						<td>{interaction.address}</td>
						<td><a href="#"><i className="fa fa-commenting chatTransactionIcon"></i></a></td>
						<td className={cssClass} onClick={self.test}> {interaction.status} </td>
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
		            <table className="table table-striped">
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
