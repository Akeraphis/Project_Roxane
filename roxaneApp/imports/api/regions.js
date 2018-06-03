import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

import './countries.js';

export const Regions = new Mongo.Collection('regions');

if(Meteor.isServer){
  Meteor.publish("allRegions", function regionsPublication(){
    return Regions.find();
  });
}

Meteor.methods({
  'region.insert': function(name, country){
    check(name, String);
    if (! this.userId) {
      throw new Meteor.Error('not-authorized');
    }

    let c = Meteor.call('countries.find', country);
    let continent = "";
    if (country){continent = c.continent;}

    Regions.insert({
      name : name,
      country : country,
      continent : continent,
      created_at: new Date(),
      creator_id:  this.userId,
      creator_name: Meteor.users.findOne({_id: this.userId}).username
    });
  },

  'region.delete': function(region_id){
    check(region_id, String);
    Regions.remove({_id: region_id});
  },

  'regions.deleteAll': function(){
    Regions.remove({});
  },
});
