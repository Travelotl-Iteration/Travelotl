const ControlPanel = ({handleRestaurantsSwitch, handleHotelsSwitch}) => {

  return (
    <div>
      <button onClick={handleRestaurantsSwitch}>Restaurants</button>
      <button onClick={handleHotelsSwitch}>Hotels</button>
    </div>
  );
}

export default ControlPanel;