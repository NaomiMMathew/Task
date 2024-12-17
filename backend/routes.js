const express=require('express')
const router=express.Router()
const schema=require('./menudrinksschema')



router.post('/adddata',(req,res)=>{

    let newmenu= new schema({
       drinks:'-----BRUNCH COCKTAILS----',
       drinksmenu:'CINNAMON TOAST CRUNCH..............$16',
       drinksdes:'Skrewball peanut butter whiskey, vanilla extract,Amaretta, Baileys, egg white, cinnamom',

       drinksmenu1:'MOET SPRIT....................$20',
       drinksdes1:'Aperal, St Germain, botanical liquor, fresh lime juice, mini<br/>brut Moet topper',

       drinksmenu2:'BAR 42 MARY......................$14',
       drinksdes2:'Titos, tomato juice, worcestershire, celery salt, black<br/>pepper, tabasco, fully loaded',

              





    })
    newmenu.save()
    .then(data=>{
        console.log("saved succesfully")
        res.json({
            status:200,
            msg:"saved successfully",
            data:data
         })

    })
    
    .catch(error=>{
        console.log("not saved")
        res.json({
            status:500,
            msg:"error occured",
            data:error
        })
    })
})



module.exports=router