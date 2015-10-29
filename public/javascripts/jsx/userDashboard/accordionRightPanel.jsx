
var YourFriends = React.createClass({
	render: function(){
		return(
			<div className="col-sm-12 accordion-group yourFriends accordionRightPanel">
        <div className="accordion-heading friendsHeading accordionHeading">
          <h4 className="col-sm-12 panel-title">
              <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion2" href="#collapse5">
                Friends Online
              </a>
          </h4>    
        </div>
        <div id="collapse5" className="accordion-body collapse friendsPanel">
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

var YourOffersPanel = React.createClass({
	render: function(){
		return(
      <div className="col-sm-12 accordion-group yourOffers accordionRightPanel">
        <div className="accordion-heading offersHeading accordionHeading">
          <h4 className="col-sm-12 panel-title">
              <a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion2" href="#collapse4">
                My Offers
              </a>
          </h4>    
        </div>
        <div id="collapse4" className="accordion-body in collapse offersPanel">
          <div className="accordion-inner">
              <div className="panel-body offersBody">
                  <p>Bed, Bath & Beyond <a href="#" className="offersLink">Take this quick survey</a></p>
                  <p>Apple Store <a href="#" className="offersLink">Take survey. Win stuff.</a></p>
                  <p>Smart & Final Extra! <a href="#" className="offersLink">Read this to get your prize</a></p>
                  <p>Bed, Bath & Beyond <a href="#" className="offersLink">Take this quick survey</a></p>
              </div>
          </div>
        </div>
      </div>
		)
	}
});

var RightAccordionContainer = React.createClass({
	render: function(){
		return(
			<div className="accordion2" id="accordion2">
				<YourOffersPanel />
        <YourFriends />
      </div>
		)
	}
});

var RatingsPanel = React.createClass({
	render: function(){
		return(
			<div className="col-sm-12 ratingsPanel">
          My Ratings 
          <a className="col-sm-offset-6 masterScore" href="#">78</a> 
          <a href="#" className="socialScore">45</a> 
          <a href="#" className="professionalScore">81</a>
     </div>
		)
	}
});

var RightPanel = React.createClass({
	render: function(){
		return(
			<div>
				<RatingsPanel />
          <RightAccordionContainer />
        </div>
		)
	}
});

ReactDOM.render(
	<RightPanel />, 
	document.getElementById('rightControlPanel')
);