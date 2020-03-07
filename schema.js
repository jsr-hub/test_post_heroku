let mongoose  = require("./config");
mongoose = mongoose.mongoose

const MenuSchema = new mongoose.Schema({ brand: String, products:Array});
const Menu = mongoose.model('brands', MenuSchema);
module.exports.Menu = Menu;
