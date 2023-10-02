import './Content.css';

function Content({text}) {
  return (
    <div className="Content">
      <div className="Text">
        <h1 className="Heading">{text.heading}</h1>
        <div className="Description">
          {text.description.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
        </div>
      </div>
      <div className="Image">{text.img}</div>
    </div>
  );
}

export default Content;