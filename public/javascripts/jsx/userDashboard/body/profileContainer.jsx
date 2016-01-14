var EditPersonaModal = require('.././common/editPersonaModal');

var ProfileContainer = React.createClass({	
  	postMessage: function(event) {    
	
  		event.preventDefault();

	},	
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
							<span className={this.props.viewMemberPersona ? "hidden" : ""}>
								<a href="#editPersonaModal" data-toggle="modal" data-target="#editPersonaModal"><button className="btn">Edit</button></a>
							</span>
							<span className={this.props.viewMemberPersona ? "" : "hidden"}>							
								<a href="#"><i className="fa fa-exchange"></i></a>
								<a href="#"><i className="fa fa-envelope"></i></a>
							</span>
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
						<form onSubmit={this.postMessage}>
							<input type="text" className="form-control" placeholder="Post something here" ></input>
							<button type="submit" className="btn">Post to your wall</button>
						</form>
						
					</div>	
				</div>
				<div className="row col-sm-7 col-sm-offset-2 media profilePostsElementText">
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
				<div className="col-sm-1 row removePostBtn">
					<div className="dropdown">
					    <button className="btn dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
					        <span className="caret"></span>
					    </button>
					    <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
						    <table className="table table-hover">
						    	<tbody>
						    		<tr>
						    			<td>Delete</td>
						    		</tr>
						    	</tbody>
						    </table>
						</ul>
					</div>
				</div>	
				<div className="row col-sm-7 col-sm-offset-2 media profilePostsElementPicture">
					<div className="media-left">
					    <a href="#">
					      <img className="media-object" src={"/images/ein.jpeg"}/>
					    </a>
					</div>
					<div className="media-body">
					    <h4 className="media-heading">NatetheGreat</h4>
					    <span className="postImageCaption">Had a great time last night making dinner with my family! Yum!</span>
					    <br/>
					    <span className="postTimeStamp">10 days ago</span>
					    <img src={"/images/breakfast-pizza.jpg"}/>	
					</div>
				</div>
				<div className="col-sm-1 row removePostBtn">
					<div className="dropdown">
					    <button className="btn dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
					        <span className="caret"></span>
					    </button>
					    <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
						    <table className="table table-hover">
						    	<tbody>
						    		<tr>
						    			<td>Delete</td>
						    		</tr>
						    	</tbody>
						    </table>
						</ul>
					</div>
				</div>		
				<div className="row col-sm-7 col-sm-offset-2 media profilePostsElementPicture">
					<div className="media-left">
					    <a href="#">
					      <img className="media-object" src={"/images/ein.jpeg"}/>
					    </a>
					</div>
					<div className="media-body">
					    <h4 className="media-heading">NatetheGreat</h4>
					    <span className="postImageCaption">So funny...I love these videos</span>
						<br/>
						<span className="postTimeStamp">10 days ago</span>
						<div className="embed-responsive embed-responsive-16by9 profilePostsElementVideo"></div>
					</div>
				</div>
				<div className="col-sm-1 row removePostBtn">
					<div className="dropdown">
					    <button className="btn dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
					        <span className="caret"></span>
					    </button>
					    <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
						    <table className="table table-hover">
						    	<tbody>
						    		<tr>
						    			<td>Delete</td>
						    		</tr>
						    	</tbody>
						    </table>
						</ul>
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