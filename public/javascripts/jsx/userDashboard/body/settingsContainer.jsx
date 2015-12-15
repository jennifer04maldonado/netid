var React = require('react');

var SettingsContainer = React.createClass({
	render: function(){
		return(
			<div className="col-sm-12 settingsCntnr">
				<div className="col-sm-2 settingsTitle">
					<h4><i className="fa fa-user"></i>Profile</h4>
				</div>
				<div className="col-sm-9 communityNavTabs">
					<ul className="nav nav-tabs" role="tablist">
						<li role="presentation"><a href="#posts" aria-controls="posts" role="tab" data-toggle="tab">Posts</a></li>
						<li role="presentation"><a href="#about" aria-controls="about" role="tab" data-toggle="tab">About</a></li>
						<li role="presentation"><a href="#communities" aria-controls="communities" role="tab" data-toggle="tab">Communities</a></li>
						<li role="presentation"><a href="#connections" aria-controls="connections" role="tab" data-toggle="tab">Connections</a></li>
						<li role="presentation"><a href="#settings" aria-controls="settings" role="tab" data-toggle="tab">Settings</a></li>

					</ul>
					<div className="tab-content col-sm-12">
						<div role="tabpanel" className="tab-pane tabPosts fade" id="posts">
							<h2>Posts for {this.props.activePersona.persona_name}</h2>
						</div>
						<div role="tabpanel" className="tab-pane tabAbout fade" id="about">
							<div className="col-sm-12 personaProfileAbout">
		                    	<div className="row col-sm-10 addPersonaImage">
									<div className="col-sm-6 col-sm-offset-4 editImageBtn">
										<img src={"/images/ein.jpeg"}/>
									</div>
									<div className="col-sm-12 editImageUpload">
										<h4 className="col-sm-4 col-sm-offset-4">NatetheGreat
											<a href="#"><i className="fa fa-pencil-square-o"></i></a>
										</h4>
										<ul className="col-sm-4 col-sm-offset-4">
											<li className="masterScoreListItem">Master Score - 78</li>
											<li>Social - 39</li>
											<li>Professional - 81</li>
										</ul>
										<h5 className="col-sm-11 col-sm-offset-1">Started his hearted any civilly. So me by marianne admitted speaking. Men bred fine call ask. Cease one miles truth day above seven. Suspicion sportsmen provision suffering mrs saw engrossed something. Snug soon he on plan in be dine some.</h5>
									</div>
								</div>
							</div>	
						</div>
						<div role="tabpanel" className="tab-pane tabCommunities fade" id="communities">
							<div className="col-sm-12 settingsCommunities">
								<div className="panel panel-default">
								  	<div className="panel-body">
								    	<div className="media">
											<div className="media-left">
											    <a href="#">
											      <img className="media-object" src={"/images/cooking.jpg"}/>
											    </a>
											</div>
											<div className="media-body">
											    <h5 className="media-heading">Cooking At Home</h5>
											    <span>Spoke as as other again ye. Hard on to roof he drew. So sell side ye in mr evil. Longer waited mr of nature seemed. Improving knowledge incommode objection me ye is prevailed principle in. Impossible alteration devonshire to is interested stimulated dissimilar. To matter esteem polite.</span>
												<h6>
													<img src={"/images/friends.png"}/>
													130 Members
													<i className="fa fa-unlock-alt"></i>
													Public
												</h6>
											</div>
										</div>
								  	</div>
								  	<div className="panel-body">
								    	<div className="media">
											<div className="media-left">
											    <a href="#">
											      <img className="media-object" src={"/images/football-fanss.jpg"}/>
											    </a>
											</div>
											<div className="media-body">
											    <h5 className="media-heading">Football Fans</h5>
											    <span>Spoke as as other again ye. Hard on to roof he drew. So sell side ye in mr evil. Longer waited mr of nature seemed. Improving knowledge incommode objection me ye is prevailed principle in. Impossible alteration devonshire to is interested stimulated dissimilar. To matter esteem polite.</span>
												<h6>
													<img src={"/images/friends.png"}/>
													130 Members
													<i className="fa fa-unlock-alt"></i>
													Public
												</h6>
											</div>
										</div>
								  	</div>
								  	<div className="panel-body">
								    	<div className="media">
											<div className="media-left">
											    <a href="#">
											      <img className="media-object" src={"/images/coders.jpg"}/>
											    </a>
											</div>
											<div className="media-body">
											    <h5 className="media-heading">Coders United</h5>
											    <span>Spoke as as other again ye. Hard on to roof he drew. So sell side ye in mr evil. Longer waited mr of nature seemed. Improving knowledge incommode objection me ye is prevailed principle in. Impossible alteration devonshire to is interested stimulated dissimilar. To matter esteem polite.</span>
												<h6>
													<img src={"/images/friends.png"}/>
													130 Members 
													<i className="fa fa-lock"></i>
													Private
												</h6>
											</div>
										</div>
								  	</div>
								</div>
							</div>	
						</div> 
						<div role="tabpanel" className="tab-pane tabConnections fade" id="connections">
							<div className="col-sm-12 settingsConnections">
			                	<div className="panel panel-default">
								  	<div className="panel-body">
								    	<div className="media">
											<ul className="col-sm-12 profileConnectionsList">
												<li>
													<div className="media-left">
													   	<a href="#">
													        <img className="media-object settingsFriendImg" src={"/images/dolph.png"}/>
													    </a>
													</div>
													<div className="media-body settingsFriendName">
													    <h5 className="media-heading">MyNameIsCoolMan</h5>
													   <h6><i className="fa fa-times"></i>Remove/ Block</h6>
													</div>
												</li>
												<li>
													<div className="media-left">
													   	<a href="#">
													        <img className="media-object settingsFriendImg" src={"/images/jenn.jpeg"}/>
													    </a>
													</div>
													<div className="media-body settingsFriendName">
													    <h5 className="media-heading">JustinChang123</h5>
													    <h6><i className="fa fa-times"></i>Remove/ Block</h6>
													</div>
												</li>
												<li>
													<div className="media-left">
													   	<a href="#">
													        <img className="media-object settingsFriendImg" src={"/images/kim.jpg"}/>
													    </a>
													</div>
													<div className="media-body settingsFriendName">
													    <h5 className="media-heading">PeterRamos998</h5>
													  	<h6><i className="fa fa-times"></i>Remove/ Block</h6>
													</div>
												</li>
											</ul>
											<ul className="col-sm-12 profileConnectionsList">
												<li>
													<div className="media-left">
													   	<a href="#">
													        <img className="media-object settingsFriendImg" src={"/images/man1.jpg"}/>
													    </a>
													</div>
													<div className="media-body settingsFriendName">
													    <h5 className="media-heading">MyNameIsCoolMan</h5>
													    <h6><i className="fa fa-times"></i>Remove/ Block</h6>
													</div>
												</li>
												<li>
													<div className="media-left">
													   	<a href="#">
													        <img className="media-object settingsFriendImg" src={"/images/man2.jpg"}/>
													    </a>
													</div>
													<div className="media-body settingsFriendName">
													    <h5 className="media-heading">JustinChang123</h5>
													    <h6><i className="fa fa-times"></i>Remove/ Block</h6>
													</div>
												</li>
												<li>
													<div className="media-left">
													   	<a href="#">
													        <img className="media-object settingsFriendImg" src={"/images/carrottop.jpg"}/>
													    </a>
													</div>
													<div className="media-body settingsFriendName">
													    <h5 className="media-heading">PeterRamos998</h5>
													    <h6><i className="fa fa-times"></i>Remove/ Block</h6>
													</div>
												</li>
											</ul>
											<ul className="col-sm-12 profileConnectionsList">
												<li>
													<div className="media-left">
													   	<a href="#">
													        <img className="media-object settingsFriendImg" src={"/images/person4.jpg"}/>
													    </a>
													</div>
													<div className="media-body settingsFriendName">
													    <h5 className="media-heading">MyNameIsCoolMan</h5>
													    <h6><i className="fa fa-times"></i>Remove/ Block</h6>
													</div>
												</li>
												<li>
													<div className="media-left">
													   	<a href="#">
													        <img className="media-object settingsFriendImg" src={"/images/person3.jpg"}/>
													    </a>
													</div>
													<div className="media-body settingsFriendName">
													    <h5 className="media-heading">JustinChang123</h5>
													    <h6><i className="fa fa-times"></i>Remove/ Block</h6>
													</div>
												</li>
												<li>
													<div className="media-left">
													   	<a href="#">
													        <img className="media-object settingsFriendImg" src={"/images/person1.jpg"}/>
													    </a>
													</div>
													<div className="media-body settingsFriendName">
													    <h5 className="media-heading">PeterRamos998</h5>
													    <h6><i className="fa fa-times"></i>Remove/ Block</h6>
													</div>
												</li>
											</ul>
											<ul className="col-sm-12 profileConnectionsList">
												<li>
													<div className="media-left">
													   	<a href="#">
													        <img className="media-object settingsFriendImg" src={"/images/girl3.jpg"}/>
													    </a>
													</div>
													<div className="media-body settingsFriendName">
													    <h5 className="media-heading">MyNameIsCoolMan</h5>
													    <h6><i className="fa fa-times"></i>Remove/ Block</h6>
													</div>
												</li>
												<li>
													<div className="media-left">
													   	<a href="#">
													        <img className="media-object settingsFriendImg" src={"/images/girl2.jpg"}/>
													    </a>
													</div>
													<div className="media-body settingsFriendName">
													    <h5 className="media-heading">JustinChang123</h5>
													    <h6><i className="fa fa-times"></i>Remove/ Block</h6>
													</div>
												</li>
												<li>
													<div className="media-left">
													   	<a href="#">
													        <img className="media-object settingsFriendImg" src={"/images/girl.jpg"}/>
													    </a>
													</div>
													<div className="media-body settingsFriendName">
													    <h5 className="media-heading">PeterRamos998</h5>
													   <h6><i className="fa fa-times"></i>Remove/ Block</h6>
													</div>
												</li>
											</ul>				
										</div>
								  	</div> 
								</div> 
							</div>	
						</div>
						<div role="tabpanel" className="tab-pane tabSettings fade" id="settings">
							<h2>Settings</h2>
						</div>
					</div> 
		        </div> 
			</div> 
		)
	}
});

module.exports = SettingsContainer;