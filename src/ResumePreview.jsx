import "./index.css";

function ResumePreview({ person }) {
  return (
    <>
      <article className="p-4 prose prose-lg bg-base-200 border-base-300 rounded-box w-4xl border">
        <div className="flex flex-col items-start bg-base-100">
          <h1 className="w-full text-center">{person.personalFullName}</h1>
          <div className=" w-full flex justify-center gap-10">
            <p>{person.personalEmail}</p>
            <p>{person.personalPhone}</p>
          </div>
          <h2>Education</h2>
          <h3>Arizona State University</h3>
        </div>
      </article>
    </>
  );
}

export default ResumePreview;
