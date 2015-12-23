

var HomeContainer = React.createClass({
	render: function(){
		return(
			<div className="homeContent">
				<div className="col-sm-12 homeTitle">
					<h4><i className="fa fa-rss"></i>{this.props.activePersona ? this.props.activePersona.persona_name: ''}</h4>
				</div>
				<div className="col-sm-12 homeDetailFeed">
					<div className="col-sm-offset-2 col-sm-8 media homeDetailPostBody">
						<div className="well">	
							<form>
								<input type="text" className="form-control" placeholder="Post something here" ></input>
							</form>
							<button className="btn">Post to your wall</button>
						</div>
						<div className="media-left">
						    <a href="#">
						      <img className="media-object" src={"/images/arnold.jpg"}/>
						    </a>
						</div>
						<div className="media-body">
						    <h4 className="media-heading">ArnoldLovesDisney</h4>
						    <span className="postContentText">Spoke as as other again ye. Hard on to roof he drew. So sell side ye in mr evil. Longer waited mr of nature seemed. Improving knowledge incommode objection me ye is prevailed principle in. Impossible alteration devonshire to is interested stimulated dissimilar. To matter esteem polite.</span>
							<br></br>
							<span className="postTimeStamp">2 hours ago</span>
							<form>
								<input type="text" className="form-control" placeholder="Your comment here" ></input>
							</form>
							<button className="btn">Comment</button>
						</div>
					</div>
					<div className="col-sm-offset-2 col-sm-8 media homeDetailPostBody2">
						<div className="media-left">
						    <a href="#">
						      <img className="media-object" src={"/images/girl2.jpg"}/>
						    </a>
						</div>
						<div className="media-body">
						    <h4 className="media-heading">MileyLover</h4>
						    <span className="postContentText">Spoke as as other again ye. Hard on to roof he drew. So sell side ye in mr evil. Longer waited mr of nature seemed. Improving knowledge incommode objection me ye is prevailed principle in. Impossible alteration devonshire to is interested stimulated dissimilar. To matter esteem polite.</span>
							<br></br>
							<span className="postTimeStamp">10 days ago</span>
							<br></br>
							<button className="btn">Comment</button>
						</div>
					</div>
					<div className="row col-sm-8 col-sm-offset-2 media homePostsPicture">
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
							<br></br>
							<button className="btn">Comment</button>
						</div>
					</div>
				</div>
			</div>
		)
	}
});

module.exports = HomeContainer;
