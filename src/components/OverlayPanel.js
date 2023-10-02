import './OverlayPanel.css';

function OverlayPanel({ show, onOverlayClick, onPageClick, onThemeClick }) {
  if (show)
    return (
      <div className="OverlayPanel">
        <div className="Overlay" onClick={() => onOverlayClick()}></div>
        <div className="Panel">
          <div className="Menu"> 
            <h1>Menu</h1>
            <div className="Options">
              <div className="Action" onClick={() => onPageClick("Home")}>
                <p>[h] <span>Hello there!</span></p>
              </div>
              <div className="Action" onClick={() => onPageClick("Projects")}>
                <p>[p] <span>Projects</span></p>
              </div>
              <div className="Action" onClick={() => onPageClick("Contact")}>
                <p>[c] <span>Contact</span></p>
              </div>
            </div>
          </div>
          <div className="Settings">
            <h1>Settings</h1>
            <div className="Options">
              <div className="Action" onClick={() => onThemeClick()}>
                <p>[t] <span>Toggle theme</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default OverlayPanel;