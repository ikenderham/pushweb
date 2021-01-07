var push = require('web-push');

let vapidKeys = {
	publicKey: 'BAUbMEbQ2BRgY1eY49yjZHEhIYfZXXw6hbFV1gqnWj0TI4iRRfNPWx6nKaIcpsvhXxe2LTuJGRrXt8sS6jFzWgc',
  	privateKey: 'qpfNGevOAVLTf7LTTv8UbOkrRvD0BfH4AznvG-2xHIY'
}

push.setVapidDetails('mailto:hh@dynamicit.dk', vapidKeys.publicKey, vapidKeys.privateKey);

let sub = {}
push.sendNotification(sub,'Test besked');