import "./index.css";

function ResumePreview() {
  return (
    <>
      <article className="p-4 prose lg:prose-xl bg-base-200 border-base-300 rounded-box w-4xl border">
        <div className="flex flex-col items-start bg-base-100">
          <h1 className="w-full text-center">Main Title</h1>
          <p>This is the introductory paragraph of your document.</p>
          <p>This is the introductory paragraph of your document.</p>
          <h2>Subheading</h2>
          <p>Additional content goes here.</p>
        </div>
      </article>
    </>
  );
}

export default ResumePreview;
