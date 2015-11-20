var React = require('react');

//INPUT: DATA OBJECT FROM INDIVIDUALCOMMVIEW.JSX
//OUTPUT: POST PANEL FOR EACH COMMUNITY THAT WILL KNOW THE COMMUNITY ID
let PostPanel = React.createClass({
	render: function(){
		return(
			<div className="row">
				<div className="col-sm-12 commTextField">
					<div className="col-sm-12 commPostField">
						<form action="">
							<textarea placeholder="Post to all of your Communities" rows="6"></textarea>
						</form>
					</div>
					<div className="col-sm-12 commPostBtn">
						<div className="col-sm-12 btn">Post</div>
					</div>
				</div>
			</div>
		)
	}
});

module.exports = PostPanel;