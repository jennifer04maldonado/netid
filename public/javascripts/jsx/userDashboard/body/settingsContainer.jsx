var React = require('react');

var SettingsContainer = React.createClass({
	render: function(){
		return(
			<div className="col-sm-12 settingsCntnr">
				<div className="col-sm-12 settingsTitle">
					<h4><i className="fa fa-user"></i>Profile</h4>
				</div>
				<div className="col-sm-8 col-sm-offset-2 profileDetailBody">
					<img src={"/images/ein.jpeg"} className="col-sm-offset-2 profileImage"/>
					<div className="col-sm-offset-2 col-sm-8 profileDetailText">	
						<h3 className="row ">NatetheGreat
							<a href="#"><i className="fa fa-pencil-square-o"></i></a>
							<ul className="col-sm-9 col-sm-offset-1 profileScoreList">
								<li className="masterScoreListItem">Master Score - 78</li>
								<li>Social - 39</li>
								<li>Professional - 81</li>
							</ul>
						</h3>
						<p>In as name to here them deny wise this. As rapid woody my he me which. Men but they fail shew just wish next put. Led all visitor musical calling nor her. Within coming figure sex things are. Pretended concluded did repulsive education smallness yet yet described. Had country man his pressed shewing. No gate dare rose he. Eyes year if miss he as upon. </p>
					</div>	
		        </div>
		        <div className="col-sm-8 col-sm-offset-2 profileInputField">
					<div className="well">	
						<form>
							<input type="text" className="form-control" placeholder="Post something here" ></input>
						</form>
						<button className="btn">Post to your wall</button>
					</div>	
				</div>
				<div className="row col-sm-8 col-sm-offset-2 media profilePostsElementText">
					<div className="media-left">
					    <a href="#">
					      <img className="media-object" src={"/images/ein.jpeg"}/>
					    </a>
					</div>
					<div className="media-body">
					    <h4 className="media-heading">NatetheGreat</h4>
					    <span className="postContentText">Spoke as as other again ye. Hard on to roof he drew. So sell side ye in mr evil. Longer waited mr of nature seemed. Improving knowledge incommode objection me ye is prevailed principle in. Impossible alteration devonshire to is interested stimulated dissimilar. To matter esteem polite.</span>
						<br></br>
						<span className="postTimeStamp">2 hours ago</span>
					</div>
				</div>	
				<div className="row col-sm-8 col-sm-offset-2 media profilePostsElementPicture">
					<div className="media-left">
					    <a href="#">
					      <img className="media-object" src={"/images/ein.jpeg"}/>
					    </a>
					</div>
					<div className="media-body">
					    <h4 className="media-heading">NatetheGreat</h4>
					    <span className="postImageCaption">Had a great time last night making dinner with my family! Yum!</span>
					    <img src={"/images/breakfast-pizza.jpg"}/>
						<br></br>
						<span className="postTimeStamp">10 days ago</span>
					</div>
				</div>	
				<div className="row col-sm-8 col-sm-offset-2 media profilePostsElementPicture">
					<div className="media-left">
					    <a href="#">
					      <img className="media-object" src={"/images/ein.jpeg"}/>
					    </a>
					</div>
					<div className="media-body">
					    <h4 className="media-heading">NatetheGreat</h4>
					    <span className="postImageCaption">So funny...I love these videos</span>
					    <div className="embed-responsive embed-responsive-16by9 profilePostsElementVideo">
						    <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/VJvRtkV5D3Y"></iframe>
						</div>
						<br></br>
						<span className="postTimeStamp">10 days ago</span>
					</div>
				</div>
				<div className="row col-sm-7 col-sm-offset-3 seeMoreBtn">
					<button className="btn">See more posts</button>
				</div>
			</div> 
		)
	}
});

module.exports = SettingsContainer;