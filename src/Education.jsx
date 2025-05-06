import './index.css';

function Education() {
  return (
    <>
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <legend className="fieldset-legend">Education</legend>

        <fieldset className="fieldset">
          <legend className="fieldset-legend">University</legend>
          <input
            type="text"
            className="input"
            placeholder="Arizona State University"
            id="educationUniName"
          />
        </fieldset>

        <fieldset className="fieldset">
          <legend className="fieldset-legend">Degree Name</legend>
          <input
            type="text"
            className="input"
            placeholder="Computer Science"
            id="educationDegreeName"
          />
        </fieldset>

        <fieldset className="fieldset">
          <legend className="fieldset-legend">Start Date</legend>
          <input type="date" className="input" id="educationStartDate" />
        </fieldset>

        <fieldset className="fieldset">
          <legend className="fieldset-legend">End Date</legend>
          <input type="date" className="input" id="educationEndDate" />
        </fieldset>
      </fieldset>
    </>
  );
}

export default Education;
