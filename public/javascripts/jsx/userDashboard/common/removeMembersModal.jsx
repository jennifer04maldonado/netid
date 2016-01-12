var removeMembersModal = React.createClass({		
	getDefaultProps: function() {
		return {
			//src: 'images/loading1.gif'
		}
	},

    render: function(){

    	var membersListNodes = this.props.activeMembersList.map(function (persona, index) {

    		return (
				<tr>
					<td><img src={"/images/starwars.jpg"}></img></td>
					<td><a href="#">Persona Name</a></td>
					<td> Remove </td>
				</tr>
    		)
    	});


        return (		   
		<div id="removeMembersModal" className="modal fade" role="dialog">
			<div className="modal-dialog">
			    <div className="modal-content">
				    <div className="modal-header">
				        <button type="button" className="close" data-dismiss="modal">&times;</button>
				        <h4 className="modal-title">Remove Members</h4>
				    </div>
				    <div className="modal-body">
				        <table className="table">
							<thead>
								<tr>
									<th>Image</th>
									<th>Username</th>
									<th>Remove</th>
								</tr>
							</thead>
							<tbody>
							
							</tbody>
						</table>
				    </div>
			    </div>
			</div>
		</div>        	
        );
    }
});

module.exports = removeMembersModal;
