var React = require('react');

var PersonaPicker = React.createClass({

    setActiveBody: function(selectedValue, event){
        console.log('selected: ' + selectedValue);
        console.log('event: ' + event);
        this.props.setActiveBody(selectedValue);
    },

    render: function(){
        
        var defaultAvatar = '../images/avatar.png';
        var style = {
            marginRight: '15px'
        };

        return (
            <div className="col-sm-12 personaPicker">
                    <div className="row col-sm-6 personaPickerLeft">
                        <div className="col-sm-1 personaActiveImage">
                                <div className="personaImage">
                                    <img src={this.props.activePersona ? this.props.activePersona.image : defaultAvatar}/>
                                </div>
                        </div>
                        <div className="col-sm-1 moon">
                            
                        </div>
                        <div>
                            <h3>
                                <span className='panel-title'> {this.props.activePersona ? this.props.activePersona.persona_name : 'name'} :</span>
                                <span className='panel-title'> {this.props.activePersona ? this.props.activePersona.description : 'description'} </span>
                            </h3>
                        </div>
                    </div>
                    <div className="row col-sm-6 personaPickerRight">
                        <div className="personaNavOptions">
                            <ul>
                                <a href="#" onClick={this.setActiveBody.bind(this, 'home')}>
                                    <li><i className="fa fa-arrows-h"></i>Home</li>
                                </a>
                                <a href="#" onClick={this.setActiveBody.bind(this, 'interactions')}>
                                    <li><i className="fa fa-arrows-h"></i>Interactions</li>
                                </a>
                                <a href="#" onClick={this.setActiveBody.bind(this, 'communities')}>
                                    <li><i className="fa fa-users"></i>Communities</li>
                                </a>
                                <a href="#" onClick={this.setActiveBody.bind(this, 'messages')}>
                                    <li><i className="fa fa-envelope-o"></i>Messages</li>
                                </a>
                            </ul>
                        </div>    
                    </div>
            </div>
        )

    }
});

module.exports = PersonaPicker;

   