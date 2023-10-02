import './Telescope.css';

function Telescope() {
  return (
    <div className="Telescope">
      <div id="DefaultTelescopeAngle">
        <div className="TelescopeBeam">
          <div className="TelescopeBeamInner"></div>
        </div>
        <div className="TelescopeMain">
          <div className="TelescopeHead"></div>
          <div className="TelescopeBody"></div>
        </div>
      </div>
      {[260, 250, 240, 230, 220, 210, 200, 190].map((element, index) =>
        <div className="TelescopeAngle" key={"TelescopeAngle" + index} style={{
          transform: `rotate(${element}deg)` }}>
          <div className="TelescopeBeam">
            <div className="TelescopeBeamInner"></div>
          </div>
          <div className="TelescopeMain">
            <div className="TelescopeHead"></div>
            <div className="TelescopeBody"></div>
          </div>
        </div>
      )}
      <div className="TelescopeStand">
        <div className="TelescopeStandLeg" rotate="30deg" style={{
          transform: "translate(5px, -390px) rotate(10deg) translateY(400px)"
        }}></div>
        <div className="TelescopeStandLeg" rotate="-30deg" style={{
          transform: "translate(5px, -390px) rotate(-10deg) translateY(400px)"
        }}></div>
      </div>
    </div>
  );
}

export default Telescope;