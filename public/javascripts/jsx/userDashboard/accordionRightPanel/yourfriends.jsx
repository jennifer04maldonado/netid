var React = require('react');

//INPUT: EVENTUALLY WILL BE DATA OBJECT W/ YOUR FRIENDS
//OUTPUT: DISPLAY FOR FRIENDS IN ACCORDION
var YourFriends = React.createClass({
	render: function(){
		return(
			<div className="col-sm-12 accordion-group contentPanel yourFriends accordionRightPanel">
        <div className="accordion-heading friendsHeading accordionHeading">
          <h4 className="col-sm-12 panel-title">
              <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion2" href="#collapse5">
                Friends Online
              </a>
          </h4>    
        </div>
        <div id="collapse5" className="accordion-body contentPanel friendsPanel">
          <div className="accordion-inner">
           <div className="panel-body friendsBody">
                  <p>Persona1234 <a href="#"><i className="fa fa-envelope-o"></i></a></p>
                  <p>JimmyPersona123 <a href="#"><i className="fa fa-envelope-o"></i></a></p>
                  <p>CookingPersona1099<a href="#"><i className="fa fa-envelope-o"></i></a></p>
                  <p>CheaterHello2000 <a href="#"><i className="fa fa-envelope-o"></i></a></p>
                  <p>helloIamFun777 <a href="#"><i className="fa fa-envelope-o"></i></a></p>
                  <p>messagemenow411 <a href="#"><i className="fa fa-envelope-o"></i></a></p>
                  <p>PersonaAwesome!76 <a href="#"><i className="fa fa-envelope-o"></i></a></p>
              </div>
          </div>
        </div>
      </div>
		)
	}
});

module.exports = YourFriends;