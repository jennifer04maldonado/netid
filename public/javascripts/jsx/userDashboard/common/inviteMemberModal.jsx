var InviteMemberModal = React.createClass({		
    render: function(){
        return (
        	<div id="inviteMemberModal" className="modal fade" role="dialog">
				<div className="modal-dialog">
				    <div className="modal-content">
				        <div className="modal-header">
				        	<button type="button" className="close" data-dismiss="modal">&times;</button>
				        	<h4 className="modal-title">Invite a connection to join your Community</h4>
				        </div>
				        <div className="modal-body">
					      	<form>
					      		<fieldset className="form-group">
					      			<label htmlFor="composeMsgTo">From You</label>
							    	<textarea className="form-control" id="personaDescription" rows="1" placeholder="Persona Name"></textarea>
					      			<label htmlFor="composeMsgTo">To</label>
							    	<textarea className="form-control" id="personaDescription" rows="1" placeholder="Enter a connection name or email"></textarea>
							    </fieldset>
					      	</form>
				      	</div>
				      	<div className="modal-footer">
				        	<button type="button" className="btn btn-default col-sm-12" data-dismiss="modal">Send</button>
				      	</div>
				    </div>
				</div>
			</div>  
        );
    }
});

module.exports = InviteMemberModal;	