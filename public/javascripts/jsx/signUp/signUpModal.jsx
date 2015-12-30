var SignUpModal = React.createClass({ 
  render: function(){
    return (
    <div id="signUpModal" className="modal fade" tabIndex="-1" role="dialog" aria-labeledby="myModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;  </button>
              <h4 className="modal-title" id="myModalLabel">Modal title</h4>
            </div>
            <div className="modal-body">
              ...
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}); 
module.exports = SignUpModal; 
