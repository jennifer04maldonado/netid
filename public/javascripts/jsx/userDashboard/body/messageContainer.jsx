

var MessageContainer = React.createClass({
	render: function(){
		return(
			<div className="col-sm-12 messageContent">
				<div className="col-sm-12 msgTitle">
					<h4><i className="fa fa-envelope"></i>Messages</h4>
				</div>
				<div className="col-sm-12 msgPersonaIndex">
					<div className="col-sm-3 msgLeftList">
						<input type="text" className="form-control" placeholder="Search"></input>
						<div className="list-group">
						    <a href="#" className="list-group-item"><span className="badge">1</span><img src={"/images/girl2.jpg"}/><span className="personaName">NatetheGreat</span></a>
						    <a href="#" className="list-group-item"><span className="badge">2</span><img src={"/images/girl3.jpg"}/><span className="personaName">JensoCool</span></a>
						    <a href="#" className="list-group-item active"><img src={"/images/girl.jpg"}/><span className="personaName">PersonaAwesome</span></a>
						    <a href="#" className="list-group-item"><img src={"/images/kim.jpg"}/><span className="personaName">JamesCameron123</span></a>
						    <a href="#" className="list-group-item"><span className="badge">1</span><img src={"/images/jenn.jpeg"}/><span className="personaName">ThisIsaPersona</span></a>
						</div>
					</div>	
					<div className="col-sm-9 msgRightContent">
						<p className="messageTitle">PersonaAwesome</p>
						<div className="list-group">
						    <a href="#" className="list-group-item">
							    <span className="time">12:01 pm</span>
							    <img src={"/images/ein.jpeg"}/>
							    <span className="personaName">NatetheGreat</span>
							    <p className="col-sm-offset-1">Tiled say decay spoil now walls meant house. My mr interest thoughts screened of outweigh removing. Evening society musical besides inhabit ye my. Lose hill well up will he over on. Increasing sufficient everything men him admiration unpleasing. Around really his use uneasy longer him man. His our pulled nature elinor talked now for excuse result. Admitted add peculiar get joy doubtful. </p>
						    </a>
						    <a href="#" className="list-group-item">
							    <span className="time">12:23 pm</span>
							    <img src={"/images/girl.jpg"}/>
							    <span className="personaNameMsg">PersonaAwesome</span>
							    <p className="col-sm-offset-1">Um, okay.</p>
						    </a>
						    <a href="#" className="list-group-item">
							    <span className="time">1:44 pm</span>
							    <img src={"/images/ein.jpeg"}/>
							    <span className="personaName">NatetheGreat</span>
							    <p className="col-sm-offset-1">Evening society musical besides inhabit ye my. Lose hill well up will he over on. Increasing sufficient everything men him admiration unpleasing. Around really his use uneasy longer him man. His our pulled nature elinor talked now for excuse result. Admitted add peculiar get joy doubtful. </p>
						    </a>
						    <a href="#" className="list-group-item">
							    <span className="time">1:49 pm</span>
							    <img src={"/images/girl.jpg"}/>
							    <span className="personaNameMsg">PersonaAwesome</span>
							    <p className="col-sm-offset-1">dude youre not making sense </p>
						    </a>
						    <a href="#" className="list-group-item">
							    <span className="time">3:03 pm</span>
							    <img src={"/images/ein.jpeg"}/>
							    <span className="personaName">NatetheGreat</span>
							    <p className="col-sm-offset-1">Ok nevermind.</p>
						    </a>
						</div>
						<form>
							<input type="text" className="form-control msgTextField" placeholder="Post something here"></input>
							<button className="btn msgTextBtn"><i className="fa fa-paper-plane"></i></button>
						</form>
					</div>
				</div>	
			</div>
		)
	}
});

module.exports = MessageContainer;
