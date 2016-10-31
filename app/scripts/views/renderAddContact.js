import $ from 'jquery';

const contentBox = $('.main-content');

export default function() {
  const form = $(`
    <form class="" action="index.html" method="post">
      <input type="text" name="firstName" placeholder="First Name" value="">
      <input type="text" name="lastName" placeholder="Last Name" value="">
      <input type="text" name="nickName" placeholder="Nickname" value="">
      <input type="email" name="email" placeholder="Email" value="">
      <input type="telephone" name="telephone" placeholder="Phone Number" value="">
      <input type="submit" name="name" value="">
    </form>
    `);

  return contentBox.append(form);

}
