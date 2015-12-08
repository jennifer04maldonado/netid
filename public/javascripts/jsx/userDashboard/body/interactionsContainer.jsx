

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

		var caughtData = false;
		$.get('.././json_files/interactionsSchema.json', function(result) {
			if (this.isMounted()){
				for (var i in result){
					if(result[i].id === this.props.activePersona.id) {
						caughtData = true;
						this.setState({interactionsData: result[i]});
					}
				}
				if(caughtData == false){
					var emptyState = this.getInitialState().interactionsData;
					this.setState({interactionsData: emptyState});
				}
			}
	   	}.bind(this));
  	},  
  	getInteractionsIPFS: function(done) {
	    var hash = this.props.peerIdHash + '/interactionsSchema.json';   
	    ipfs.cat(hash, function (err, res) {
	      if (err || !res) return console.log('error:' + err);      
	      //readable stream
	      if (res.readable) {
	          res.pipe('readable stream: ' + process.stdout);
	          //string          
	      } else {
	        var interactionsArray = JSON.parse(res);
	        done(interactionsArray);  
	      }
	    });
  	},
  	//this method fetches data from IPFS or AJAX				
	componentDidMount: function() {
      	var personaId = this.props.activePersona.id;
	    var self = this;
	    if (this.props.useIPFS) {         
	        this.getInteractionsIPFS(function (result)  {              
	          	if (self.isMounted()){
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
	        });
	    } else {
	        this.getInteractions();
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
				<div className="row col-sm-10 col-sm-offset-1 interactionsContainer">
	                <div className="row">
	                	<h3>Interactions</h3>
	                    <button data-toggle="collapse" data-target="#addInterDiv" className="btn"><i className="fa fa-plus-circle"></i>Create New Interaction</button>
	                    <div id='addInterDiv' className='collapse well col-sm-12 '>
		                    <form action="" ref = "form">
		                    	<textarea className="col-sm-12 etherAddress" placeholder="Ether Address" maxLength="40" rows="1" id="responderContractAddy"></textarea>
								<textarea className="col-sm-12 parametersOfInteraction" placeholder="Parameters of Interaction" rows="3"></textarea>
							    <button type="submit" className="btn btn-default" onClick={this.createInteraction}>Submit</button>
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
