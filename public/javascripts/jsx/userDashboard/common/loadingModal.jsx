var LoadingModal = React.createClass({
	componentDidMount: function() {
  		// if (this.props.showLoading) {
  		// 	$('#loadingModal').modal('show');
  		// } else {
  		// 	$('#loadingModal').modal('hide');
  		// }
  	},
	componentDidUpdate: function() {
		//console.log("componentDidUpdate 2");		
	}, 	
  	
    render: function(){
    	var style = null;
  		if (this.props.showLoading) {
  			style = {
  				display: 'block'
  			}
  		} else {
  			style = {
  				display: 'none'
  			}
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
