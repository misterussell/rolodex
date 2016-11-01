import $ from 'jquery';
import Backbone from 'backbone';

import config from '../config';

export default Backbone.Model.extend({
  defaults: {
    firstName: '',
    lastName: '',
    nickName: '',
    email: '',
    phoneNumber: '',
    address: '',
  }
});
