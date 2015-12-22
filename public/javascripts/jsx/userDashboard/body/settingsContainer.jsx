var React = require('react');

var SettingsContainer = React.createClass({
	render: function(){
		return(
			<div className="col-sm-8 col-sm-offset-2 globalSettings">
				<p>Update your details below</p>
				<div className="well">    
				    <form>
			      		<fieldset className="form-group">
			      			<label htmlFor="settingsGlobal">First name</label>
					    	<textarea className="form-control" id="globalInput" rows="1" placeholder="Scott"></textarea>
					    	<label htmlFor="settingsGlobal">Last name</label>
					    	<textarea className="form-control" id="globalInput" rows="1" placeholder="Kim"></textarea>
					    	<label htmlFor="settingsGlobal">Email</label>
					    	<textarea className="form-control" id="globalInput" rows="1" placeholder="skim@netid.com"></textarea>
					    	<label htmlFor="settingsGlobal">Username</label>
					    	<textarea className="form-control" id="globalInput" rows="1" placeholder="BackendScott"></textarea>
					    	<label htmlFor="settingsGlobal">Password</label>
					    	<textarea className="form-control" id="globalInput" rows="1" placeholder="*************"></textarea>
					    </fieldset>
			      	</form>
			      	<button type="button" className="btn btn-default col-sm-12" data-dismiss="modal">Update</button>
			    </div>  
			    <p className="ethSettingsTitle">Ethereum Settings</p>
				<div className="well ethWell col-sm-6">    
				    <div className="dropdown">
					    <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
					        Choose your Wallet 
					        <span className="caret"></span>
					    </button>
					    <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
						    <table className="table table-hover">
						    	<thead>
						    		<tr>
						    			<th>Account Number</th>
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

module.exports = SettingsContainer;