const ControlPanel = ({handleRestaurantsSwitch, handleHotelsSwitch}) => {

  return (
    <>
    {/* <div style={{backgroundColor: 'ButtonShadow'}}> */}
      <button 
        onClick={handleRestaurantsSwitch} 
        style={{padding: '12px',  backgroundColor:'#FFC5C5', borderRadius:'50%',  boxShadow: '20px 20px 50px grey'}}>Restaurants</button>
      <button 
        onClick={handleHotelsSwitch} 
        style={{padding: '13px', margin:'10px', backgroundColor:'#FFC5C5', borderRadius:'50%', boxShadow: '20px 20px 50px grey'}}>Hotels</button>
    {/* </div> */}
    </>
  );
}

export default ControlPanel;