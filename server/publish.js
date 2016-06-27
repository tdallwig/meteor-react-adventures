Resolutions = new Mongo.Collection("resolutions");
Beers = new Meteor.Collection("Beers");

Meteor.publish("allResolutions", function(){
 return Resolutions.find();
});



Meteor.publish("userResolutions", function(){
 return Resolutions.find({user: this.userId});
});

Meteor.publish("allBeers", function(){
 return Beers.find()
});

