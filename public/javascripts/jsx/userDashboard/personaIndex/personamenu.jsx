//INPUT: SOCIAL PERSONA LIST FROM AJAX CALL PASSED DOWN TO PARENT
//OUTPUT: LINKS FOR EACH PERSONA IN SINGLEPERSONAHEADER
var React = require('react');

var PersonaMenu = React.createClass({
	render: function(){
		return(
	        <div className="panel-body">
	           <div className="col-sm-4 col-sm-offset-5 ctrlPanel">
	              	<span>
	               		<a>Communities</a>
	               		<span></span>
               		</span>
	               	<span>
	               		<a>Transactions</a>
	               		<span></span>
               		</span>
	               	<span>
	               		<a>Messages</a>
	               		<span></span>
               		</span>
	               	<span>
	               		<a>Friends</a>
	               		<span></span>
               		</span>
	           </div>
	        </div>
		)
	}
});

module.exports = PersonaMenu;