import "./index.css";

function Education({ education, setEducation }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEducation((prevEducation) => ({
      ...prevEducation,
      [name]: value,
    }));
  };

  const handleEditClick = () => {
    const schoolName = document.querySelector("input[name=schoolName]");
    const degree = document.querySelector("input[name=degree]");
    const startDate = document.querySelector("input[name=startDate]");
    const endDate = document.querySelector("input[name=endDate]");

    schoolName.value = education.schoolName;
    degree.value = education.degree;
    startDate.value = education.startDate;
    endDate.value = education.endDate;

    schoolName.removeAttribute("disabled");
    degree.removeAttribute("disabled");
    startDate.removeAttribute("disabled");
    endDate.removeAttribute("disabled");

    const editBtn = document.getElementById("educationEditBtn");
    editBtn.classList.add("btn-disabled");

    const saveBtn = document.getElementById("educationSaveBtn");
    saveBtn.classList.remove("hidden");
  };

  const handleSaveChange = () => {
    const schoolName = document.querySelector("input[name=schoolName]");
    const degree = document.querySelector("input[name=degree]");
    const startDate = document.querySelector("input[name=startDate]");
    const endDate = document.querySelector("input[name=endDate]");
    const saveBtn = document.getElementById("educationSaveBtn");
    const editBtn = document.getElementById("educationEditBtn");

    schoolName.setAttribute("disabled", "true");
    degree.setAttribute("disabled", "true");
    startDate.setAttribute("disabled", "true");
    endDate.setAttribute("disabled", "true");
    saveBtn.classList.add("hidden");
    editBtn.classList.remove("btn-disabled");

    setEducation({
      schoolName: schoolName.value,
      degree: degree.value,
      startDate: startDate.value || "YYYY-MM-DD",
      endDate: endDate.value || "YYYY-MM-DD",
    });
  };

  return (
    <>
      <fieldset className="fieldset transition-[border-radius] duration-500 linear bg-base-200 border-secondary rounded-box w-xl border p-4 flex flex-col items-start">
        <legend className="fieldset-legend">Education</legend>

        <fieldset className="fieldset">
          <legend className="fieldset-legend">University</legend>
          <label className="input validator">
            <input
              type="text"
              className="input border-none focus:outline-none focus:ring-0 p-0"
              name="schoolName"
              value={education.schoolName}
              onChange={handleChange}
              required
              disabled
              placeholder="Arizona State University"
              id="educationUniName"
              minLength={4}
            />
          </label>
          <div className="validator-hint hidden">
            Name has to be at least 4 characters long
          </div>
        </fieldset>

        <fieldset className="fieldset">
          <legend className="fieldset-legend">Degree Name</legend>
          <label className="input validator">
            <input
              type="text"
              className="input border-none focus:outline-none focus:ring-0 p-0"
              name="degree"
              value={education.degree}
              onChange={handleChange}
              required
              disabled
              placeholder="Computer Science"
              id="educationDegreeName"
              minLength={4}
            />
          </label>
          <div className="validator-hint hidden">
            Name has to be at least 4 characters long
          </div>
        </fieldset>

        <div className="flex flex-row">
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Start Date</legend>
            <input
              type="date"
              className="input w-40"
              name="startDate"
              onChange={handleChange}
              value={education.startDate}
              required
              disabled
              id="educationStartDate"
            />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">End Date</legend>
            <input
              type="date"
              className="input w-40"
              name="endDate"
              onChange={handleChange}
              value={education.endDate}
              required
              disabled
              id="educationEndDate"
            />
          </fieldset>
        </div>
        <div className="flex flex-row gap-2" id="educationBtnContainer">
          <button
            className="btn btn-accent"
            id="educationEditBtn"
            onClick={handleEditClick}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
              />
            </svg>
            Edit
          </button>
          <button
            className="btn btn-primary hidden"
            id="educationSaveBtn"
            onClick={handleSaveChange}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            Save
          </button>
        </div>
      </fieldset>
    </>
  );
}

export default Education;
