var MembersListModal = React.createClass({		
	getDefaultProps: function() {
		return {
			//src: 'images/loading1.gif'
		}
	},
	setMemberPersona:function(event) {
		console.log("view member persona: " + event.target.dataset.personaId);
		var personaId = event.target.dataset.personaId;
		this.props.setMemberPersona(personaId);
		$("#membersListModal").modal('hide');		
		$("#navProfileTab").tab('show');		

	},
    render: function(){
    	var self = this;
    	var membersListNodes = this.props.activeMembersList.map(function (persona, index) {

    		return (
				<tr key={persona.id}>
					<td><img src={"/images/starwars.jpg"}></img></td>
					<td><a data-persona-id={persona.persona_id} onClick={self.setMemberPersona} href="#">{persona.persona_name}</a></td>
					<td>{persona.persona_type}</td>
					<td><a data-persona-id={persona.persona_id} href="#"><i className="fa fa-plus"></i></a></td>
					<td><a href="#"><i className="fa fa-envelope-o"></i></a></td>
				</tr>
    		)
    	});


        return (		   
		<div id="membersListModal" className="modal fade" role="dialog">
			<div className="modal-dialog">
			    <div className="modal-content">
				    <div className="modal-header">
				        <button type="button" className="close" data-dismiss="modal">&times;</button>
				        <h4 className="modal-title"> {this.props.activeCommunity ? this.props.activeCommunity.name : ''} </h4>
				    </div>
				    <div className="modal-body">
				        <table className="table">
							<thead>
								<tr>
									<th>Image</th>
									<th>Username</th>
									<th>Type</th>
									<th>Add</th>
									<th>Message</th>
								</tr>
							</thead>
							<tbody>
							{membersListNodes}
							</tbody>
						</table>
				    </div>
			    </div>
			</div>
		</div>        	
        );
    }
});

module.exports = MembersListModal;
