const db = require("quick.db")

module.exports.run = (client) => {
  console.log("Connected To The Database!" )
  client.user.setActivity(db.get(`status`)); 
}