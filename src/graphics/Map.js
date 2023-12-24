import './Map.css';

function Map() {
  return (
    <>
      <div className="MapRiver">
        <div className="MapRiverInner"></div>
      </div>
      <div className="Map">
        <div className="MapPanel" id="LeftMapPanel"></div>
        <div className="MapPanel" id="CenterMapPanel"></div>
        <div className="MapPanel" id="RightMapPanel"></div>
        {[["40px", "45px"], ["155px", "165px"], ["290px", "75px"]].map((element, index) =>
          <div className="MapLocation" key={"MapLocation" + index} style={{ left: element[0], top: element[1] }}>
            <div className="MapLocationPoint"></div>
            <div className="MapLocationDot"></div>
          </div>
        )}
      </div>
    </>
  );
}

export default Map;