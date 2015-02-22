console.log("Raw temp reading..." + msg.payload);
var tempF = msg.payload * 9.0 / 5.0 + 32.0
console.log("Calc temp is..." + tempF)

msg.payload = tempF;

return msg;