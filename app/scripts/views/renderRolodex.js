import $ from 'jquery';

const contentBox = $('.main-content');

export default function() {

  const contactList = $(`<ul class="contacts"></ul>`);

  let listItem = $(`
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    `);

  return contentBox.append(contactList.append(listItem));

}
