import './Grid.css';

function Grid() {
  return (
    <div className="Grid">
      {[0, 80].map((element, index) =>
        <>
          <div className="GridStripe" key={"GridRow" + index} style={{ transform: `translate(-100vmax, ${element}px)` }}></div>
          <div className="GridStripe" key={"GridColumn" + index} style={{ transform: `translateX(-100vmax) rotate(90deg) translateY(${element}px)` }}></div>
        </>
      )}
    </div>
  );
}

export default Grid;
