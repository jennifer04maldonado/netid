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

# Features List
<b>**(Bold font defines content. rest are links)</b>

<h3><b>Features on dashboard page:</b></h3>
    news feed (per persona)
    list all personas on side (per netid account)
    edit, delete, add personas
    view online connections
    ability to answer a question per day
    search
    ability to post
    messages link
    transactions link
    ratings link
    disputes link
    create community link
    header & footer (static)

<h3><b>Transactions page:</b></h3>
    Ability to create transaction
    Ability to view history of transactions
    All the links from header & footer will exist

<h3><b>Ratings page:</b></h3>
    Master rating
    Category ratings
    Ratings stats
    if (connected) { view persona score && view master score} else if(!connected) { view only persona score}
    All the links from header & footer will exist

<h3><b>Explore communities page:</b></h3>
    Ability to create community
    view suggested communities
    search for communities
    popularity on communities (technical requirement)
    All the links from header & footer will exist

<h3><b>View community page:</b></h3>
    community feed
    calendar (maybe ability to add events)
    All the links from header & footer will exist

<h3><b>View someone else persona:</b></h3>
    the other person’s score
    their profile picture
    description of their persona
    all the fields that the user agrees to share
    will display master & persona ratings
    create a transaction with that persona link
    All the links from header & footer will exist

<h3><b>Connections page:</b></h3>
    will have a link to your persona connections under “persona bar”
    will have blocking/disconnecting feature
    simple box layout to view the friends list

Advertise portal: TBA

<h3><b>Start up page:</b></h3> 
    tutorial with getting more information
    after sign up take them to selecting social / professional persona
    after selecting a persona category, ask few informative question for displaying communities
    step 3 displays communities based on the selection


<h3><b>Create communities page:</b></h3>
    will have a option to select a category to represent your community( maybe keywords)
    set communities as public/private/secret
    title for community
    maybe set admin or community based admin(s)

Trusted Sources: TBA

#Tasks

<b>Dash1</b>:  I want the ability to post from any persona  and the ability to view community feeds.

Priority: <b>High</b>

Description:

    When a user clicks on his persona, there should be a place for him to post to community. They will also be able to see aggregated feed of all the communities for which the persona is connected with. 

Acceptance criteria:

    1)  The content view should be updated to show empty post field, with a drop down of all the communities and a submit/post button
    2)  Underneath that you should be able to see see all of the community posts for which the persona is subscribed to
    3)  The feed itself will be clickable which will take you to that community’s page and anchor to the post
    4)  There should be a time and date stamp in each post
    5)  There should be a comments button which will display comments underneath the post in reference
    6)  Inside the comments view, we should be able to add/post comment
    7)  Feed view should be paginated to allow faster load times
    8)  In each feed post, the community name is clickable. the person who posted isn’t clickable
Jenn: 3 days  | Shawn: 1 week | Scott: 1 week | Nathan: 1 week
=========

<b>Dash2</b>: I want the ability to create, delete, and edit personas on left navigation bar

Priority: <b>High</b>

Description:

    When a repeat user signs-in. they are presented with the dashboard. On the left will display his personas that he has created, along with the functionality to add new persona and delete or edit already created personas

Acceptance criteria:

    1)  Left bar will have a add persona button
    2)  Left bar will have clickable personas which will update the content section of dashboard to display persona picture, name few other details and that persona’s posts
    3)  When clicked on add persona, the user should see add persona page displayed where he can create a new persona
    4)  When user clicks on a persona, the connected list will update to represent the persona along with connected friends, offers div will update as well( story to be created in Ads module)
    5)  Hyperlinks in each personas include: communities, transactions, etc. ( will be created in their own stories)
    6)  Ability to set default persona, so when user logs in they will be taken to that persona

Jennifer: 3 days  | Shawn: 5 days | Scott: 5 days | Nathan: 5 days
=========

<b>Dash3</b>: I want the ability to view my online connected friends

Priority: <b>High</b>

Description: 

    This story is for the user to see online friends in each persona so they can quickly communicate without having to dig through the connected friends list

Acceptance criteria:

    1)  When the user clicks on their persona, the friends list will be updated( from task dash2)
    2)  There should be an indicator next to each connected friends to view if he’s online or not
    3)  All online connected friends will be aggregated up to the top of the list for easy connectivity (could be accordion inside of friends div ex. online and offline expandable)

**shawn notes: only online friends will be displayed. NOT online and connected together.
**rei notes: the friends list will be static and members online will be somewhere inside content in community page

Jennifer: completed | Shawn: 3 days | Scott: 2 days | Nathan: TBA
=========

<b>Dash4</b>: I want the ability to ask questions every 24 hours 

Priority: <b>High</b>

Description: 

    Every 24 hours users will be displayed a question( either from incomplete profiles or for ads purposes). 

