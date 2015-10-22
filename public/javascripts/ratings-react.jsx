var TabSection = React.createClass({

	render: function(){
		var allTransactions = this.props.transactions.map(function(transObject){
			var transId = transObject.persona_id;
			var transactionInfo = transObject.transactions;
			var mapInfo = transactionInfo.map(function(info){
				return (
					<div>
						<p>{info.date}</p>
						<span>{info.rating}</span>
					</div>
				)
			});
			return (
				<div>{mapInfo}</div>
			)
		});

		var tabs;
		if(this.props.social == true){
	         	tabs = (
	         		<div id="social_tab" className="tab-pane fade in active ratings_tab_info">
                        <div className="col-sm-3 ratings_list_holder">
                            <ul className="nav nav-stacked ratings_list">
                                <li><a href=".social_tab1" data-toggle="tab">Score</a></li>
                                <li><a href=".social_tab2" data-toggle="tab">Statistics</a></li>
                                <li><a href=".social_tab3" data-toggle="tab">Latest Transactions</a></li>
                                <li><a href=".social_tab4" data-toggle="tab">Dispute Summary</a></li>
                            </ul>
                        </div>
                        <div className="col-sm-9">
                            <div className="tab-content">
                                <div className="tab-pane social_tab1 col-sm-12">
                                    {this.props.soc_personas}
                                </div>
                                <div className="tab-pane social_tab2 col-sm-12">
                                    Social Tab 2
                                </div>
                                <div className="tab-pane social_tab3 col-sm-12">
                       	
                                </div>
                                <div className="tab-pane social_tab4 col-sm-12">
                                    Social Tab 4
                                </div>
                            </div>
                        </div>
                    </div>
	         	)
	    } else{
	     	tabs = (
	     		<div>
	     			<div id="prof_tab" style={{opacity:1}} className="tab-pane fade ratings_tab_info">
                        <div className="col-sm-3 ratings_list_holder">
                            <ul className="nav nav-stacked ratings_list">
                                <li><a href=".prof_tab1" data-toggle="tab">Score</a></li>
                                <li><a href=".prof_tab2" data-toggle="tab">Statistics</a></li>
                                <li><a href=".prof_tab3" data-toggle="tab">Latest Transactions</a></li>
                                <li><a href=".prof_tab4" data-toggle="tab">Dispute Summary</a></li>
                            </ul>
                        </div>
                        <div className="col-sm-9">
                            <div className="tab-content">
                                <div className="tab-pane prof_tab1 col-sm-12">
                                    Professional Tab 1
                                </div>
                                <div className="tab-pane prof_tab2 col-sm-12">	
                                    Professional Tab 2
                                </div>
                                <div className="tab-pane prof_tab3 col-sm-12">
                                    Professional Tab 3
                                </div>
                                <div className="tab-pane prof_tab4 col-sm-12">
                                    Professional Tab 4
                                </div>
                            </div>
                        </div>
                    </div>
	     		</div>
	     	)
	    }
	    return tabs;
	}
});

var SelectMenu = React.createClass({
	optionSelect: function(event){
		var optionValue = event.target.value;
		this.props.updateValue(optionValue);
	},
	render: function(){
		var options;
		if(this.props.social == true){
			options = this.props.soc_personas.map(function(persona){
				var name = persona.persona_name;
				var value = persona.persona_id;
				return (
					<option value={value}>{name}</option>
				)
			});
		}else {
			options = this.props.prof_personas.map(function(persona){
				var name = persona.persona_name;
				var value = persona.persona_id;
				return (
					<option value={value}>{name}</option>
				)
			});
		}
		return (
			<div className="col-sm-3 persona_selector">
				<select onChange={this.optionSelect} className="form-control">
					{options}
				</select>
			</div>
		)	
	}
});

var PersonaTabs = React.createClass({
	render: function(){
		var header = (
				<div className = "col-sm-12">
					<div className = "col-sm-5">
		 				Transaction Number
		 			</div>
		 			<div className = "col-sm-6">
		 				Transaction Date
		 			</div>
		 			<div className = "col-sm-1">
		 				Rating
		 			</div>
	 			</div>
		);
		var transArray = this.props.transactions;
		var option = this.props.option;
		var personaTransactions = transArray.map(function(personaTransObj){
			var transactionsMap;
			if(option == personaTransObj.persona_id){
				var personaTransArray = personaTransObj.transactions;
				var transactionMap = personaTransArray.map(function(singleTrans){
			 		return(

				 		<div className = "col-sm-12">
				 			<div className = "col-sm-5">
				 				{singleTrans.id}
				 			</div>
				 			<div className = "col-sm-6">
				 				{singleTrans.date}
				 			</div>
				 			<div className = "col-sm-1">
				 				{singleTrans.rating}
				 			</div>
				 		</div>
			 		)
			 	});
			}
			return <div className="col-sm-12 persona_trans">{transactionMap}</div>
		});
		
		return (
			<div className="col-md-12 col-sm-12 persona_info">
	            <div className="col-sm-3 ratings_list_holder">
	                <ul className="nav nav-stacked ratings_list">
	                    <li><a href=".persona_tab1" data-toggle="tab">Score</a></li>
	                    <li><a href=".persona_tab2" data-toggle="tab">Statistics</a></li>
	                    <li><a href=".persona_tab3" data-toggle="tab">Latest Transactions</a></li>
	                    <li><a href=".persona_tab4" data-toggle="tab">Dispute Summary</a></li>
	                </ul>
	            </div>
	            <div className="col-sm-9">
	                <div className="tab-content">
	                    <div className="tab-pane persona_tab1 col-sm-12 persona_stats">
	                        {this.props.option}
	                    </div>
	                    <div className="tab-pane persona_tab2 col-sm-12 persona_stats">
	                        Persona Tab 2
	                    </div>
	                    <div className="tab-pane persona_tab3 col-sm-12 persona_stats">
	                    	{header}
	                   		{personaTransactions}
	                    </div>
	                    <div className="tab-pane persona_tab4 col-sm-12 persona_stats">
	                        Persona Tab 4
	                    </div>
	                </div>
	            </div>
        	</div>
		)
	}
});

var App = React.createClass({	
	updateValue: function(optionValue){
		this.setState({
			option: optionValue
		})
	},
 	getInitialState: function(){
        return {
            soc_personas : soc_personas,
            prof_personas: prof_personas,
            transactions: soc_transactions,
            social: true,
            option: 0
        }
    },
    changeSocial: function(){
        this.setState({social: true});
        this.setState({transactions: soc_transactions});

    },
    changeProf: function(){
        this.setState({social: false});
        this.setState({transactions: prof_transactions});
    },
    render: function(){
        return(
                <div className="col-sm-9">
                     <ul className="nav nav-tabs ratings_tabs">
                    	<li onClick={this.changeSocial} className="social_tab_link"><a data-toggle="tab" href="#social_tab">Social</a></li>
                    	<li onClick={this.changeProf} className="prof_tab_link"><a data-toggle="tab" href="#prof_tab">Professional</a></li>
                	</ul>
                	<div className="tab-content ratings_custom_width">
                		<TabSection 
                			soc_personas={this.state.soc_personas} 
                			social={this.state.social} 
                			transactions = {this.state.transactions} />
                	</div>
                    
                    <SelectMenu value={this.state.option} 
                    	social={this.state.social} 
                    	prof_personas={this.state.prof_personas} 
                    	soc_personas={this.state.soc_personas} 
                    	updateValue={this.updateValue} />
                	
                	<PersonaTabs 
                		option = {this.state.option} 
                		transactions = {this.state.transactions} />
                </div>
        )
    }
});
var node = document.getElementById('rating_tabs_react');
React.render(<App />, node); 