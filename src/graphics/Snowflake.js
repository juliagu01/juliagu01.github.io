import './Snowflake.css';

function Snowflake() {
  return (
    <>
      <div className="Snowflakes">
        {[-90, -75].map((radius, number) =>
          <div className="Snowflake" key={"Snowflake" + number}>
            {[0, 60, 120, 180, 240, 300].map((element, index) =>
              <div className="SnowflakeSpoke" key={"Snowflake" + number + "_Spoke" + index} style={{ transform: `rotate(${element}deg) translateY(${radius}px)` }}>
                <div className="SnowflakeSpokeMain"></div>
                <div className="SnowflakeSpokeAccent"></div>
              </div>
            )}
          </div>
        )}
        <div id="DefaultSnowflake">
          {[0, 60, 120, 180, 240, 300].map((element, index) =>
            <div className="SnowflakeSpoke" key={"DefaultSnowflakeSpoke" + index} style={{ transform: `rotate(${element}deg) translateY(-60px)` }}>
              <div className="SnowflakeSpokeMain"></div>
              <div className="SnowflakeSpokeAccent"></div>
            </div>
          )}
        </div>
        {[-45, -30].map((radius, number) =>
          <div className="Snowflake" key={"Snowflake" + number}>
            {[0, 60, 120, 180, 240, 300].map((element, index) =>
              <div className="SnowflakeSpoke" key={"Snowflake" + number + "_Spoke" + index} style={{ transform: `rotate(${element}deg) translateY(${radius}px)` }}>
                <div className="SnowflakeSpokeMain"></div>
                <div className="SnowflakeSpokeAccent"></div>
              </div>
            )}
          </div>
        )}
      </div>
      <div id="MainSnowflake">
        {[30, 90, 150, 210, 270, 330].map((element, index) =>
          <div className="MainSnowflakeSpoke" style={{ transform: `rotate(${element}deg) translateY(-5px)` }}>
            <div className="SnowflakeSpokeBody" key={"SnowflakeSpokeBody" + index}></div>
            <div className="SnowflakeSpokeLeft" key={"SnowflakeSpokeLeft" + index}></div>
            <div className="SnowflakeSpokeRight" key={"SnowflakeSpokeRight" + index}></div>
          </div>
        )}
      </div>
    </>
  );
}

export default Snowflake;