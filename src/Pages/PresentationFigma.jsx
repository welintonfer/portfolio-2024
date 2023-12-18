import "./css/style.css";

export default function PresentationFigma() {
  return (
    <>
      <div style={{ width: "100%", height: "100vh" }}>
        <iframe
          style={{
            width: "100%",
            height: "100%",
            border: "1px solid rgba(0, 0, 0, 0.1)",
          }}
          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FPJpSM9USbtZxJ8QVMMFOO0%2FHabitus-Health%3Fpage-id%3D43%253A3199%26type%3Ddesign%26node-id%3D43-3200%26viewport%3D1087%252C5700%252C0.45%26t%3DumavSh08SR5Ieug8-1%26scaling%3Dscale-down%26mode%3Ddesign"
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
}
