import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

export const Countries = new Mongo.Collection('countries');

if(Meteor.isServer){
  Meteor.publish("allCountries", function countriesPublication(){
    return Countries.find();
  });
}

Meteor.methods({
  'country.insert': function(name, continent){
    check(name, String);
    if (! this.userId) {
      throw new Meteor.Error('not-authorized');
    }

    Countries.insert({
      name : name,
      continent : continent,
      created_at: new Date(),
      creator_id:  this.userId,
      creator_name: Meteor.users.findOne({_id: this.userId}).username
    });
  },

  'country.delete': function(country_id){
    check(country_id, String);
    Countries.remove({_id: country_id});
  },

  'countries.deleteAll': function(){
    Countries.remove({});
  },

  'countries.find': function(name){
    return Countries.findOne({name : name});
  }
});
