import { Meteor } from 'meteor/meteor';
import { TasksCollection } from '/imports/api/TasksCollection';

const insertTask = taskText => TasksCollection.insert({ text: taskText });

Meteor.startup(() => {
  if (TasksCollection.find().count() === 0) {
    [
      'Do web page for father',
      'Do the list for the trip ',
      'Play Cod with the friends',
      'Go to the gym',
      'Make an unicorn company',
      'Help people in need',
      'Buy some clothes',
    ].forEach(insertTask);
  }
});