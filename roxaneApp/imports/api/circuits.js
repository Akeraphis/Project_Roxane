import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

import './interestZones.js';

export const Circuits = new Mongo.Collection('allCircuits');

if(Meteor.isServer){
  Meteor.publish("allCircuits", function circuitsPublication(){
    return Circuits.find();
  });

  Meteor.methods({
    'importCircuitsFromJson': function(){
      let myCs={};
      myCs = JSON.parse(Assets.getText('Circuits.json'));
      _.forEach(myCs, function(c){
        Meteor.call('circuitWOStop.insert', c.Circuit_ID, c.Name, c.Description, c.InterestZone, c.NbDays, c.CarLocation, c.Picture1, c.Picture2, c.Picture3);
      });
      let mySCs = {};
      mySCs = JSON.parse(Assets.getText('StopsInCircuit.json'));
      _.forEach(mySCs, function(sc){
        console.log(sc);
        Meteor.call('addStopsToCircuit', sc.Circuit_ID, sc.Stop_ID, sc.StopNr, sc.NbDays, sc.FromToSpecificTransportation, sc.SpecificTransportation);
      });
    }
  });

}

Meteor.methods({
  'circuitWOStop.insert': function(id, name, description, izID, nbDays, CarLocation, Picture1, Picture2, Picture3){
    let iz = Meteor.call('iz.find', izID);

    Circuits.insert({
      _id: id,
      interestZone : iz,
      name: name,
      description: description,
      totalNbDays: nbDays,
      CarLocation: CarLocation,
      Pictures: [Picture1, Picture2, Picture3],
      stopDaysTable: []
    });
  },
  'addStopsToCircuit': function(Cid, Sid, StopNr, NbDays, FromToST, SpeT){
    Circuits.update(
      { _id: Cid },
      { $push :
        { stopDaysTable: {
          stop: Sid,
          StopNr: StopNr,
          NbDays: NbDays,
          FromToST : FromToST,
          SpeT: SpeT
        }
      }
    });
  },
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
