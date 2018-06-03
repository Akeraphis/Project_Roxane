import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

export const InterestZones = new Mongo.Collection('interestZones');

Meteor.methods({
  'iz.insert': function(name, region, country, continent){
    check(name, String);
    check(region, String);
    check(country, String);
    check(continent, String);

    if (! this.userId) {
      throw new Meteor.Error('not-authorized');
    }

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

})
