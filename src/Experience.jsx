import './index.css';

function Experience() {
  return (
    <>
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <legend className="fieldset-legend">Experience</legend>

        <fieldset className="fieldset">
          <legend className="fieldset-legend">Job Title</legend>
          <input
            type="text"
            className="input"
            placeholder="IT Intern"
            id="job1Title"
          />
        </fieldset>

        <fieldset className="fieldset">
          <legend className="fieldset-legend">Company</legend>
          <input
            type="text"
            className="input"
            placeholder="OneCall"
            id="job1CompanyName"
          />
        </fieldset>

        <fieldset className="fieldset">
          <legend className="fieldset-legend">Start Date</legend>
          <input type="date" className="input" id="job1StartDate" />
        </fieldset>

        <fieldset className="fieldset">
          <legend className="fieldset-legend">End Date</legend>
          <input type="date" className="input" id="job1EndDate" />
        </fieldset>

        <fieldset className="fieldset">
          <legend className="fieldset-legend">Job Responsibilities</legend>
          <textarea
            className="textarea h-24"
            placeholder="Did things in C#"
          ></textarea>
        </fieldset>

        <div className="divider"></div>

        <fieldset className="fieldset">
          <legend className="fieldset-legend">Job Title</legend>
          <input
            type="text"
            className="input"
            placeholder="Server Assistant"
            id="job2Title"
          />
        </fieldset>

        <fieldset className="fieldset">
          <legend className="fieldset-legend">Company</legend>
          <input
            type="text"
            className="input"
            placeholder="Top Shelf"
            id="job2CompanyName"
          />
        </fieldset>

        <fieldset className="fieldset">
          <legend className="fieldset-legend">Start Date</legend>
          <input type="date" className="input" id="job2StartDate" />
        </fieldset>

        <fieldset className="fieldset">
          <legend className="fieldset-legend">End Date</legend>
          <input type="date" className="input" id="job2EndDate" />
        </fieldset>

        <fieldset className="fieldset">
          <legend className="fieldset-legend">Job Responsibilities</legend>
          <textarea
            className="textarea h-24"
            placeholder="Cleaned tables, put away dishes"
          ></textarea>
        </fieldset>
      </fieldset>
    </>
  );
}

export default Experience;
