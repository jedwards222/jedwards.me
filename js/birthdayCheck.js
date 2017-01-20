
var now = new Date();
var monthsAway = (now.getMonth() - 1);
var daysAway = (now.getDate() - 10);

if (monthsAway === 0 && daysAway === 0) {
  document.write("<p>Today is my Birthday!</p>");
}
else {
  var message;
  if (monthsAway === 0 && daysAway > 0) {
    message = "Try again tomorrow!";
  } else if (monthsAway > 0 && monthsAway < 6) {
    message = "Try again next year!";
  } else if ( monthsAway >= 6) {
    message = "Try again in a few months!";
  } else message = "Try again soon!";

  document.write("<p>Today is not my birthday :(</p>");
  document.write(`<p>${message}</p>`);
}
