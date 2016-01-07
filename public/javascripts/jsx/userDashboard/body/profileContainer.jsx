var EditPersonaModal = require('.././common/editPersonaModal');

var ProfileContainer = React.createClass({	
	render: function(){
		var persona = this.props.activePersona;
		return(
			<div className="col-sm-12 settingsCntnr">
				<div className="col-sm-12 settingsTitle">
					<h4><i className="fa fa-user"></i>Profile</h4>
				</div>
				<div className="col-sm-12 profileDetailBody">
					<img src={"/images/ein.jpeg"} className="col-sm-4 col-sm-offset-2 profileImage"/>
					<div className="col-sm-4 profileDetailText">	
						<h3 className="row">{persona ? persona.persona_name : ''}
							<a href="#editPersonaModal" data-toggle="modal" data-target="#editPersonaModal"><button className="btn">Edit</button></a>
						</h3>
						<ul className="profileScoreList">
							<li>Master Score - 78</li>
							<li>Social - 39</li>
							<li>Professional - 81</li>
						</ul>
						<p>{persona ? persona.description : ''}</p>
					</div>	
				</div>
		        <div className="col-sm-8 col-sm-offset-2 profileInputField">
					<div className="well profileInputWell">	
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

						</div>
						<br></br>
						<span className="postTimeStamp">10 days ago</span>
					</div>
				</div>
				<div className="row col-sm-7 col-sm-offset-3 seeMoreBtn">
					<button className="btn">See more posts</button>
				</div>
				<EditPersonaModal activePersona={this.props.activePersona}/>
			</div> 
		)
	}
});

module.exports = ProfileContainer;