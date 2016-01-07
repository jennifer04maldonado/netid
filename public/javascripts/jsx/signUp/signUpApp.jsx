var SignUpModal = require('./signUpModal');

var SignUpApp = React.createClass({ 
  render: function(){
    return (
      <div><button style={{
      			height: 45, 
      			backgroundColor: '#169379', 
      			color: 'white', 
      			fontWeight: 'bold'
      		}} 
      		data-target="#signUpModal" data-toggle="modal" type="button" className="col-sm-12 btn signupButton">Sign Up</button>	       
	       <SignUpModal />
	   </div>
    );
  }
}); 

ReactDOM.render(
  <SignUpApp />, 
  document.getElementById('signUpApp')
);
