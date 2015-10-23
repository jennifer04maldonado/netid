netid
=========

# Description

This document will contain the full implementation of netid. Currently this holds the roadmap laying out what technologies are being used and which are being built in order to have a staged release of netid. 

We are doing a staged release in alpha / beta format to test our platform and offer more user friendly interfaces to netid as the roadmap is completed. The Alpha release will have two version to its architecture that we are calling hosted nodes and local versions.  The hosted nodes version will work with mobile platforms.  The local version will be the preferred method for our users to test the alpha build since it is less centralized however it will require more technical understanding from the user. The hosted node will be an easier entry point to test until we build the webrtc beta version of netid. This map is tentative and items may be added or checked off over time. 


> **Not ready for prime time yet**

# Roadmap

- Alpha – Complete by 1/1/2016
  - [ ] [Hosted Nodes] reference docs.augur.net/#architecture
    - [ ] [Maintain ~five public Ethereum nodes.]
    - [ ] [* Maintain ~five public IPFS nodes] (We have one on the server atm)
    - [ ] [Load balance requests to the nodes to avoid congesting geth and ipfs client]
    - [ ] [Load balance requests to node server.]
    - [x] [Mongo DB User Auth](Researching blockchain ID)
    - [ ] [* Ethereum Javascript API (Node.js API)]
    - Peer Routing
      - [x] [node-ipfs-kad-router](https://github.com/diasdavid/node-ipfs-kad-router). [Discussion issue](https://github.com/ipfs/node-ipfs/issues/18).
        - discovery mechanisms
          - [x] [node-ipfs-mdns](https://github.com/diasdavid/node-ipfs-mdns) _mDNS-discovery_. [Discussion issue](https://github.com/ipfs/node-ipfs/issues/19).
          - [ ] [node-ipfs-random-walk](https://github.com/diasdavid/node-ipfs-random-walk). [Discussion issue](https://github.com/ipfs/node-ipfs/issues/20).
          - [x] [node-ipfs-railing](https://github.com/diasdavid/node-ipfs-railing) _Bootstrap-list_. [Discussion issue](https://github.com/ipfs/node-ipfs/issues/21).
      - [ ] mDNS-routing
    - [x] Swarm. 
      - Main repo [node-libp2p-swarm](https://github.com/diasdavid/node-libp2p-swarm). [Discussion issue](https://github.com/ipfs/node-ipfs/issues/22).
      - [x] Identify Protocol [identify](https://github.com/diasdavid/node-libp2p-swarm/tree/master/src/identify).
      - [x] [node-ipfs-ping](https://github.com/diasdavid/node-ipfs-ping).
      - [x] Connection Interface [abstract-connection](https://github.com/diasdavid/abstract-connection)
      - Transports
        - [x] Transport Interface [abstract-transport](https://github.com/diasdavid/abstract-transport)
        - [x] [libp2p-tcp](https://github.com/diasdavid/node-libp2p-tcp)
        - [ ] [libp2p-udp](https://github.com/diasdavid/node-libp2p-udp)
        - [ ] [libp2p-udt](https://github.com/diasdavid/node-libp2p-udt)
        - [ ] [libp2p-utp](https://github.com/diasdavid/node-libp2p-utp)
        - [ ] libp2p-webrtc
        - [ ] libp2p-cjdns
      - Upgrades
        - [ ] libp2p-tls
      - Stream Muxing
        - [x] [abstract-stream-muxer](https://github.com/diasdavid/abstract-stream-muxer).
        - [x] [node-spdy-stream-muxer](https://github.com/diasdavid/node-spdy-stream-muxer) _stream muxer_. [Discussion issue](https://github.com/ipfs/node-ipfs/issues/23).
        - [x] [libp2p-spdy](https://github.com/diasdavid/node-libp2p-spdy/blob/master/src/index.js) _stream muxer upgrade_
      - Protocol Muxing
        - [x] [node-multistream](https://github.com/diasdavid/node-multistream) _protocol muxer_. [Discussion issue](https://github.com/ipfs/node-ipfs/issues/24).
        - [x] [node-multistream](https://github.com/diasdavid/node-multistream).
    - [ ] Distributed Record Store. [Discussion issue](https://github.com/ipfs/node-ipfs/issues/25).
      - [x] [node-ipfs-record](https://github.com/diasdavid/node-ipfs-record) _record (needs MerkleDAG node)_.
      - [x] [node-ipfs-distributed-record-store](https://github.com/diasdavid/node-ipfs-distributed-record-store).
      - [x] [node-ipfs-kad-record-store](https://github.com/diasdavid/node-ipfs-kad-record-store) _implements abstract record store_.
      - [x] [abstract-record-store](https://github.com/diasdavid/abstract-record-store).
- Exchange
  - [ ] [node-bitswap](https://github.com/diasdavid/node-bitswap). [Discussion issue](https://github.com/ipfs/node-ipfs/issues/17).
- MerkleDAG
  - [x] MerkleDAG node implementation (needs IPLD).
    - [x] [node-ipld](https://github.com/diasdavid/node-ipld).
    - [x] [node-merkledag-store](https://github.com/diasdavid/node-merkledag-store).
- Supporting modules
  - [ ] [webcrypto](https://github.com/diasdavid/webcrypto). [Discussion issue](https://github.com/ipfs/node-ipfs/issues/27).
  - [x] [node-multihash](https://github.com/jbenet/node-multihash). [Discussion issue](https://github.com/ipfs/node-ipfs/issues/26).
  - [x] [node-multihashing](https://github.com/jbenet/node-multihashing). [Discussion issue](https://github.com/ipfs/node-ipfs/issues/26).
  - [x] [node-multiaddr](https://github.com/jbenet/node-multiaddr).
- Spec
  - [specs/19](https://github.com/ipfs/specs/pull/19).

