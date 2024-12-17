const mongoose=require("mongoose")
const menudrinksschema=mongoose.Schema({
    drinks:String,
    drinksmenu:String,
    drinksdes:String,
    drnksmenu1:String,
    drinksdes1:String,
    drinksmenu2:String,
    drinksdes2:String,

    
    

})
const menumodel=mongoose.model("menudrinks",menudrinksschema)
module.exports=menumodel