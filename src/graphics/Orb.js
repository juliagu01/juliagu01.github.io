import './Orb.css';

function Orb() {
  return (
    <div className="Orb">
      {[290, 220, 150].map((element, index) =>
        <div className="OrbGlow" id={"OrbGlow" + (2-index)}
          style={{ "width": `${element}px`, "height": `${element}px`, "opacity": `${(150/element)**2}` }}>
        </div>
      )}
    </div>
  );
}

export default Orb;
