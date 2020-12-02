class Dustbin {
constructor(){
var options = {
'isStatic': true
}
this.body1 = Bodies.rectangle(680,650,126,12, options)
this.body2 = Bodies.rectangle(625,590,12,135, options)
this.body3 = Bodies.rectangle(735,590,12,135, options)
World.add(world, this.body1)
World.add(world, this.body2)
World.add(world, this.body3)
}
display(){
fill('#e3e3e3')
rectMode(CENTER)
rect(680,650,126,12)
rect(625,590,12,135)
rect(735,590,12,135)
}
}