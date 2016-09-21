import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Contacts } from '../api/contacts.js';
import './body.html';
 
Template.body.helpers({
  contacts(){
  	return Contacts.find({});
  }
});
Template.body.events({
	'click .contact'(){
		//able to get info of name clicked and video recorded
		// need to either email or send to db for pt account
		
		console.log(this.email);
		// console.log(Session.get('onVideoRecorded'))
		
		Meteor.call('sendEmail',
			this.email,
			'janeSherlockWatson@gmail.com',
			'Sent your exercise',
			'Testing Testing')
		}
		// Meteor.call('testingHello');
});
Template.videoCaptureBasic.helpers({
	opts: function() {
		var opts = {
			maxTime: 15,
			videoDisplay: {
			width: 660,
			height: 375
		},
		classes: {
			recordBtn: 'video-capture-basic-record-btn',
			stopBtn: 'video-capture-basic-stop-btn'
		},
		onVideoRecorded: function(err, base64Data) {
			Session.set('onVideoRecorded',base64Data);
		}
	};
	return opts;
	}
});
Template.videoCaptureBasic.events({
	'click .video-capture-basic-stop-btn'(event){
		console.log("Clicked on stop",event)
	}
});