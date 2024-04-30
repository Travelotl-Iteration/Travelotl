const Hotel = ({handleClick, name, address, zipcode}) => {

  return (
    <div className='hotel' onClick={ e => handleClick(e, name, zipcode)}>
      <p>{name}</p>
      <p>{address}</p>
    </div>
  );
};

export default Hotel;