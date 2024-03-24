import './Grid.css';

function Grid() {
  return (
    <div className="Grid">
      {[0, 80].map((element) =>
        <>
          <div className="GridStripe" id={"GridRow" + element} style={{ transform: `translate(-200vmax, ${element}px)` }}></div>
          <div className="GridStripe" id={"GridColumn" + element} style={{ transform: `translateX(-200vmax) rotate(-90deg) translateY(${element}px)` }}></div>
        </>
      )}
      {[0, 80].map((elementX) =>
        <>
          {[0, 80].map((elementY) =>
            <div className="GridIntersect" id={"GridIntersect" + elementX + "_" + elementY} style={{ transform: `translateX(-25px) translate(${elementX}px, ${elementY-5}px)` }}></div>
          )}
        </>
      )}
    </div>
  );
}

export default Grid;
