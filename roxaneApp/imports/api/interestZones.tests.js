import { Meteor } from 'meteor/meteor';
import { Random } from 'meteor/random';
import { assert } from 'chai';

import { InterestZones } from './interestZones.js';

if (Meteor.isServer) {
  describe('InterestZones', () => {
    describe('methods', () => {

      const userId = Random.id();
      let izId;

      beforeEach(() => {
        InterestZones.remove({});
        izId = InterestZones.insert({
          name: 'test name',
          region: 'test region',
          country: 'test country',
          continent: 'test continent',
          createdAt: new Date(),
          owner: userId,
          username: 'tmeasday',
        });
      });

      it('can delete owned task', () => {

        // Find the internal implementation of the task method so we can
        // test it in isolation
        const deleteIZ = Meteor.server.method_handlers['iz.delete'];

        // Set up a fake method invocation that looks like what the method expects
        const invocation = { userId };

        // Run the method with `this` set to the fake invocation
        deleteIZ.apply(invocation, [izId]);

        // Verify that the method does what we expected
        assert.equal(InterestZones.find().count(), 0);

      });
    });
  });
}
