import "./index.css";

function Experience() {
  return (
    <>
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xl border p-4 flex flex-col items-start">
        <legend className="fieldset-legend">Experience</legend>

        <fieldset className="fieldset">
          <legend className="fieldset-legend">Job Title</legend>
          <label className="input validator">
            <input
              type="text"
              className="input border-none focus:outline-none focus:ring-0 p-0"
              required
              placeholder="IT Intern"
              id="job1Title"
              minLength={1}
              maxLength={50}
            />
          </label>
          <div className="validator-hint hidden">
            Title has to be at least 1 characters long
          </div>
        </fieldset>

        <fieldset className="fieldset">
          <legend className="fieldset-legend">Company</legend>
          <label className="input validator">
            <input
              type="text"
              className="input border-none focus:outline-none focus:ring-0 p-0"
              required
              placeholder="OneCall"
              id="job1CompanyName"
              minLength={1}
              maxLength={50}
            />
          </label>
          <div className="validator-hint hidden">
            Name has to be at least 1 character long
          </div>
        </fieldset>

        <div className="flex flex-row">
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Start Date</legend>
            <input type="date" className="input w-40" id="job1StartDate" />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">End Date</legend>
            <input type="date" className="input w-40" id="job1EndDate" />
          </fieldset>
        </div>

        <fieldset className="fieldset">
          <legend className="fieldset-legend">Job Responsibilities</legend>
          <textarea
            className="textarea h-24 w-lg"
            placeholder="Did things in C#"
          ></textarea>
        </fieldset>

        <div className="divider"></div>

        <fieldset className="fieldset">
          <legend className="fieldset-legend">Job Title</legend>
          <label className="input validator">
            <input
              type="text"
              className="input border-none focus:outline-none focus:ring-0 p-0"
              required
              placeholder="Server Assistant"
              id="job2Title"
              minLength={1}
              maxLength={50}
            />
          </label>
          <div className="validator-hint hidden">
            Title has to be at least 1 character long
          </div>
        </fieldset>

        <fieldset className="fieldset">
          <legend className="fieldset-legend">Company</legend>
          <label className="input validator">
            <input
              type="text"
              className="input border-none focus:outline-none focus:ring-0 p-0"
              required
              placeholder="Top Shelf"
              id="job2CompanyName"
              minLength={1}
              maxLength={50}
            />
          </label>
          <div className="validator-hint hidden">
            Name has to be at least 1 character long
          </div>
        </fieldset>

        <div className="flex flex-row">
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Start Date</legend>
            <input type="date" className="input w-40" id="job2StartDate" />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">End Date</legend>
            <input type="date" className="input w-40" id="job2EndDate" />
          </fieldset>
        </div>

        <fieldset className="fieldset">
          <legend className="fieldset-legend">Job Responsibilities</legend>
          <textarea
            className="textarea h-24 w-lg"
            placeholder="Cleaned tables, put away dishes"
          ></textarea>
        </fieldset>
      </fieldset>
    </>
  );
}

export default Experience;
