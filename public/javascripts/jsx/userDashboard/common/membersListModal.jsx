var MembersListModal = React.createClass({		
	getDefaultProps: function() {
		return {
			//src: 'images/loading1.gif'
		}
	},

    render: function(){
        return (		   
		<div id="membersListModal" className="modal fade" role="dialog">
		  <div className="modal-dialog">
		    <div className="modal-content">
		      <div className="modal-header">
		        <button type="button" className="close" data-dismiss="modal">&times;</button>
		        <h4 className="modal-title"> {this.props.activeCommunity ? this.props.activeCommunity.name : ''} </h4>
		      </div>
		      <div className="modal-body">
		        <p>Members list for community: </p>
		      </div>
		      <div className="modal-footer">
		        <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
		      </div>
		    </div>
		  </div>
		</div>        	
        );
    }
});

module.exports = MembersListModal;
