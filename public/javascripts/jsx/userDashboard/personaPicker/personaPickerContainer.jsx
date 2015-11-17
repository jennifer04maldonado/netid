var React = require('react');

var PersonaPicker = React.createClass({

    render: function(){
        var defaultAvatar = '../images/avatar.png';
        var style = {
            marginRight: '15px'
        };

        var name;
        if (this.props.activePersona) {
            name = this.props.activePersona.persona_name;
        }

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
                                <a href="#"><li style={style}><i className="fa fa-users"></i><span>A</span>ccount History</li></a>
                                <a href="#"><li style={style}><i className="fa fa-users"></i><span>C</span>ommunities</li></a>
                                <a href="#"><li><i className="fa fa-envelope-o"></i><span>M</span>essages</li></a>
                            </ul>
                        </div>    
                    </div>
            </div>
        )

    }
});

module.exports = PersonaPicker;

   