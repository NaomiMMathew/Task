import React, { useState } from 'react'

function MenuDrinks() {

  return (
    <div className="container mt-5">
      {/* <h1 className="text-center mb-4">Display Items on Button Click</h1> */}
      <ItemDisplay />
    </div>
  );
}

const ItemDisplay = () => {
  // State to manage items and button click
  const [items, setItems] = useState([]);
  const [showItems, setShowItems] = useState(false);

  // Sample data: List of items to display
  const itemList = ["-----BRUNCH COCKTAILS----",
    <td>
    <h5>CINNAMON TOAST CRUNCH..............$16</h5>,
    <p style={{color:'grey',fontSize:'10px',marginRight:"10px"}}>Skrewball peanut butter whiskey, vanilla extract, <br/> Amaretta, Baileys, egg white, cinnamom</p>
    </td>,
    <td>
    <h5>MOET SPRIT....................$20</h5>,
    <p style={{color:'grey',fontSize:'10px',marginRight:"10px"}}>Aperal, St Germain, botanical liquor, fresh lime juice, mini<br/>brut Moet topper</p> 
    </td>,
    <h5>BAR 42 MARY......................$14</h5>,
    <p style={{color:'grey',fontSize:'10px',marginRight:"10px"}}>Titos, tomato juice, worcestershire, celery salt, black<br/>pepper, tabasco, fully loaded</p>

    ];
   
  const handleButtonClick = () => {
    setItems(itemList); // Set items in state
    setShowItems(true); // Update state to show items
  };

  

  return (
   

    <div className='front'>
   
     <div className='front1'>
     
   
     
      <div style={{display:'flex',gap:'10px',fontSize:"50px"}}> 
      
    <span style={{color:'blue'}}>DEEP</span>
    <span style={{color:'white'}}>NET</span>

    <div style={{display:'flex',gap:'15px',fontSize:"20px",marginLeft:'500px'}}> 
    <span style={{color:'white'}}>HOME</span>
    <span style={{color:'blue'}}>MENU</span>
    <span style={{color:'white'}}>MAKE A RESERVATION</span>
    <span style={{color:'white'}}>CONTACT US</span>
    </div>
    </div>
    </div> 
    <div>
    <h1 style={{marginRight:"200px",fontSize:"50px" ,color:'grey'}}>SOFT</h1>

    <h1 style={{textAlign:"center",fontSize:"50px" ,color:'white',fontFamily:"fantasy"}}>MENU</h1>
   
    <p style={{color:'white',textAlign:"center",fontSize:"30px",fontFamily:'Rockwell'}}>Please take a look at our menu featuring food,drinks, and brunch. If you'd like to <br/>
       Place an order, use the "Order Online" button located below the menu</p>

<div>
  <button type="submit"  style={{marginLeft:"500px",height:"50px",width:"100px",borderColor:'blue',color:'white',backgroundColor:'black'}}>FOOD</button> &nbsp;
  <button type="submit" onClick={ handleButtonClick} style={{height:"50px",width:"100px",borderColor:'blue',color:'white',backgroundColor:'black'}}>DRINKS</button> &nbsp;
  <button type="submit" style={{height:"50px",width:"100px",borderColor:'blue',color:'white',backgroundColor:'black'}}>BRUNCH</button>
  </div></div><br/>
  {showItems && (
        <div className="mt-3">
          
          <ul className="list-group d-inline-block">
            {items.map((item, index) => (
              <li key={index} className="list-group-item">
                {item}
              </li>
            ))}
          </ul>
        </div>
       
      )}

<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
 


    <div >
    <button style={{backgroundColor:'black',color:'blue',marginLeft:"100px",border:'3px solid white'}}>CONTACT WITH US
    <p>tel:9567843340 <br/> info@deepnetsoft.com</p></button> &nbsp; &nbsp;  
    <button  style={{backgroundColor:'black',color:'blue',border:'3px solid white',width:"200px",height:"80px",marginLeft:"300px"}}>DEEP 
    <p>NET SOFT</p></button> &nbsp; &nbsp; 

<button  style={{backgroundColor:'black',color:'blue',border:'3px solid white',width:"200px",height:"80px" ,marginLeft:"250px"}}>FIND US 
    <p style={{color:'grey'}}>First floor,Geo infopark,<br/>Infopark EXPY, Kakkanad</p></button> &nbsp; &nbsp; 
    
</div>
     
 </div>

   
 )
}

export default MenuDrinks