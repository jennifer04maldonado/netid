var LoadingModal = React.createClass({
    render: function(){
    	var style = null;
  		if (this.props.showLoading) {
  			$("#loadingModal").modal("show");
  			// style = {
  			// 	display: 'block'
  			// };
  		} else {
  			$("#loadingModal").modal("hide");
  			// style = {
  			// 	display: 'none'
  			// };
  		}

        return (		   
			<div style={style} className="modal fade in" id="loadingModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" data-backdrop="static">
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
