export default function Home() {
  return (
    <div className="landing">
      <div className="glow" />
      <div className="content">
        <h1 className="title">
          jaimes<span className="dot reveal" style={{"--i":0}}>.</span><span className="reveal" style={{"--i":1}}>i</span><span className="reveal" style={{"--i":2}}>o</span>
        </h1>
        <div className="divider" />
        <p className="tagline">software · systems</p>
      </div>
    </div>
  );
}
