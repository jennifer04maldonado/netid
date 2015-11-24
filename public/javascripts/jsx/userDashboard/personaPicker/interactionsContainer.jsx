var React = require('react');

var InteractionsContainer = React.createClass({

	render: function(){
	
		return(
			<div className='bodyContent'>
				<div className="row col-sm-10 col-sm-offset-1 interactionsContainer">
	                <div className="row">
	                	<h3>Interactions</h3>
	                    <button className="btn">Create</button>
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
					      	<tr>
						        <td>Contract Address</td>
						        <td><i className="fa fa-commenting"></i></td>
						        <td className="btn btn-success">Accept</td>
					     	 </tr>
					     	 <tr>
						        <td>Contract Address</td>
						        <td><i className="fa fa-commenting"></i></td>
						        <td className="btn btn-info">Rate</td>
					      	</tr>
					      	<tr>
						        <td>Contract Address</td>
						        <td><i className="fa fa-commenting"></i></td>
						        <td className="btn btn-default">Finalized</td>
					      	</tr>
					      	<tr>
						        <td>Contract Address</td>
						        <td><i className="fa fa-commenting"></i></td>
						        <td className="btn btn-warning">Dispute</td>
					      	</tr>
					    </tbody>
		            </table>
				</div>
            </div>
			</div>
		)
	}
});

module.exports = InteractionsContainer;