import { Meteor } from 'meteor/meteor';
import '../imports/api/contacts.js';
import '../imports/startup/server/mail-url.js';
import { Email } from 'meteor/email'

Meteor.startup(() => {

});

Meteor.methods({
	sendEmail: function (to, from, subject, text, content) {

		console.log('sending email ...');
		this.unblock(); // allows for asynchronous behavior

		Email.send({
			to: to,
			from: from,
			subject: subject,
			text: content,
			attachment: {
				fileName: 'Exercise.txt',
				content: "content",
			},
		});
	}
});