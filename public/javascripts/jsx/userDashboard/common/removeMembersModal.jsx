var RemoveMembersModal = React.createClass({		
    render: function(){
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
									<tr>
										<td>H</td>
										<td><a href="#">Persona1</a></td>
										<td><a href="#"><i className="fa fa-times"></i></a></td>
									</tr>
									<tr>
										<td>H</td>
										<td><a href="#">Persona1</a></td>
										<td><a href="#"><i className="fa fa-times"></i></a></td>
									</tr>
									<tr>
										<td>H</td>
										<td><a href="#">Persona1</a></td>
										<td><a href="#"><i className="fa fa-times"></i></a></td>
									</tr>
									<tr>
										<td>H</td>
										<td><a href="#">Persona1</a></td>
										<td><a href="#"><i className="fa fa-times"></i></a></td>
									</tr>
								</tbody>
							</table>
					    </div>
				    </div>
				</div>
			</div>        	
        );
    }
});

module.exports = RemoveMembersModal;
