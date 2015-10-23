netid
=========

# Description

This document will contain the full implementation of netid. Currently this holds the roadmap laying out what technologies are being used and which are being built in order to have a staged release of netid. 

We are doing a staged release in alpha / beta format to test our platform and offer more user friendly interfaces to netid as the roadmap is completed. The Alpha release will have two version to its architecture that we are calling hosted nodes and local versions.  The hosted nodes version will work with mobile platforms.  The local version will be the preferred method for our users to test the alpha build since it is less centralized however it will require more technical understanding from the user. The hosted node will be an easier entry point to test until we build the webrtc beta version of netid. This map is tentative and items may be added or checked off over time. 

*= Built but needs testing or some refactors

X= Completed


> **Not ready for prime time yet**

# Roadmap

- Alpha – Complete by 1/1/2016
  - [ ] <b>Hosted Nodes</b> - reference docs.augur.net/#architecture - [Discussion issue] (https://github.com/ipfs/node-ipfs/issues/19)
    - [ ] Maintain ~five public Ethereum nodes.
    - [ ] * Maintain ~five public IPFS nodes - We have one on the server atm
    - [ ] Load balance requests to the nodes to avoid congesting geth and ipfs client
    - [ ] Load balance requests to node server.
    - [x] Mongo DB User Auth - Researching Blockchain ID
    - [ ] * Ethereum Javascript API (Node.js API)
    - [ ] * IPFS Javascript API (Node.js API)
    - [ ] * Data schema definitions
    - [ ] * Ratings Smart Contract
    - [ ] Advertising Smart Contract
    - Design
      - [ ] Design Graphic
      - [ ] * Design UI/UX - CSS/HTML/Javascript
        - [ ] * Design UI/UX - subtask
    - [ ] [* Server Architecture] (http://docs.augur.net/#architecture)
    - [ ] [Chat - webrtc](https://temasys.github.io/how-to/2014/09/02/Building_A_Simple_P2P_chat_with_WebRTC/)
    - [ ] Trusted Source - Or some gateway
    - [ ]	* Wallet Integration
    - [ ] * Searching - Researching DHT broadcasting 
    - [X] Wall feed 
  - [ ] <b>Local Nodes</b> (Many things will be listed twice and are the same task as the Hosted version, some things differ)
    - [ ] Load balance requests to node server.
    - [ ] Ethereum Javascript API (same as hosted, can move more to client side now too)
    - [ ] IPFS Javascript API (Same as hosted, more client options again)
    - [ ] Data schema (same as hosted)
    - [ ] 
      

