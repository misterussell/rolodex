import $ from 'jquery';

export default function(contact) {

  let listItem = $(`
    <li>
      Name: ${contact.get('firstName')} ${contact.get('lastName')}
      <br>Nickname: ${contact.get('nickName')}
      <br>Phone: ${contact.get('phoneNumber')}
      <br>Address: ${contact.get('address')}
    </li>
    `);



  return listItem;
}
