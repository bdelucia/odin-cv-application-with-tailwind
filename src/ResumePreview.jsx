import "./index.css";

function ResumePreview({ person, education, experience1, experience2 }) {
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
          <div className="flex flex-col gap-1">
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
            <h2>Experience</h2>
            <div className="flex justify-between w-full items-center not-prose">
              <div className="prose-lg font-bold">
                <h3>{experience1.jobTitle}</h3>
              </div>
              <h3>
                {experience1.startDate} / {experience1.endDate}
              </h3>
            </div>
            <div className="italic font-normal not-prose">
              <p>{experience1.companyName}</p>
            </div>
            <div className="prose-lg">
              <p>{experience1.description}</p>
            </div>
            <div className="flex justify-between w-full items-center not-prose">
              <div className="prose-lg font-bold">
                <h3>{experience2.jobTitle}</h3>
              </div>
              <h3>
                {experience2.startDate} / {experience2.endDate}
              </h3>
            </div>
            <div className="italic font-normal not-prose">
              <p>{experience2.companyName}</p>
            </div>
            <div className="prose-lg">
              <p>{experience2.description}</p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}

export default ResumePreview;
