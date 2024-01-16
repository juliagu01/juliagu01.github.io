import './MenuAction.css';

function MenuAction({ panel, light, onClick }) {
  if (panel)
    return (
      <div id="MenuAction" className="Action" onClick={() => onClick()}
        style={{ color: "black" }}>
        <h2>&#x2715;</h2>
        <p>[x]</p>
      </div>
    );
  else
    return (
      <div id="MenuAction" className="Action" onClick={() => onClick()}
        style={{ color: (light ? "black" : "white") }}>
        <h2>&#x2630;</h2>
        <p>[m]</p>
      </div>
    );
}

export default MenuAction;