

var WalletContainer = React.createClass({

	render: function(){
        return(
			<div id="walletContainer">
				<div className="col-sm-12 walletTitleCntnr">
		            <h5>Your Wallet </h5> 
		        </div>
		        <div className="well ethWell col-sm-12">    
				    <div className="dropdown">
					    <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
					        Choose your Wallet 
					        <span className="caret"></span>
					    </button>
					    <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
						    <table className="table table-hover">
						    	<thead>
						    		<tr>
						    			<th>Account #</th>
						    			<th>Balance</th>
						    		</tr>
						    	</thead>
						    	<tbody>
						    		<tr>
						    			<td>66558722254454</td>
						    			<td>$14.33</td>
						    		</tr>
						    		<tr>
						    			<td>66558722254454</td>
						    			<td>$44.33</td>
						    		</tr>
						    		<tr>
						    			<td>66558722254454</td>
						    			<td>$144.33</td>
						    		</tr>
						    	</tbody>
						    </table>
						</ul>
					</div>
		      		<button type="button" className="btn btn-default ethUpdateBtn" data-dismiss="modal">Update</button>
		   		</div>
			</div>
		)
	}
});


module.exports = WalletContainer;
