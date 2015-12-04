

var MembersOnline = React.createClass({
	render: function(){
		return(
			<div className="col-sm-12 accordion-group contentPanel yourFriends accordionRightPanel">
        <div className="accordion-heading friendsHeading accordionHeading">
    
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
                  <p>PersonaAwesome76! <a href="#"><i className="fa fa-envelope-o"></i></a></p>
              </div>
          </div>
        </div>
      </div>
		)
	}
});


module.exports = MembersOnline;
