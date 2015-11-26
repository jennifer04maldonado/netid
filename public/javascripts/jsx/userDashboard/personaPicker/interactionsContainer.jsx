var React = require('react');

var InteractionsContainer = React.createClass({
  	getInitialState: function() {
    	return {
      		open: false
    	}
  	},
	toggleAddForm: function(event) {
		if (this.state.open) {
			this.setState({open: false});
		} else {
			this.setState({open: true});	
		}
  	},

	render: function(){
	
		return(
			<div className='bodyContent'>
				<div className="row col-sm-10 col-sm-offset-1 interactionsContainer">
	                <div className="row">
	                	<h3>Interactions</h3>
	                    <button className="btn" onClick={this.toggleAddForm}><i className="fa fa-plus-circle"></i>Create New Interaction</button>
	                    <div className={'well col-sm-12 ' + (this.state.open ? '' : 'hidden')} >
		                    <form action="">
		                    	<textarea className="col-sm-12 etherAddress" placeholder="Ether Address" maxLength="40" rows="1"></textarea>
								<textarea className="col-sm-12 parametersOfInteraction" placeholder="Parameters of Interaction" rows="3"></textarea>
							    <button type="submit" className="btn btn-default">Submit</button>

							</form> 
						</div>	
	                </div>
	            <div className="row">    
					<div className="col-sm-12 panel panel-default">
			            <table className="table table-striped">
			            	<thead>
						      	<tr>
							        <th>Transactions</th>
							        <th>Chat</th>
							        <th>Status</th>
						      	</tr>
						   </thead>
						   <tbody>
						      	<tr>
							        <td>Contract Address</td>
							        <td><a href="#"><i className="fa fa-commenting chatTransactionIcon"></i></a></td>
							        <td className="btn btn-success interactionsButton">Accept</td>
						     	 </tr>
						     	 <tr>
							        <td>Contract Address</td>
							        <td><a href="#"><i className="fa fa-commenting chatTransactionIcon"></i></a></td>
							        <td className="btn btn-info interactionsButton">Rate</td>
						      	</tr>
						      	<tr>
							        <td>Contract Address</td>
							        <td><a href="#"><i className="fa fa-commenting chatTransactionIcon"></i></a></td>
							        <td className="btn btn-default interactionsButton">Finalized</td>
						      	</tr>
						      	<tr>
							        <td>Contract Address</td>
							        <td><a href="#"><i className="fa fa-commenting chatTransactionIcon"></i></a></td>
							        <td className="btn btn-warning interactionsButton">Dispute</td>
						      	</tr>
						    </tbody>
			            </table>
					</div>
				</div>
            </div>
			</div>
		)
	}
});

module.exports = InteractionsContainer;