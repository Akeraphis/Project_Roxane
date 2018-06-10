import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

import './regions.js';

export const Stops = new Mongo.Collection('stops');

if(Meteor.isServer){
  Meteor.publish("allStops", function stopsPublication(){
    return Stops.find();
  });

  Meteor.methods({
    'importStopsFromJson': function(){
      let myStops={};
      myStops = JSON.parse(Assets.getText('Stops.json'));
      console.log(myStops);
      _.forEach(myStops, function(c){
        Meteor.call('stop.insert', c.ID, c.Name, c.Region, c.Latitude, c.Longitude, c.Description, c.Picture);
      });
    }
  });
}

Meteor.methods({
  'stop.insert': function(id, name, region, latitude, longitude, description, picture){
    check(name, String);
    check(region, String);

    if (! this.userId) {
      throw new Meteor.Error('not-authorized');
    }

    let r = Meteor.call('regions.find', region);
    let country = r.country;
    let continent = r.continent;

    Stops.insert({
      _id: id,
      name : name,
      region: region,
      country: country,
      continent: continent,
      latitude: latitude,
      longitude: longitude,
      description: description,
      picture: picture,
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
  }
});
