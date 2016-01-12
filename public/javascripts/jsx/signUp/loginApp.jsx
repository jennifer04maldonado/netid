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
        var username = event.target.username.value;      
        var  password = event.target.passcode.value;             
        this.authenticateUser(username, password, function(result) {
            if (result) {
              window.location.href = "/userDashboard";
            } else {
              self.setState({status: "error", message: "Invalid User or Password!"})
            }
        });
    } catch (err){
      self.setState({status: "error", message: err})
    }          

  },
  componentDidMount: function(){
      if (this.isLoggedIn()) {
           window.location.href="/userDashboard";
      };
  },  
  render: function(){
    return (
        <div>
            <div className={this.state.status == 'error' ? 'alert alert-danger' : 'hidden'}>
              <strong>{this.state.message}</strong>
            </div>  
            <div className="alert alert-info">
              <strong> default user/passcode: test/test</strong>
            </div>  

            <form onSubmit={this.loginUser} action="/userDashboard" method="post">
                <input className="form-control loginInputs" id='login_username' type="text" name="username" placeholder="Username"/>
                <input className="form-control loginInputs" id='login_passcode' type="text" name="passcode" placeholder="Passcode"/>
                <input className="form-control loginInputs" id='login_auth_app' type="text" name="authApp" placeholder="Authenticator App Code"/>
                <button type="submit" className="col-sm-12 btn loginButton">Log In</button>                
            </form>
            </div>
    )
  }
}); 

ReactDOM.render(
  <LoginApp />, 
  document.getElementById('loginApp')
);
