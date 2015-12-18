var ComposeMessageModal = React.createClass({		
    render: function(){
        return (
        	<div id="composeMessageModal" className="modal fade" role="dialog">
				<div className="modal-dialog">
				    <div className="modal-content">
				        <div className="modal-header">
				        	<button type="button" className="close" data-dismiss="modal">&times;</button>
				        	<h4 className="modal-title">Send a message</h4>
				        </div>
				        <div className="modal-body">
					      	<form>
					      		<fieldset className="form-group">
					      			<label htmlFor="composeMsgTo">To</label>
							    	<textarea className="form-control" id="personaDescription" rows="1" placeholder="Enter a connection name or email"></textarea>
							    	<label htmlFor="composeMsgTo">Message</label>
							    	<textarea className="form-control" id="personaDescription" rows="4"></textarea>
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

module.exports = ComposeMessageModal;	