import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

import './regions.js';

export const InterestPoints = new Mongo.Collection('interestPoints');

if(Meteor.isServer){
  Meteor.publish("allIPs", function ipsPublication(){
    return InterestPoints.find();
  });
}

Meteor.methods({
  'ip.insert': function(name, region, latitude, longitude, description, category){
    check(name, String);
    check(region, String);
    check(description, String);
    check(category, String);

    if (! this.userId) {
      throw new Meteor.Error('not-authorized');
    }

    let r = Meteor.call('regions.find', region);
    let country = r.country;
    let continent = r.continent;

    InterestPoints.insert({
      name : name,
      region: region,
      country: country,
      continent: continent,
      latitude: latitude,
      longitude: longitude,
      description: description,
      category: category,
      created_at: new Date(),
      creator_id:  this.userId,
      creator_name: Meteor.users.findOne({_id: this.userId}).username
    });
  },

  'ip.delete': function(ip_id){
    check(ip_id, String);
    InterestPoints.remove({_id: ip_id});
  },

  'IPs.deleteAll': function(){
    InterestPoints.remove({});
  },
});
