var React = require('react');

//INPUT: EVENTUALLY WILL BE FROM A DATA OBJECT THAT CONTAINS THE OFFERS FOR THIS PERSONA
//OUTPUT: ACCORDION COMPONENT THAT DISPLAYS OFFERS
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

module.exports = YourOffersPanel;