// Song Class
function Song(name){
  // constructor function

  // class property
  this.name = name;
}

//instantiating an instance of the Song class to redballons
var redballoons = new Song('99 Luftballoons');

Song.prototype.play = function (){
  return 'Playing ' + this.name;
};

console.log(redballoons.name);

// new subClass of Song
function MetalSong(name, num){
  //conctructor
  //class property
  this.circleNum = num;

  // invoke the super constructor
  // need to give Song contract a name to fulfill contract
  // this is how we super
  Song.call(this, name);
}

// extending Song's prototype into MetalSong's prototype
MetalSong.prototype = Object.create(Song.prototype, {
  constructor: MetalSong
});

MetalSong.prototype.flower = function (){
  return 'flowering yeahhhh!!!!!!!!';
};

var chocolate = new MetalSong('Chocolate', 9);
