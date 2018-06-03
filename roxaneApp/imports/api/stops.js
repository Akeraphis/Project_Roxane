import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

export const Stops = new Mongo.Collection('stops');

if(Meteor.isServer){
  Meteor.publish("allStops", function stopsPublication(){
    return Stops.find();
  });
}

Meteor.methods({
  'stop.insert': function(name, region, country, continent, latitude, longitude){
    check(name, String);
    check(region, String);
    check(country, String);
    check(continent, String);

    if (! this.userId) {
      throw new Meteor.Error('not-authorized');
    }

    Stops.insert({
      name : name,
      region: region,
      country: country,
      continent: continent,
      latitude: latitude,
      longitude: longitude,
      created_at: new Date(),
      creator_id:  this.userId,
      creator_name: Meteor.users.findOne({_id: this.userId}).username
    });
  },

  'stop.delete': function(stop_id){
    check(stop_id, String);
    Stops.remove({_id: stop_id});
  },

  'stops.deleteAll': function(){
    Stops.remove({});
  },
});
