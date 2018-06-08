import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

import './interestZones.js';

export const Circuits = new Mongo.Collection('allCircuits');

if(Meteor.isServer){
  Meteor.publish("allCircuits", function circuitsPublication(){
    return Circuits.find();
  });
}

Meteor.methods({
  'circuit.insert': function(interestZone, stopDaysTable){

    let iz = Meteor.call('iz.find', interestZone);
    let country = iz.country;
    let region = iz.region;
    let continent = iz.continent;

    Circuits.insert({
      interestZone : interestZone,
      region: region,
      country: country,
      continent: continent,
      stopDaysTable: stopDaysTable
    });
  },
  'circuit.delete': function(c_id){
    Circuits.remove({_id: c_id});
  },
  'circuits.deleteAll': function(){
    Circuits.remove({});
  }
});
