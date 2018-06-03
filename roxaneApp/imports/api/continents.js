import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

export const Continents = new Mongo.Collection('continents');

if(Meteor.isServer){
  Meteor.publish("allContinents", function continentsPublication(){
    return Continents.find();
  });
}

Meteor.methods({
  'continent.insert': function(name){
    check(name, String);
    if (! this.userId) {
      throw new Meteor.Error('not-authorized');
    }

    Continents.insert({
      name : name,
      created_at: new Date(),
      creator_id:  this.userId,
      creator_name: Meteor.users.findOne({_id: this.userId}).username
    });
  },

  'continent.delete': function(continent_id){
    check(continent_id, String);
    Continents.remove({_id: continent_id});
  },

  'continents.deleteAll': function(){
    Continents.remove({});
  },
});
