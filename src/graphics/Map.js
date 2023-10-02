import './Map.css';

function Map() {
  return (
    <>
      <div className="MapRiver">
        <div className="MapRiverInner"></div>
      </div>
      <div className="Map">
        <div className="MapPanel"></div>
        <div className="MapPanel" id="CenterMapPanel"></div>
        <div className="MapPanel"></div>
        {[["40px", "30px"], ["170px", "150px"], ["90px", "290px"]].map((element, index) =>
          <div className="MapLocation" key={"MapLocation" + index} style={{ top: element[0], left: element[1] }}>
            <div className="MapLocationDot"></div>
          </div>
        )}
      </div>
    </>
  );
}

export default Map;