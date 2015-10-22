# netid
Description
  This document will contain the full implementation of netid. Currently this holds the roadmap laying out what technologies are being used and which are being built in order to have a staged release of netid. 
We are doing a staged release in alpha / beta format to test our platform and offer more user friendly interfaces to netid as the roadmap is completed. The Alpha release will have two version to its architecture that we are calling hosted nodes and local versions.  The hosted nodes version will work with mobile platforms.  The local version will be the preferred method for our users to test the alpha build since it is less centralized however it will require more technical understanding from the user. The hosted node will be an easier entry point to test until we build the webrtc beta version of netid. This map is tentative and items may be added or checked off over time. 

*= Built but needs testing or some refactors

X= Completed

Roadmap
•	Alpha – Complete by 1/1/2016
  o	Hosted Nodes – reference docs.augur.net/#architecture
    [ ] Maintain ~five public Ethereum nodes.
    [x]* Maintain ~five public IPFS nodes (We have one on the server atm)
	Load balance requests to the nodes to avoid congesting geth and ipfs client
	Load balance requests to node server.
	* Mongo DB User Auth (Needs to be installed on dev server and everyone’s test env, also testing)
	* Ethereum Javascript API (Node.js API) (Ready to be connected We need to develop what method we can use to have the five geth clients we host make tx’s on behalf of the client, look at client.augur.net – needs testing)
	* IPFS Javascript API (Node.js API) (Already in middleware, just commented out until everyone can run an ipfs node to test. Server does have IPFS – needs testing)
	* Data schema (we have some user objects built out but we really need to get this right early on in defining our data)
	* Ratings Smart Contract (Josh is working on this, needs to use the API bindings I built to get it running in the platform, testing)
	* Advertising Smart Contract (Began writing pseudocode. This needs a lot of work to get right.  I have a plan to layout the contract.)
	Design Graphic – Again these should really be links on our wiki or private github to expand to further subtasks
	* Design UX - CSS/HTML/Javascript (This has been planned, I am not familiar with the details, subpage is needed for this)
	* Server Architecture (Node.js server with Express framework and IPFS and Ethereum API middleware hosting all of the Graphics and Frontend design. We need to update our server architecture in the wiki to reflect the API and load balancing user requests to IPFS and Ethereum)
	* User Auth (Server has hard coded, Mongo, and OAuth currently built in and commented out until everyone gets their developer computers set up right. We can use any method of login we would like until p2p login can be built in later versions of netid). 
	Chat (Have ideas of using completely p2p messaging with XMPP. We need to consider regular server side storage for this version of release and completely p2p storage for the client release in alpha with encryption.)
	Trusted Source (Some gateway for letting people in)
	* Wallet Integration (Use API to send via federated 5 eth nodes, still needs front end for this)
	* Searching (Plan out how to integrate the switch between data being on a user’s node to a node that can be searched publicly, I have discussed ways of indexing all content in ipfs via DHT provider broadcasts, this could be an interesting implementation in beta or full release.)
	* Wall feed (Built, needs testing and IPNS improvements. Also work on getting the 5 servers to post new entries for users)
o	Local Version (Many things will be listed twice and are the same task as the Hosted version, some things differ)
	Load balance requests to node server.
	MongoDB (May not be needed at all with IPNS, if it is it is only for user Auth)
	* Ethereum Javascript API (same as hosted, can move more to client side now too)
	* IPFS Javascript API (Same as hosted, more client options again)
	* Data schema (same as hosted)
	* Ratings Smart Contract (same as hosted)
	* Advertising Smart Contract (same as hosted)
	Design Graphic – (same as hosted)
	* Design UX - CSS/HTML/Javascript (same as hosted)
	* Server Architecture (Node.js server with Express framework only to server static content to the user. IPFS database API and Ethereum API will be start to move to the client side. I have already built all of the connections needed for this. )
	* User Auth (We have the potential of using IPNS to auth users when they are all running their own node). 
	X Wallet Integration (I already built this)
	* Searching (same as hosted)
	* Wall feed (This version already is built and works)
•	Beta – Complete by ( )
o	One version (Many things will be reused from Alpha build, not listed)
	Load balance requests to node server
	Node IPFS Implementation
•	See https://github.com/ipfs/node-ipfs
	Ethereum Web Integration
•	See webcoin
•	Final release – Complete by ( )
o	Everything is built, new features over time
	Testing



