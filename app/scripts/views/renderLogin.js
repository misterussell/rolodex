import $ from 'jquery';

const contentBox = $('.main-content');

export default function(user, session) {

  //variable for sign up toggle
  let newUser = true;

  let toggle = $(`<div></div>`);
  let buttonToggle = $(`<div></div>`);

  let login = $(`<h1>Login</h1>`);
  let signUp = $(`<h1>Sign Up</h1>`);

  let form = $(`
    <form class="login-signup">
      <input type="text" class="name" name="name" placeholder="Name" value="">
      <input type="text" name="email" placeholder="Email" value="maxruss.87@gmail.com">
      <input type="password" name="password" placeholder="Password" value="555">
    </form>`);

  toggle.append(login, signUp, form);

  form.append(buttonToggle.append(`<input type="submit" name="submit" value="Register">`));

  //click handling for registering different form options
  login.on('click', () => {
    $('.name').hide();
    buttonToggle.empty();
    buttonToggle.append(`<input type="submit" name="submit" value="Log In">`);
    newUser = false;
  });

  signUp.on('click', () => {
    $('.name').show();
    buttonToggle.empty();
    buttonToggle.append(`<input type="submit" name="submit" value="Register">`);
    newUser = true;
  });

  form.on('submit', (e) => {
    e.preventDefault();
    let email = $(form).find('input[name="email"]').val();
    let password = $(form).find('input[name="password"]').val();
    let name = $(form).find('input[name="name"]').val();
    if (newUser){
      user.register(email, password, name);
    } else {
      user.login(email, password);
    }
  });

  // return contentBox.append(form);
  return toggle;

}
