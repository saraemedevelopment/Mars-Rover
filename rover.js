var rover = {
  direction: "E",
  x:0,
  y:0,
  travelLog: []
  }

console.log("Initial position is " + rover.x, rover.y);
console.log("Rover is heading " + rover.direction);

function turnLeft(rover){

  switch (rover.direction){
    case "N":
        rover.direction = "W";
        break;

    case "W":
        rover.direction = "S";
        break;

    case "S":
        rover.direction = "E";
        break;

    case "E":
        rover.direction = "N";
        break;
  }
  console.log("turnLeft was called!");
    console.log("Rover is now heading " + rover.direction);
}

function turnRight(rover){

  switch (rover.direction){
    case "N":
        rover.direction = "E";
        break;

    case "W":
        rover.direction = "N";
        break;

    case "S":
        rover.direction = "W";
        break;

    case "E":
        rover.direction = "S";
        break;
  }

  console.log("turnRight was called!");
    console.log("Rover is now heading " + rover.direction);
}

function moveForward(rover){
  console.log("moveForward was called!");
  if (rover.x<=9 && rover.y<=9 && rover.x>=0 && rover.y>=0){
  switch (rover.direction){
    case "N":
        rover.y -= 1;
        break;

    case "W":
        rover.x -=1;
        break;

    case "S":
        rover.y +=1;
        break;

    case "E":
        rover.x +=1;
        break;
  }
  console.log("New position is " + rover.x, rover.y);
  rover.travelLog.push(rover.x, rover.y);
}
  else {
    console.log("You went too far");
  }
}

function moveBackwards(rover){
  console.log("moveBackwards was called!");
  if (rover.x<=9 && rover.y<=9 && rover.x>=0 && rover.y>=0){
  switch (rover.direction){
    case "N":
        rover.y += 1;
        break;

    case "W":
        rover.x +=1;
        break;

    case "S":
        rover.y -=1;
        break;

    case "E":
        rover.x -=1;
        break;
  }
  console.log("New position is " + rover.x, rover.y);
  rover.travelLog.push(rover.x, rover.y);
}
  else {
    console.log("You went too far");
  }
}



  function commands (){
    var test = "ffrflbb";
    for (i=0;i<test.length; i++) {
      var arrow= test.charAt(i);
        if (arrow==="f"){
          console.log("commands was called");
          console.log("f");
          moveForward(rover);
          }

        else if (arrow==="b"){
              console.log("commands was called!");
              console.log("b");
            moveBackwards(rover);

          }
        else if (arrow==="r") {
          console.log("commands was called!");
          console.log("r");
          turnRight(rover);
          }
        else if (arrow==="l"){
            console.log("commands was called!");
            console.log("l");
          turnLeft(rover);

        }
        else {
          console.log("commands was called!");
          console.log("enter valid direction");
        }
      }

      }

//lets move
commands(rover);
console.log("travelLog is " + rover.travelLog);
