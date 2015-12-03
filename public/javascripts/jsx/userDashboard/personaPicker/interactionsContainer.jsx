

var InteractionsContainer = React.createClass({

	getInitialState: function() {
		return {
			interactionsData: {
				"id":"",
				"interactions":[
					{
						"address" : " ",
						"status" : " ",
						"chatAddress":" "
					}
				]
			}
		}
	},	
 
	componentWillReceiveProps: function(nextProps) {
			this.componentDidMount();
	},
	
	componentDidMount: function() {
		var caughtData = false;
		$.get('.././json_files/interactionsSchema.json', function(result) {
			if (this.isMounted()){
				for (var i in result){
					if(result[i].id === this.props.activePersona.id) {
						caughtData = true;
						this.setState({interactionsData: result[i]});
					}
				}
				if(caughtData == false){
					var emptyState = this.getInitialState().interactionsData;
					this.setState({interactionsData: emptyState});
				}
			}
	   	}.bind(this));
	},

	createInteraction: function() {
		//instantiate web3 object 
		var web3 = new Web3();
		web3.setProvider(new web3.providers.HttpProvider());
		//example api code
		// var coinbase = web3.eth.coinbase;
		// var balance = web3.eth.getBalance(coinbase);
		// console.log(balance);
		// web3.eth.getBlock(48, function(error, result){
		//     if(!error)
		//         console.log(result)
		//     else
		//         console.error(error);
		// })
		
		//set the account from a selector replace 1 with a variable
		var thisAccount = web3.eth.accounts[1];

		//create interaction
		var interactionsContract = web3.eth.contract([{"constant":true,"inputs":[],"name":"disputed","outputs":[{"name":"","type":"bool"}],"type":"function"},{"constant":true,"inputs":[],"name":"initiatorRating","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[],"name":"setToFinal","outputs":[],"type":"function"},{"constant":true,"inputs":[],"name":"responderConf","outputs":[{"name":"","type":"bool"}],"type":"function"},{"constant":true,"inputs":[],"name":"responder","outputs":[{"name":"","type":"address"}],"type":"function"},{"constant":false,"inputs":[],"name":"confirmRating","outputs":[],"type":"function"},{"constant":true,"inputs":[],"name":"responderRating","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[],"name":"dataHash2","outputs":[{"name":"","type":"string"}],"type":"function"},{"constant":true,"inputs":[],"name":"respRated","outputs":[{"name":"","type":"bool"}],"type":"function"},{"constant":true,"inputs":[],"name":"rateCount","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[],"name":"initiator","outputs":[{"name":"","type":"address"}],"type":"function"},{"constant":true,"inputs":[],"name":"disputer","outputs":[{"name":"","type":"address"}],"type":"function"},{"constant":true,"inputs":[],"name":"initRated","outputs":[{"name":"","type":"bool"}],"type":"function"},{"constant":true,"inputs":[],"name":"dataHash1","outputs":[{"name":"","type":"string"}],"type":"function"},{"constant":true,"inputs":[],"name":"initiatorConf","outputs":[{"name":"","type":"bool"}],"type":"function"},{"constant":true,"inputs":[],"name":"state","outputs":[{"name":"","type":"uint8"}],"type":"function"},{"constant":false,"inputs":[],"name":"confirmInvite","outputs":[],"type":"function"},{"constant":false,"inputs":[],"name":"cancelInvite","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"firstPart","type":"string"},{"name":"secondPart","type":"string"}],"name":"setHash","outputs":[],"type":"function"},{"constant":false,"inputs":[{"name":"rating","type":"uint256"}],"name":"rate","outputs":[],"type":"function"},{"constant":false,"inputs":[],"name":"dispute","outputs":[],"type":"function"},{"inputs":[],"type":"constructor"}]);
		var interactions = interactionsContract.new(
		   {
		     from: thisAccount,
		     data: '60606040525b33600060006101000a81548173ffffffffffffffffffffffffffffffffffffffff0219169083021790555060006007600050819055506000600860026101000a81548160ff021916908302179055505b610fee806100636000396000f360606040523615610119576000357c0100000000000000000000000000000000000000000000000000000000900480630695c46c1461011b5780630cf6bc251461013e5780631027b20c146101615780631dcc50a11461017057806325efc91d146101935780633d29a3d2146101cc5780634052342f146101db5780635199bdad146101fe57806357372bde146102795780635a95cf491461029c5780635c39fcc1146102bf5780636ac56103146102f8578063763125e71461033157806398dae05614610354578063b8ace704146103cf578063c19d93fb146103f2578063cfe1c36814610415578063d3a17ff714610424578063e15fe02314610433578063e7ee6ad6146104d0578063f240f7c3146104e857610119565b005b6101286004805050610fa2565b6040518082815260200191505060405180910390f35b61014b6004805050610f61565b6040518082815260200191505060405180910390f35b61016e60048050506109a5565b005b61017d6004805050610f8f565b6040518082815260200191505060405180910390f35b6101a06004805050610dd3565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6101d96004805050610a00565b005b6101e86004805050610f6a565b6040518082815260200191505060405180910390f35b61020b6004805050610ec0565b60405180806020018281038252838181518152602001915080519060200190808383829060006004602084601f0104600f02600301f150905090810190601f16801561026b5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6102866004805050610fc8565b6040518082815260200191505060405180910390f35b6102a96004805050610f73565b6040518082815260200191505060405180910390f35b6102cc6004805050610dad565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6103056004805050610df9565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b61033e6004805050610fb5565b6040518082815260200191505060405180910390f35b6103616004805050610e1f565b60405180806020018281038252838181518152602001915080519060200190808383829060006004602084601f0104600f02600301f150905090810190601f1680156103c15780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6103dc6004805050610f7c565b6040518082815260200191505060405180910390f35b6103ff6004805050610fdb565b6040518082815260200191505060405180910390f35b61042260048050506105a9565b005b61043160048050506104f7565b005b6104ce6004808035906020019082018035906020019191908080601f016020809104026020016040519081016040528093929190818152602001838380828437820191505050505050909091908035906020019082018035906020019191908080601f016020809104026020016040519081016040528093929190818152602001838380828437820191505050505050909091905050610c30565b005b6104e6600480803590602001909190505061060e565b005b6104f560048050506107f2565b005b6000600860059054906101000a900460ff1614151561051557610002565b600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614156105a657600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16ff5b5b565b6000600860059054906101000a900460ff161415156105c757610002565b33600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908302179055506001600860056101000a81548160ff021916908302179055505b565b6001600860059054906101000a900460ff1614158061063d57506003600860059054906101000a900460ff1614155b1561064757610002565b600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161480156106b357506000600860039054906101000a900460ff16145b1561071c578060066000508190555060076000818150548092919060010191905055506001600860036101000a81548160ff0219169083021790555060026007600050541415610717576002600860056101000a81548160ff021916908302179055505b6107ee565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614801561078857506000600860049054906101000a900460ff16145b156107ed578060056000508190555060076000818150548092919060010191905055506001600860046101000a81548160ff02191690830217905550600260076000505414156107ec576002600860056101000a81548160ff021916908302179055505b5b5b5b50565b600060006002600860059054906101000a900460ff1614151561081457610002565b6001600860029054906101000a900460ff16141561083157610002565b33600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908302179055506003600860056101000a81548160ff021916908302179055506001600860026101000a81548160ff0219169083021790555060405180807f736574546f46696e616c28290000000000000000000000000000000000000000815260200150600c01905060405180910390207c010000000000000000000000000000000000000000000000000000000080910402915061168043019050600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166301991313308484604051847c0100000000000000000000000000000000000000000000000000000000028152600401808473ffffffffffffffffffffffffffffffffffffffff16815260200183815260200182815260200193505050506000604051808303816000876161da5a03f192505050505b5050565b6003600860059054906101000a900460ff161415156109c357610002565b600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16ff5b565b6002600860059054906101000a900460ff16141580610a2f57506003600860059054906101000a900460ff1614155b15610a3957610002565b600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415610aa9576001600860006101000a81548160ff021916908302179055505b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415610b19576001600860016101000a81548160ff021916908302179055505b600860019054906101000a900460ff168015610b415750600860009054906101000a900460ff165b15610b8157600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16ff5b6003600860059054906101000a900460ff16148015610bed5750600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b15610c2d57600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16ff5b5b565b6004600860059054906101000a900460ff16141515610c4e57610002565b8160036000509080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10610c9d57805160ff1916838001178555610cce565b82800160010185558215610cce579182015b82811115610ccd578251826000505591602001919060010190610caf565b5b509050610cf99190610cdb565b80821115610cf55760008181506000905550600101610cdb565b5090565b50508060046000509080519060200190828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10610d4a57805160ff1916838001178555610d7b565b82800160010185558215610d7b579182015b82811115610d7a578251826000505591602001919060010190610d5c565b5b509050610da69190610d88565b80821115610da25760008181506000905550600101610d88565b5090565b50505b5050565b600060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60036000508054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610eb85780601f10610e8d57610100808354040283529160200191610eb8565b820191906000526020600020905b815481529060010190602001808311610e9b57829003601f168201915b505050505081565b60046000508054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610f595780601f10610f2e57610100808354040283529160200191610f59565b820191906000526020600020905b815481529060010190602001808311610f3c57829003601f168201915b505050505081565b60056000505481565b60066000505481565b60076000505481565b600860009054906101000a900460ff1681565b600860019054906101000a900460ff1681565b600860029054906101000a900460ff1681565b600860039054906101000a900460ff1681565b600860049054906101000a900460ff1681565b600860059054906101000a900460ff168156', 
		     gas: 3000000
		   }, function(e, contract){
		    console.log(e, contract);
		    if (typeof contract.address != 'undefined') {
		        console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
		        //send transaction to receiving CMC contract notify of invitation
		        var cmcContract = 'someABI';
				var cmcInstance = cmcContract.at(this.ref.form.responderContractAddy);
				var pendingInter = true;
				cmcInstance.setInvite(contract.address, pendingInter, {from: thisAccount, gas: 70000});
		    }
 		});
	},


	render: function(){
		var rows = [];
		var cssClass = "";
		this.state.interactionsData.interactions.forEach(function(interaction, index) {
			switch (interaction.status){
				case "accept":	cssClass = "btn btn-success interactionsButton";
					break;
				case "rate":	cssClass = "btn btn-info interactionsButton";
					break;
				case "dispute": cssClass = "btn btn-warning interactionsButtons";
					break;
				default: cssClass = "btn btn-default interactionsButton";
			}
			rows.push(
				<tr key={index}>
					<td>{interaction.address}</td>
					<td><a href="#"><i className="fa fa-commenting chatTransactionIcon"></i></a></td>
					<td className={cssClass}>{interaction.status}</td>
				</tr>
			);
		});
		
		return(
			<div className='bodyContent'>
				<div className="row col-sm-10 col-sm-offset-1 interactionsContainer">
	                <div className="row">
	                	<h3>Interactions</h3>
	                    <button data-toggle="collapse" data-target="#addInterDiv" className="btn"><i className="fa fa-plus-circle"></i>Create New Interaction</button>
	                    <div id='addInterDiv' className='collapse well col-sm-12 '>
		                    <form action="" ref = "form">
		                    	<textarea className="col-sm-12 etherAddress" placeholder="Ether Address" maxLength="40" rows="1" id="responderContractAddy"></textarea>
								<textarea className="col-sm-12 parametersOfInteraction" placeholder="Parameters of Interaction" rows="3"></textarea>
							    <button type="submit" className="btn btn-default" onClick={this.createInteraction}>Submit</button>
							</form> 
						</div>	
                	</div>
				<div className="row col-sm-12 panel panel-default">
		            <table className="table table-striped">
		            	<thead>
					      	<tr>
						        <th>Transactions</th>
						        <th>Chat</th>
						        <th>Status</th>
					      	</tr>
					   </thead>
					   <tbody>
					      	{rows}
					    </tbody>
		            </table>
				</div>
        	</div>
        </div>
		)
	}
});

module.exports = InteractionsContainer;
