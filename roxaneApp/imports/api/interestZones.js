import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

import './regions.js';

export const InterestZones = new Mongo.Collection('interestZones');

if(Meteor.isServer){
  Meteor.publish("allInterestZones", function izPublication(){
    return InterestZones.find();
  })
}

Meteor.methods({
  'iz.insert': function(name, region){
    check(name, String);
    check(region, String);

    if (! this.userId) {
      throw new Meteor.Error('not-authorized');
    }

    let r = Meteor.call('regions.find', region);
    let country = r.country;
    let continent = r.continent;

    InterestZones.insert({
      name : name,
      region: region,
      country: country,
      continent: continent,
      created_at: new Date(),
      creator_id:  this.userId,
      creator_name: Meteor.users.findOne({_id: this.userId}).username
    });
  },

  'iz.delete': function(iz_id){
    check(iz_id, String);
    InterestZones.remove({_id: iz_id});
  },

  'iz.deleteAll': function(){
    InterestZones.remove({});
  },

});
