import $ from 'jquery';

const contentBox = $('.main-content');

export default function(contacts, session) {

  let contactList = $(`<ul class="contacts"></ul>`);

  let listItem = $(`
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    `);

  contactList.append(listItem);

  // return contentBox.append(contactList.append(listItem));
  return contactList;

}
