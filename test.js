const logTextPart =
    "items\":[{\"appid\":242550,\"priority\":1,\"date_added\":1375550321},{\"appid\":2390,\"priority\":2,\"date_added\":1375552201},{\"appid\":2600,\"priority\":3,\"date_added\":1384417385},{\"appid\":450";

const pattern = new RegExp("appid");

const regex = /\"appid\":/g;

const found = logTextPart.match(regex)

// console.log(pattern.exec(logTextPart));
console.log(found);
