

var MasterSettings = React.createClass({

	render: function(){
       	var image = '/images/target.jpeg';
       	var title = 'Master Settings';
        return(
			<div id='masterSettingsContainer'>
				<img src={image} title={title}/>
			</div>
		)
	}
});


module.exports = MasterSettings;
