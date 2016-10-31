import Backbone from 'backbone';

export default Backbone.Model.extend({
  // url: 'http://tiny-za-server.herokuapp.com/collections/maxcontacts',
  idAttribute: '_id',
  // name: 'name',
  // email: 'email',
  contacts: [],
  register(email, password, name) {
    console.log('Meow');
    this.save(
      {email, password, name},
      {
        url: 'https://api.backendless.com/v1/users/register',
        headers: {
			    'application-id': '8505A74A-DFDD-266F-FFF8-BDDCEC76D400',
			    'secret-key': 'DC3DD00B-0B43-38E7-FFEB-9BD4E0B64700',
			    'application-type': 'REST',
          'Content-Type': 'application/json'
        },
        success: () => {
          console.log('success');
        },
        error: () => {
          console.log('nada');
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
          'secret-key': 'DC3DD00B-0B43-38E7-FFEB-9BD4E0B64700',
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
        }
    });
  },
  addContact() {
    this.save(
      {model},
      {
        url: 'https://api.backendless.com/v1/data/Contacts',
        headers: {
          'application-id': '8505A74A-DFDD-266F-FFF8-BDDCEC76D400',
          'secret-key': 'DC3DD00B-0B43-38E7-FFEB-9BD4E0B64700',
          'application-type': 'REST',
          'Content-Type': 'application/json'
        }
      }
    );
  },
  removeContact() {

  }
});
