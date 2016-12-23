/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
	  fullname:{
		  type: 'string',
		  required: true
	  },
	  email: {
		  type: 'string',
		  required: true,
		  unique: true
	  },
	  password:{
		  type: 'string',
		  required: true
	  },
	  
	  posts: {
		  collection: 'publication',
		  via: 'author'
	  }
  }
};
