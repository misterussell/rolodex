import $ from 'jquery';

import renderListItem from './renderListItem';

export default function(contacts, session) {

  let contactList = $(`<ul class="contacts"></ul>`);

  contacts.on('update', () => {
    contacts.forEach( function(contact, i, arr) {
      contactList.append(renderListItem(contact));
    });
  });

  return contactList;
}
