var commCalendarModal = React.createClass({	
	render: function(){
	    return (
		<div id="commCalendarModal" className="modal fade" role="dialog">
			<div className="modal-dialog">
			    <div className="modal-content">
				    <div className="modal-header">
				        <button type="button" className="close" data-dismiss="modal">&times;</button>
				        <h4 className="modal-title"> Calendar</h4>
				    </div>
				    <div className="modal-body">
				       <img src={"/images/calendarTemp.jpg"}/>
				       <p className="row"><a href="#"><i className="fa fa-plus"></i>Add Event</a></p>
				    </div>
			    </div>
			</div>
		</div>  
	    );
	}
});	

module.exports = commCalendarModal;
     	