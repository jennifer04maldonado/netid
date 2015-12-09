

var CommunitiesContainer = React.createClass({

	render: function(){
        return(
			<div id="communitiesContainer">
				<div className="col-sm-12 commTitleCntnr">
					<h5>Communities	</h5>	
				</div>
				<div className="col-sm-12 commSearchCntnr">
					<input type="text" className="form-control" placeholder="Search"></input>	
				</div>
				<div className="col-sm-12 messageRightContent">
					<div className="col-sm-3 commIndImg">
						<img src={"/images/cooking.jpg"}/>
					</div>
					<div className="col-sm-8 commInd">
						<ul>
							<li className="commName"><a href="#">CookingForLife</a></li>
							<li className="commNumber"><a href="#">18,555 Members</a></li>
						</ul>
					</div>
					<div className="col-sm-3 commIndImg">
						<img src={"/images/mac.png"}/>
					</div>
					<div className="col-sm-8 commInd">	
						<ul>
							<li className="commName"><a href="#">Mac Cosmetics Lovers</a></li>
							<li className="commNumber"><a href="#">156 Members</a></li>
						</ul>
					</div>
					<div className="col-sm-3 commIndImg">
						<img src={"/images/cheese.jpg"}/>
					</div>	
					<div className="col-sm-8 commInd">
						<ul>
							<li className="commName"><a href="#">Cheese Community</a></li>
							<li className="commNumber"><a href="#">310 Members</a></li>
						</ul>
					</div>
					<div className="col-sm-3 commIndImg">
						<img src={"/images/backpack.jpg"}/>
					</div>	
					<div className="col-sm-8 commInd">
						<ul>
							<li className="commName"><a href="#">Backpackers, Unite!</a></li>
							<li className="commNumber"><a href="#">5,050 Members</a></li>
						</ul>
					</div>
					<div className="col-sm-3 commIndImg">
						<img src={"/images/hip.jpg"}/>
					</div>
					<div className="col-sm-8 commInd">
						<ul>
							<li className="commName"><a href="#">HipstersHere</a></li>
							<li className="commNumber"><a href="#">108,555 Members</a></li>
						</ul>
					</div>
					<div className="col-sm-3 commIndImg">
						<img src={"/images/mcd.png"}/>
					</div>
					<div className="col-sm-8 commInd">	
						<ul>
							<li className="commName"><a href="#">McDonalds Fans</a></li>
							<li className="commNumber"><a href="#">69,445 Members</a></li>
						</ul>
					</div>
				</div>
			</div>
		)
	}
});


module.exports = CommunitiesContainer;
