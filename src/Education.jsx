import "./index.css";

function Education() {
  return (
    <>
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xl border p-4 flex flex-col items-start">
        <legend className="fieldset-legend">Education</legend>

        <fieldset className="fieldset">
          <legend className="fieldset-legend">University</legend>
          <label className="input validator">
            <input
              type="text"
              className="input border-none focus:outline-none focus:ring-0 p-0"
              placeholder="Arizona State University"
              id="educationUniName"
              minLength={4}
            />
          </label>
          <div className="validator-hint hidden">
            University name has to be at least 4 characters long
          </div>
        </fieldset>

        <fieldset className="fieldset">
          <legend className="fieldset-legend">Degree Name</legend>
          <label className="input validator">
            <input
              type="text"
              className="input border-none focus:outline-none focus:ring-0 p-0"
              placeholder="Computer Science"
              id="educationDegreeName"
              minLength={4}
            />
          </label>
          <div className="validator-hint hidden">
            Degree name has to be at least 4 characters long
          </div>
        </fieldset>

        <div className="flex flex-row">
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Start Date</legend>
            <input type="date" className="input w-40" id="educationStartDate" />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">End Date</legend>
            <input type="date" className="input w-40" id="educationEndDate" />
          </fieldset>
        </div>
      </fieldset>
    </>
  );
}

export default Education;
