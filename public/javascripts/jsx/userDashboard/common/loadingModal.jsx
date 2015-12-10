var LoadingModal = React.createClass({
  	
    render: function(){
        return (		   
			<div className="modal fade in" id="loadingModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" data-backdrop="static">
			    <div className="vertical-alignment-helper modal-sm">
			        <div className="modal-dialog vertical-align-center modal-sm">
			            <div className="modal-content">
			                <div className="modal-body">
			                <image src='images/loading1.gif'/>
			                </div>
			            </div>
			        </div>
			    </div>
			</div>
        );
    }
});

module.exports = LoadingModal;
