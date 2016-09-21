import { Meteor } from 'meteor/meteor';
import '../imports/api/contacts.js';
import { Email } from 'meteor/email'

Meteor.startup(() => {
	Meteor.methods({
  		sendEmail: function (to, from, subject, text) {
	    	check([to, from, subject, text], [String]);
	    	this.unblock();
	    	Email.send({
	    		to: to,
	    		from: from,
	    		subject: subject,
	    		text: text
	    	});
    	}
	});
});
