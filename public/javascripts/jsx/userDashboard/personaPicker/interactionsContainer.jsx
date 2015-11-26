var React = require('react');

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
			console.log('new persona selectd: ' + nextProps.activePersona.persona_name);
			this.componentDidMount();
	},
	
	componentDidMount: function() {
	
		var interactionsData = null;
		$.get('.././json_files/interactionsSchema.json', function(result) {
			if (this.isMounted()){
				for (var i in result){
					if(result[i].id === this.props.activePersona.id) {
						this.setState({interactionsData: result[i]});
					}
				}
			}
	   	}.bind(this));
	},

	render: function(){
		var rows = [];
		this.state.interactionsData.interactions.forEach(function(interaction) {
			rows.push(
				<tr>
					<td>{interaction.address}</td>
					<td>{interaction.chatAddress}</td>
					<td className="btn btn-success">{interaction.status}</td>
				</tr>
			);
		});
		
		return(
			<div className='bodyContent'>
				<div className="row col-sm-10 col-sm-offset-1 interactionsContainer">
	                <div className="row">
	                	<h3>Interactions</h3>
	                    <button className="btn"><i className="fa fa-plus-circle"></i>Create New Interaction</button>
	                    <div className="well col-sm-12">
		                    <form action="">
		                    	<textarea className="col-sm-12 etherAddress" placeholder="Ether Address" maxlength="40" rows="1"></textarea>
								<textarea className="col-sm-12 parametersOfInteraction" placeholder="Parameters of Interaction" rows="3"></textarea>
							    <button type="submit" className="btn btn-default">Submit</button>

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