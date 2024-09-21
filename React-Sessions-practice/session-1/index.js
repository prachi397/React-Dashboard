// circle constructor activity
function circle(radius,x,y){
    this.radius = radius;
    this.location = {
      x:x,
      y:y
    };
    this.draw =  function(){
      console.log("current location is: ", this.location); 
    }
    this.move = function(nextX, nextY){
      this.location.x = nextX;
      this.location.y = nextY;
    };
  }
  
  const circleObj = new circle(10,0,0);
  console.log(circleObj);
  
  for (let index = 0; index <= 10; index++) {
      circleObj.move(index, index);
      circleObj.draw();
    }

//user constructor
function User(fullName){
  this.fullName = fullName;
  this.friendList = [];
  this.addFriend = function(friendName){
    this.friendList.push(friendName);
  };
  this.printFriendList = function(){
    console.log("Friend list is :", this.friendList);
  };
  this.findMutualsWith = function(userObj){
    const mutualFriends = this.friendList.filter((friend)=>userObj.friendList.includes(friend));
    console.log("Mutual Friends are :", mutualFriends);
  }
}

const vivek = new User("Vivek Nigam");
vivek.addFriend("Harish");
vivek.addFriend("Radhe");
vivek.addFriend("Abhijay");
vivek.printFriendList();

const varun = new User("Varun Verma");
varun.addFriend("Rohan");
varun.addFriend("Vatsal");
varun.addFriend("Radhe");
varun.addFriend("Abhijay");
varun.printFriendList();

vivek.findMutualsWith(varun);

//creating class
class People{
  constructor(personName,personAge){
    this.personName = personName;
    this.personAge = personAge
  }
  greet(){
    console.log("Hello",this.personName, "your age is", this.personAge);
  }
}
let person = new People("Prachi", 22);
console.log(person);
person.greet();