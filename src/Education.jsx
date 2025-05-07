import "./index.css";

function Education() {
  return (
    <>
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xl border p-4 flex flex-col items-start text-center">
        <legend className="fieldset-legend">Education</legend>

        <fieldset className="fieldset">
          <legend className="fieldset-legend">University</legend>
          <input
            type="text"
            className="input w-xs"
            placeholder="Arizona State University"
            id="educationUniName"
          />
        </fieldset>

        <fieldset className="fieldset">
          <legend className="fieldset-legend">Degree Name</legend>
          <input
            type="text"
            className="input w-xs"
            placeholder="Computer Science"
            id="educationDegreeName"
          />
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
