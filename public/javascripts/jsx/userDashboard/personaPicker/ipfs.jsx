
var React = require('react');
//var hash = 'QmWwWWE2HuaNjg5CBy9FwuAUC9k5UXT6e9CSjqWbzY3fgw';
/*var ipfs_api = require('ipfs-api');
var ipfs = ipfs_api('localhost', '5001');
*/
var IPFSApp = React.createClass({

	render: function(){

/*		ipfs.cat(hash, function(err, res) {
		    if(err || !res) return console.error("ipfs cat error", err, res);
		    if(res.readable) {
		      console.error('unhandled: cat result is a pipe', res);
		    } else {
		    	console.log('ipfs content: ' + res);
		    }
		});
*/		
		return(
			<div className='bodyContent'>

			</div>
		)
	}
});

module.exports = IPFSApp;
