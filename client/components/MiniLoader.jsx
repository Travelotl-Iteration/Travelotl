import video from "../assets/loader.mp4"


const MiniLoader = () => {
  return (
    <div>
      {/* <h2>LOADING</h2> */}
      <video className='loaderVideo' src={video} autoPlay={true} loop={true} muted={true} height="100px" width="140px"/>
    </div>
  );
};

export default MiniLoader;