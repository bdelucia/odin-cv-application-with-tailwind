import "./index.css";

function ResumePreview({ person, education }) {
  return (
    <>
      <article className="p-2 transition-[border-radius] duration-500 linear prose prose-lg bg-base-200 border-secondary rounded-box w-4xl border">
        <div className="flex flex-col items-start bg-base-100 p-4">
          <h1 className="w-full text-center">{person.personalFullName}</h1>
          <div className=" w-full flex justify-center gap-10 not-prose">
            <p>{person.personalEmail}</p>
            <p>{person.personalPhone}</p>
          </div>
          <h2>Education</h2>

          <div className="flex justify-between w-full items-center not-prose">
            <div className="prose-lg font-bold">
              <h3>{education.schoolName}</h3>
            </div>
            <h3>
              {education.startDate} / {education.endDate}
            </h3>
          </div>
          <div className="prose-lg italic">
            <p>{education.degree}</p>
          </div>
        </div>
      </article>
    </>
  );
}

export default ResumePreview;
