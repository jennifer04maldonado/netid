var signUpModal = require('./signUpModal');
var signUpComponent = React.createClass({ 
  render: function(){
    return (
      <signUpModal />
       <button className="col-sm-12 btn signupButton" type="button" data-toggle="modal" data-target="#signUpModal" style="height: 45px; background-color: #169379; color: white; font-weight: bold;">Sign Up</button>
    );
  }
}); 

ReactDOM.render(
  <signUpComponent />, 
  document.getElementById('signUpComponent')
);
