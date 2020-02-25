

const firebaseConfig = {
    apiKey: "AIzaSyA38bRGCRCA5d58dRpjbg56iDEwXmvoT8s",
    authDomain: "groupsoftware-25ee9.firebaseapp.com",
    databaseURL: "https://groupsoftware-25ee9.firebaseio.com",
    projectId: "groupsoftware-25ee9",
    storageBucket: "groupsoftware-25ee9.appspot.com",
    messagingSenderId: "1031394181045",
    appId: "1:1031394181045:web:1de897f3b3aa98d89b23fc"
};

firebase.initializeApp(firebaseConfig);

var database = firebase.database();

var details = ['playerCoordinates','playerName']

function gameStateChange() {
    console.log("hello");
    document.location.href = 'gamekeeperEnd.html';
    firebase.database().ref("gameCondition").set('End');
}

function gameStateEnd() {
    console.log("hello");
    document.location.href = 'gamekeeper.html';
    firebase.database().ref("gameCondition").set('Start');
}





var starCountRef = firebase.database().ref('players/player');
starCountRef.on('value', function(snapshot) {
  //console.log(snapshot.val());
  document.getElementById('nep').innerText = snapshot.val();});

  /*
  var urlRef = firebase.database().ref("players/player");
  urlRef.on("value", function(snapshot) {
    snapshot.forEach(function(child) {
      console.log(child.key+": "+child.val());
    });
  });
  */


  var name;
  // WHat table to get from
  var starCountRef = firebase.database().ref('players/player');
  // Gets the value
  starCountRef.on('value', function(snapshot) {
    name = snapshot.val();
    document.getElementById('nep').innerText = snapshot.val();});



  /*
  var countRef = firebase.database().ref('players');
  countRef.on('value').then(function(snapshot) {
  console.log(snapshot.val());
  snapshot.forEach(function(snapshot1) {
    console.log(snapshot1.key); // e.g. "http://..."
    snapshot.forEach(function(snapshot2) {
      console.log(childSnapshot.key); // e.g. "20170116"
      childSnapshot.forEach(function(snapshot3) {
        console.log(grandchildSnapshot.key); // e.g. "-Kb9...gkE"
        console.log(grandchildSnapshot.val().districtId); // "pne"
      });
    });
  });
});
*/

/*  Prints the players
let usersRef = firebase.database().ref('players');
usersRef.orderByValue().on("value", function(snapshot) {
    console.log(snapshot.val());
    snapshot.forEach(function(data) {
        console.log(data.key);
    });
});
*/

/* Gets all the locations but 3 times
let usersRef = firebase.database().ref('players');
usersRef.orderByValue().once("value").then(function(snapshot) {
    console.log(snapshot.val());
    snapshot.forEach(function(snapshot1) {
        snapshot.forEach(function(snapsho2) {
          console.log(snapsho2.val());

        });

    });
});
*/

/*
let usersRef = firebase.database().ref('players');
usersRef.orderByValue().once("value").then(function(snapshot) {
    console.log(snapshot.val());
    snapshot.forEach(function(snapshot1) {
        snapshot.forEach(function(snapsho2) {
          console.log(snapsho2.val());

        });

    });
});
*/

let players = [];


function getPlayers(players){
// goes in the players tree
firebase.database().ref("players").on('value', (playersSnapshot) => {
  // for each tree in players (Gets individual players)
   playersSnapshot.forEach((playerSnapshot) => {
     //
      let player = playerSnapshot.val();
      // The objects which are made
      players.push({
        playerName:player.playerName,
        playerCoordinates:player.playerCoordinates,
        playerRoute:player.playerRoute,
        clues:player.clues
      })

      //printObj(players);
   }).then(printObj(players))
})}




/*
function getPlayers(){
firebase.database().ref("players").once('child_added', function(snap){
      snap.forEach(function(childNodes){
      var player = snap.val();

      //console.log(player);
      players.push({
        playerName:player.playerName,
        playerCoordinates:player.playerCoordinates,
        playerRoute:player.playerRoute,
        clues:player.clues
      })


      console.log("...");
      //this works for getting the items
      printObj(players);


      // Adds child nodes to players

      players.push(childNodes.val().playerName);
      players.push(childNodes.val().playerCoordinates);
      players.push(childNodes.val().playerRoute);
      players.push(childNodes.val().playerLocation);
      players.push(childNodes.val().clues);

      return players;
  });
});}
*/


//var vex = getPlayers(players);


getPlayers(players);

// Prints all the objetcs inside
function printObj(players){
  for (let x in players) {
    console.log(players[x]);
  }
}

console.log(players);

//console.log(players['1']);
//console.log(typeof(players));
/*

/*


/*
database.ref('users/'+prospectId).once('value').then(function(snapshot) {
  var prospectId = snapshot.key ;

  snapshot.forEach(function(snapshot1) {
    console.log(snapshot1.key); // e.g. "http://..."
    snapshot.forEach(function(snapshot2) {
      console.log(childSnapshot.key); // e.g. "20170116"
      childSnapshot.forEach(function(snapshot3) {
        console.log(grandchildSnapshot.key); // e.g. "-Kb9...gkE"
        console.log(grandchildSnapshot.val().districtId); // "pne"
      });
    });
  });
});
*/






//list = [{coords:{name[]}},]
