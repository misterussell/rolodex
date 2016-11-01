import Backbone from 'backbone';

import router from '../router';
import config from '../config';

export default Backbone.Model.extend({
  idAttribute: '_id',
  register(email, password, name) {
    this.save(
      {email, password, name},
      {
        url: 'https://api.backendless.com/v1/users/register',
        headers: {
			    'application-id': config.appId,
			    'secret-key': config.secret,
			    'application-type': 'REST',
          'Content-Type': 'application/json'
        },
        success: () => {
          this.login(email, password);
        },
        error: (response) => {
          console.log('User data not saved to server.');
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
          'application-id': config.appId,
          'secret-key': config.secret,
          'application-type': 'REST',
          'Content-Type': 'application/json'
        },
        success: (response) => {
          router.navigate('rolodex', {trigger: true});
        },
        error: function(response) {
          console.log(response);
          alert('Log in not successful. Please try again.');
        }
    });
  },
  //below should have unique user data passed in should we want to make
  //other authorization requests
  // assignAuth(user) {
  //   this.save(
  //     {'user': 'user-value', 'roleName': 'RestUser'},
  //   {
  //     url: 'https://api.backendless.com/v1/users/assignRole',
  //     headers: {
  //       'application-id': '8505A74A-DFDD-266F-FFF8-BDDCEC76D400',
  //       'secret-key': key(),
  //       'Content-Type': 'application/json',
  //       'application-type': 'BL'
  //     },
  //     success: (response) => {
  //       console.log('Auth assigned');
  //     },
  //     error: (response) => {
  //       console.log('Auth assign failure');
  //     }
  //   });
  // }
});
