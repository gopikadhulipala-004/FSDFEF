let generatedCaptcha = "";
function generateCaptcha() {
const characters =
"ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
generatedCaptcha = "";
for (let i = 0; i < 6; i++) {
generatedCaptcha += characters.charAt(
Math.floor(Math.random() * characters.length)
);
}
document.getElementById("captcha").innerText =
generatedCaptcha;
}
// Login validation
function validateLogin() {
let username =
document.getElementById("username").value;
let password =
document.getElementById("password").value;
let userCaptcha =
document.getElementById("captchaInput").value;
if (userCaptcha.toUpperCase() !== generatedCaptcha) {
alert("Invalid CAPTCHA!");
generateCaptcha();
return false;
}
if (username === "" || password === "") {
alert("Please enter username and password");
return false;
}
alert("Login validation successful!");
return false;
}
// Registration validation
function validateRegistration() {
let password =
document.getElementById("regpassword").value;
let confirmPassword =
document.getElementById("confirmpassword").value;
let userCaptcha =
document.getElementById("captchaInput").value;
if (password.length < 8) {
alert("Password must contain at least 8 characters");
return false;
}
if (password !== confirmPassword) {
alert("Passwords do not match!");
return false;
}
if (userCaptcha.toUpperCase() !== generatedCaptcha) {
alert("Invalid CAPTCHA!");
generateCaptcha();
return false;
}
alert("Registration validation successful!");
return false;
}