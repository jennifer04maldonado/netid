var SignUpModal = require('./signUpModal');

var SignUpApp = React.createClass({ 
  render: function(){
    return (
      <div>	       
	       <SignUpModal />
	   </div>
    );
  }
}); 

ReactDOM.render(
  <SignUpApp />, 
  document.getElementById('signUpApp')
);
