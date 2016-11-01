import $ from 'jquery';
import Backbone from 'backbone';

// import viewName from './views/name';
import renderLogin from './views/renderLogin';
import renderRolodex from './views/renderRolodex';
import renderAddContact from './views/renderAddContact';
import config from './config';

// import CollectionName from './collections/name';

// import ModelName from './models/name';
import Session from './models/Session';
import Contacts from './collections/Contacts';

let session = new Session();
let contacts = new Contacts();

const contentBox = $('.main-content');

const Router = Backbone.Router.extend({
  routes: {
    ''        : 'home',
    'rolodex' : 'rolodex'
  },
  home() {
    // console.log('hello mother');
    if (session.get('user-token')) {
      this.navigate('rolodex', {trigger: true});
    } else {
      contentBox.empty();
      contentBox.append(renderLogin(session));
    }
  },
  rolodex() {
    // console.log('hello father');
    if (session.get('user-token')) {
      contacts.fetch({
        headers: {
          'application-id': config.appId,
          'secret-key': config.secret,
          'application-type': 'REST',
          'Content-Type': 'application/json',
          'user-token': session.get('user-token')
        },
        success(coll) {
          console.log('Collection retrieved');
        },
        error(coll) {
          console.log('Collection not retrieved');
        }
      }
      );
      contentBox.empty();
      contentBox.append(renderRolodex(contacts));
      contentBox.append(renderAddContact(contacts, session));
    } else {
      this.navigate('', {trigger: true});
    }
  }
});

var router = new Router();

export default router;
