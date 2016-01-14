var AuthenticationMixin = require('../userDashboard/mixins/authenticationMixin');

var LoginApp = React.createClass({   
  
  mixins: [AuthenticationMixin],

  getInitialState: function(){    
    return {
        message: "",
        status: ""
      }
  },

  loginUser: function(event) {
    var self = this;
    event.preventDefault();
    try {
        var netId = event.target.netId.value;      
        var password = event.target.passcode.value;        
        //TODO: ipfs switch
        this.authenticateUser(netId, password, function(result) {
            if (result) {
              window.location.href = "/userDashboard";
            } else {
              self.setState({status: "error", message: "Invalid Net Id or Password!"})
            }
        });
    } catch (err){
      self.setState({status: "error", message: err})
    }          

  },
  componentWillMount: function() {

    //this fetchs error message set by nodejs
    //nodejs can't pass directly to react components so saving data as input value then extracting it using jquery
    var self = this;
    try {
      $( document ).ready(function() {
        var message = $("#message").val();      
        var status = '';
        if (message.length > 0) {
          status = 'error';
        }
        self.setState({status: status, message: message});
      });      
    } catch (err) {
        console.log("error: " + err); 
    }
  },   
  render: function(){

    return (
        <div>
            <div className={this.state.status == 'error' ? 'alert alert-danger' : 'hidden'}>
              <strong>{this.state.message}</strong>
            </div>              
            
            <div className="alert alert-info">
              <strong> default Net Id/passcode: test/test</strong>
            </div>              

            <form onSubmit={this.loginUser} action="/userDashboard" method="post">
                <input className="form-control loginInputs" id='login_username' type="text" name="netId" placeholder="Net Id"/>
                <input className="form-control loginInputs" id='login_passcode' type="text" name="passcode" placeholder="Passcode"/>
                <input className="form-control loginInputs" id='login_auth_app' type="text" name="authApp" placeholder="Authenticator App Code"/>
                <button type="submit" className="col-sm-12 btn loginButton">Log In</button>                
            </form>
        </div>
    )
  }
}); 

ReactDOM.render(
  <LoginApp/>, 
  document.getElementById('loginApp')
);
