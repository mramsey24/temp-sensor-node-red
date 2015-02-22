console.log("Raw temp reading..." + msg.payload);
var tempF = msg.payload * 9.0 / 5.0 + 32.0
console.log("Calc temp is..." + tempF);
var tweet = "#iot #techcon2015 The current temperature is " + tempF + " deg F"
console.log("Tweet..." + tweet);

msg.payload = tweet

return msg;
