import Backbone from 'backbone';

import key from '../secret';

export default Backbone.Model.extend({
  // url: 'http://tiny-za-server.herokuapp.com/collections/maxcontacts',
  idAttribute: '_id',
  // name: 'name',
  // email: 'email',
  contacts: [],
  register(email, password, name) {
    this.save(
      {email, password, name},
      {
        url: 'https://api.backendless.com/v1/users/register',
        headers: {
			    'application-id': '8505A74A-DFDD-266F-FFF8-BDDCEC76D400',
			    'secret-key': key(),
			    'application-type': 'REST',
          'Content-Type': 'application/json'
        },
        success: () => {
          console.log('success');
        },
        error: (response) => {
          console.log('nada');
          console.log(response);
        }
      }
    );
  },
  login(login, password) {
    this.save(
      {login, password},
      {
        url: 'https://api.backendless.com/v1/users/login',
        headers: {
          'application-id': '8505A74A-DFDD-266F-FFF8-BDDCEC76D400',
          'secret-key': key(),
          'application-type': 'REST',
          'Content-Type': 'application/json'
        },
        success: function(response) {
          console.log('Logged in');
          console.log(login, password);
          console.log(response);
          // console.log(reponse['user-token']);
          // session.token = response['user-token'];
			    // session.id = response.objectId;
        },
        error: function(response) {
          console.log(response);
          console.log(key);
        }
    });
  },
  addContact(firstName, lastName, nickName, email, phoneNumber, address) {
    this.save(
      {firstName, lastName, nickName, email, phoneNumber, address},
      {
        url: 'https://api.backendless.com/v1/data/Contacts',
        headers: {
          'application-id': '8505A74A-DFDD-266F-FFF8-BDDCEC76D400',
          'secret-key': key(),
          'application-type': 'REST',
          'Content-Type': 'application/json'
        },
        success: (response) => {
          console.log('Added');
          console.log(response);
        },
        error: (response) => {
          console.log('Not posted');
          console.log(response);
        }
      }
    );
  },
  removeContact() {

  }
});
