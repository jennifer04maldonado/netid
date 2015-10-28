![alt text](http://cdn.mysitemyway.com/etc-mysitemyway/icons/legacy-previews/icons-256/magic-marker-icons-symbols-shapes/116319-magic-marker-icon-symbols-shapes-shapes-hexagon.png "test") &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Netid
=========

# Description

This repo will contain the full implementation of netid. Currently this holds the roadmap laying out what technologies are being used and which are being built in order to have a staged release of netid. 

We are doing a staged release to test our platform and offer more user friendly interfaces to netid as the roadmap is completed. The Alpha version will require users to install IPFS and run a Geth node in order to use the site.  The local version will be the preferred method for our users to test the alpha build since it is less centralized however it will require more technical understanding from the user. This map is tentative and items may be added or checked off over time. 

- [ ] = Not Built.

- [ ] * = Built but needs testing or some refactors.

- [x] = Completed


> **Not ready for prime time yet**

# Roadmap

- <h3><b>Alpha: Target Date 1/1/2016</b></h3>
  - [ ] <b>Local Nodes</b> -revising, may do local only due to ipfs and data security - [Discussion issue] (https://github.com/dmcnetid/netid/issues/4)
    - [ ] <strike>Maintain ~five public Ethereum nodes.</strike>
    - [ ] * <strike>Maintain ~five public IPFS nodes </strike> - Hosting these nodes would put us in control of user's data, scratch this
    - [x] Mongo DB User Auth - Researching Blockchain ID
    - [ ] IPNS Key Store - [Discussion] (https://github.com/ipfs/specs/tree/master/keystore)
    - [ ] * Ethereum Javascript API (Node.js API)
    - [ ] * IPFS Javascript API (Node.js API built into react components)
    - [ ] * Data schema definitions
    - [ ] * Ratings Smart Contract
    - [ ] Advertising Smart Contract
    - Design
      - [ ] Design Graphic - [view designs](https://github.com/dmcnetid/netid-graphics)
      - [ ] * Design UI/UX - CSS/HTML/Javascript
        - [ ] * Design UI/UX - subtask
    - [ ] [* Server Architecture] (http://docs.augur.net/#architecture)
      - [ ] <strike>Load balance requests to the nodes to avoid congesting geth and ipfs client</strike>
      - [ ] Load balance requests to node server.
    - [ ] [Chat - webrtc](https://temasys.github.io/how-to/2014/09/02/Building_A_Simple_P2P_chat_with_WebRTC/)
    - [ ] Trusted Source - Or some gateway
    - [ ]	* Wallet Integration - Built but needs UI
    - [ ] * Searching - Researching DHT broadcasting 
    - [X] Wall feed 
    - [ ] User Auth - Blockchain and IPNS are possible
- <h3><b>Beta: Target Date - </b></h3>
  - [ ] <b>Remove local clients and build into the browser (WebRTC as the transport layer)</b>
    - [ ] Load balance requests to node server for static file hosting
    - [ ] [Node IPFS Implementation](https://github.com/ipfs/node-ipfs)
    - [ ] [Ethereum Web Implementation](https://github.com/mappum/webcoin)
- <h3><b>Final Release</b></h3> 
  - [ ] <b>Everything is built, new features over time</b>
    - [ ] Testing


