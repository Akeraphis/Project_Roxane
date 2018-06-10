import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

import './regions.js';

export const InterestPoints = new Mongo.Collection('interestPoints');

if(Meteor.isServer){
  Meteor.publish("allIPs", function ipsPublication(){
    return InterestPoints.find();
  });

  Meteor.methods({
    'importIPsFromJson': function(){
      let myIPs={};
      myIPs = JSON.parse(Assets.getText('InterestPoints.json'));
      _.forEach(myIPs, function(c){
        Meteor.call('ip.insert', c.IP_ID, c.Name, c.Region, c.Latitude, c.Longitude, c.Description, c.Picture, c.Category);
      });
    }
  });
}

Meteor.methods({
  'ip.insert': function(id, name, stop, latitude, longitude, description, picture, category){
    check(name, String);
    check(description, String);
    check(category, String);

    if (! this.userId) {
      throw new Meteor.Error('not-authorized');
    }

    InterestPoints.insert({
      _id: id,
      name : name,
      stop: stop,
      latitude: latitude,
      longitude: longitude,
      description: description,
      category: category,
      picture: picture,
      created_at: new Date(),
      creator_id:  this.userId,
      creator_name: Meteor.users.findOne({_id: this.userId}).username
    });
  },

  'ip.delete': function(ip_id){
    check(ip_id, String);
    InterestPoints.remove({_id: ip_id});
  },

  'ip.deleteAll': function(){
    InterestPoints.remove({});
  },
});
