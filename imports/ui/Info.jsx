import React from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { LinksCollection } from '../api/links';

export const Info = () => {
  // const links = useTracker(() => {
  //   return LinksCollection.find().fetch();
  // });

  const links = [
    {
      "_id": "Lhnp8TpmSYzKNmg6K",
      "title": "Do the Tutorial",
      "url": "https://www.meteor.com/tutorials/react/creating-an-app",
      "createdAt": {
        "$date": {
          "$numberLong": "1677014831028"
        }
      }
    },
    {
      "_id": "TetHyfQC2dyEb4yoe",
      "title": "Follow the Guide",
      "url": "https://guide.meteor.com",
      "createdAt": {
        "$date": {
          "$numberLong": "1677014831043"
        }
      }
    }, 
    {
      "_id": "yrEjH9Dw5g28pRYzB",
      "title": "Read the Docs",
      "url": "https://docs.meteor.com",
      "createdAt": {
        "$date": {
          "$numberLong": "1677014831047"
        }
      }
    },
    {
      "_id": "yxn397YjGZY32gzTu",
      "title": "Discussions",
      "url": "https://forums.meteor.com",
      "createdAt": {
        "$date": {
          "$numberLong": "1677014831050"
        }
      }
    }
  ]
  

  return (
    <div>
      <h2>Learn Meteor!</h2>
      <ul>{links.map(
        link => <li key={link._id}>
          <a href={link.url} target="_blank">{link.title}</a>
        </li>
      )}</ul>
    </div>
  );
};
