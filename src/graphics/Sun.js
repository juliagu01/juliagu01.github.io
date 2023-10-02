import './Sun.css';

function Sun() {
  return (
    <>
      {[0, 45, 90, 135].map((element, index) =>
        <div className="SunBeam" key={"SunBeam" + index} style={{ transform: `rotate(${element}deg)` }}>
          <div className="SunBeamInner"></div>
        </div>
      )}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((element, index) =>
        <div className="SunRay" key={"SunRay" + index}
          style={{ transform: `rotate(${element}deg) translate(130px, 20px)` }}></div>
      )}
      <div className="SunCenter"></div>
    </>
  );
}

export default Sun;