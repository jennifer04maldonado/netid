

//INPUT: EVENTUALLY WILL BE FROM A DATA OBJECT THAT CONTAINS THE OFFERS FOR THIS PERSONA
//OUTPUT: ACCORDION COMPONENT THAT DISPLAYS OFFERS
var YourOffersPanel = React.createClass({
	render: function(){
		return(
      <div className="col-sm-12 contentPanel yourOffers">
        <div className="col-sm-12 offersTitleCntnr">
          <h5>Your Offers </h5> 
        </div>
        <div className="panel-body offersBody">
          <div className="col-sm-12 offersComplete">        
            <div className="col-sm-3 offersAmount">
              <h5>4 ether</h5>
            </div>
            <div className="col-sm-8 offersText">  
              <ul>
                <li className="offersName">Bed, Bath and Beyond</li>
                <li><a href="#" className="offersLink">Take this quick survey</a></li>
              </ul>
            </div>
          </div>  
          <div className="col-sm-12 offersComplete">
            <div className="col-sm-3 offersAmount">
              <h5>0.5 ether</h5>
            </div>  
            <div className="col-sm-8 offersText">   
              <ul>
                <li className="offersName">Apple Store</li>
                <li><a href="#" className="offersLink">Take survey. Win stuff.</a></li>
              </ul>
            </div>
          </div>
          <div className="col-sm-12 offersComplete">  
            <div className="col-sm-3 offersAmount">
              <h5>1 ether</h5>
            </div>   
            <div className="col-sm-8 offersText">   
              <ul>
                <li className="offersName">The Body Shop</li>
                <li><a href="#" className="offersLink">Read this to get your prize</a></li>
              </ul>
            </div>
          </div>
          <div className="col-sm-12 offersComplete">  
            <div className="col-sm-3 offersAmount">
              <h5>2.8 ether</h5>
            </div>   
            <div className="col-sm-8 offersText">   
              <ul>
                <li className="offersName">Mens Warehouse</li>
                <li><a href="#" className="offersLink">Take this quick survey</a></li>
              </ul>
            </div>
          </div>     
        </div>
      </div>
		)
	}
});

module.exports = YourOffersPanel;