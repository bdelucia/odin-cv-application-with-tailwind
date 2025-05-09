import "./index.css";

function ResumePreview({ person }) {
  return (
    <>
      <article className="p-2 transition-[border-radius] duration-500 linear prose prose-lg bg-base-200 border-secondary rounded-box w-4xl border">
        <div className="flex flex-col items-start bg-base-100 p-4">
          <h1 className="w-full text-center">{person.personalFullName}</h1>
          <div className=" w-full flex justify-center gap-10">
            <p>{person.personalEmail}</p>
            <p>{person.personalPhone}</p>
          </div>
          <div className="prose">
            <h2>Education</h2>
          </div>
          <div className="flex justify-between w-full items-center not-prose">
            <h3>Arizona State University</h3>
            <h3>02/2025-02/2029</h3>
          </div>
        </div>
      </article>
    </>
  );
}

export default ResumePreview;
