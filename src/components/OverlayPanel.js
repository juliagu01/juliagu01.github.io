import './OverlayPanel.css';

function OverlayPanel({ show, onOverlayClick, onPageClick, onThemeClick }) {
  if (show)
    return (
      <div className="OverlayPanel">
        <div className="Overlay" onClick={() => onOverlayClick()}></div>
        <div className="Panel">
          <div className="Menu"> 
            <h2>Menu</h2>
            <div className="Options">
              <div className="Action" onClick={() => onPageClick("Home")}>
                <p>[h] </p><span>Hello there!</span>
              </div>
              <div className="Action" onClick={() => onPageClick("Projects")}>
                <p>[p] </p><span>Projects</span>
              </div>
              <div className="Action" onClick={() => onPageClick("Contact")}>
                <p>[c] </p><span>Contact</span>
              </div>
            </div>
          </div>
          <div className="Settings">
            <h2>Settings</h2>
            <div className="Options">
              <div className="Action" onClick={() => onThemeClick()}>
                <p>[t] </p><span>Toggle theme</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default OverlayPanel;