//To call pass true to property'showLoading' 
//Then call 'false' to close
var LoadingModal = React.createClass({		
	propTypes: {
		src: React.PropTypes.string,
		showLoading: React.PropTypes.bool
	},
	getDefaultProps: function() {
		return {
			src: 'images/loading1.gif'
		}
	},
	shouldComponentUpdate: function(nextProps, nextState) {
		//console.log("shouldComponentUpdate: " + nextProps.showLoading);
		if (nextProps.showLoading !== this.props.showLoading) {
			this.toggle(nextProps.showLoading);
			return true;
		} else {
			return false;
		}				 
	},	
	toggle: function(show) {
		if (show) {
  			//console.log('show loading modal');
  			$("#loadingModal").modal("show");
  		} else {
  			//console.log('hide loading modal');
  			$("#loadingModal").modal("hide");
  		}
	},
	componentDidMount: function() {
		this.toggle(this.props.showLoading);		
	},
    render: function(){
        return (		   
			<div className="modal fade in" id="loadingModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" data-backdrop="static">
			    <div className="vertical-alignment-helper modal-sm">
			        <div className="modal-dialog vertical-align-center modal-sm">
			            <div className="modal-content">
			                <div className="modal-body">
			                	<image src={this.props.src} style={{marginLeft: '30px'}}/>
			                </div>
			            </div>
			        </div>
			    </div>
			</div>
        );
    }
});

module.exports = LoadingModal;
