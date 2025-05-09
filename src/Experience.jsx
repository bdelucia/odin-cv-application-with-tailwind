import "./index.css";

function Experience({
  experience1,
  setExperience1,
  experience2,
  setExperience2,
}) {
  const handleChange1 = (e) => {
    const { name, value } = e.target;
    setExperience1((prevExperience) => ({
      ...prevExperience,
      [name]: value,
    }));
  };

  const handleChange2 = (e) => {
    const { name, value } = e.target;
    setExperience2((prevExperience) => ({
      ...prevExperience,
      [name]: value,
    }));
  };

  const handleEditClick1 = () => {
    const jobTitle = document.getElementById("job1Title");
    const companyName = document.getElementById("job1CompanyName");
    const startDate = document.getElementById("job1StartDate");
    const endDate = document.getElementById("job1EndDate");
    const description = document.getElementById("job1Description");

    jobTitle.removeAttribute("disabled");
    companyName.removeAttribute("disabled");
    startDate.removeAttribute("disabled");
    endDate.removeAttribute("disabled");
    description.removeAttribute("disabled");

    const editBtn = document.getElementById("experience1EditBtn");
    editBtn.classList.add("btn-disabled");

    const saveBtn = document.getElementById("experience1SaveBtn");
    saveBtn.classList.remove("hidden");
  };

  const handleSaveChange1 = () => {
    const jobTitle = document.getElementById("job1Title");
    const companyName = document.getElementById("job1CompanyName");
    const startDate = document.getElementById("job1StartDate");
    const endDate = document.getElementById("job1EndDate");
    const description = document.getElementById("job1Description");

    jobTitle.value = experience1.jobTitle;
    companyName.value = experience1.companyName;
    startDate.value = experience1.startDate;
    endDate.value = experience1.endDate;
    description.value = experience1.description;

    jobTitle.setAttribute("disabled", "true");
    companyName.setAttribute("disabled", "true");
    startDate.setAttribute("disabled", "true");
    endDate.setAttribute("disabled", "true");
    description.setAttribute("disabled", "true");

    const editBtn = document.getElementById("experience1EditBtn");
    editBtn.classList.remove("btn-disabled");
    const saveBtn = document.getElementById("experience1SaveBtn");
    saveBtn.classList.add("hidden");

    setExperience1({
      jobTitle: jobTitle.value,
      companyName: companyName.value,
      startDate: startDate.value || "YYYY-MM-DD",
      endDate: endDate.value || "YYYY-MM-DD",
      description: description.value,
    });
  };

  const handleEditClick2 = () => {
    const jobTitle = document.getElementById("job2Title");
    const companyName = document.getElementById("job2CompanyName");
    const startDate = document.getElementById("job2StartDate");
    const endDate = document.getElementById("job2EndDate");
    const description = document.getElementById("job2Description");

    jobTitle.removeAttribute("disabled");
    companyName.removeAttribute("disabled");
    startDate.removeAttribute("disabled");
    endDate.removeAttribute("disabled");
    description.removeAttribute("disabled");

    const editBtn = document.getElementById("experience2EditBtn");
    editBtn.classList.add("btn-disabled");

    const saveBtn = document.getElementById("experience2SaveBtn");
    saveBtn.classList.remove("hidden");
  };

  const handleSaveChange2 = () => {
    const jobTitle = document.getElementById("job2Title");
    const companyName = document.getElementById("job2CompanyName");
    const startDate = document.getElementById("job2StartDate");
    const endDate = document.getElementById("job2EndDate");
    const description = document.getElementById("job2Description");

    jobTitle.value = experience2.jobTitle;
    companyName.value = experience2.companyName;
    startDate.value = experience2.startDate;
    endDate.value = experience2.endDate;
    description.value = experience2.description;

    jobTitle.setAttribute("disabled", "true");
    companyName.setAttribute("disabled", "true");
    startDate.setAttribute("disabled", "true");
    endDate.setAttribute("disabled", "true");
    description.setAttribute("disabled", "true");

    const editBtn = document.getElementById("experience2EditBtn");
    editBtn.classList.remove("btn-disabled");
    const saveBtn = document.getElementById("experience2SaveBtn");
    saveBtn.classList.add("hidden");

    setExperience2({
      jobTitle: jobTitle.value,
      companyName: companyName.value,
      startDate: startDate.value || "YYYY-MM-DD",
      endDate: endDate.value || "YYYY-MM-DD",
      description: description.value,
    });
  };

  return (
    <>
      <fieldset className="fieldset transition-[border-radius] duration-500 linear bg-base-200 border-secondary rounded-box w-xl border p-4 flex flex-col items-start">
        <legend className="fieldset-legend">Experience</legend>

        <fieldset className="fieldset">
          <legend className="fieldset-legend">Job Title</legend>
          <label className="input validator">
            <input
              type="text"
              className="input border-none focus:outline-none focus:ring-0 p-0"
              name="jobTitle"
              onChange={handleChange1}
              value={experience1.jobTitle}
              required
              id="job1Title"
              minLength={1}
              maxLength={50}
              disabled
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
              name="companyName"
              onChange={handleChange1}
              value={experience1.companyName}
              required
              id="job1CompanyName"
              minLength={1}
              maxLength={50}
              disabled
            />
          </label>
          <div className="validator-hint hidden">
            Name has to be at least 1 character long
          </div>
        </fieldset>

        <div className="flex flex-row">
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Start Date</legend>
            <input
              type="date"
              className="input w-40"
              name="startDate"
              value={experience1.startDate}
              onChange={handleChange1}
              id="job1StartDate"
              disabled
            />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">End Date</legend>
            <input
              type="date"
              className="input w-40"
              name="endDate"
              value={experience1.endDate}
              onChange={handleChange1}
              id="job1EndDate"
              disabled
            />
          </fieldset>
        </div>

        <fieldset className="fieldset">
          <legend className="fieldset-legend">Job Responsibilities</legend>
          <textarea
            className="textarea h-24 w-lg"
            name="description"
            id="job1Description"
            value={experience1.description}
            onChange={handleChange1}
            disabled
          ></textarea>
        </fieldset>

        <div className="flex flex-row gap-2" id="experienceBtnContainer">
          <button
            className="btn btn-accent"
            id="experience1EditBtn"
            onClick={handleEditClick1}
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
            id="experience1SaveBtn"
            onClick={handleSaveChange1}
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

        <div className="divider"></div>

        <fieldset className="fieldset">
          <legend className="fieldset-legend">Job Title</legend>
          <label className="input validator">
            <input
              type="text"
              className="input border-none focus:outline-none focus:ring-0 p-0"
              required
              name="jobTitle"
              onChange={handleChange2}
              value={experience2.jobTitle}
              id="job2Title"
              minLength={1}
              maxLength={50}
              disabled
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
              name="companyName"
              onChange={handleChange2}
              value={experience2.companyName}
              required
              id="job2CompanyName"
              minLength={1}
              maxLength={50}
              disabled
            />
          </label>
          <div className="validator-hint hidden">
            Name has to be at least 1 character long
          </div>
        </fieldset>

        <div className="flex flex-row">
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Start Date</legend>
            <input
              type="date"
              className="input w-40"
              name="startDate"
              value={experience2.startDate}
              onChange={handleChange2}
              id="job2StartDate"
              disabled
            />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">End Date</legend>
            <input
              type="date"
              className="input w-40"
              name="endDate"
              value={experience2.endDate}
              onChange={handleChange2}
              id="job2EndDate"
              disabled
            />
          </fieldset>
        </div>

        <fieldset className="fieldset">
          <legend className="fieldset-legend">Job Responsibilities</legend>
          <textarea
            className="textarea h-24 w-lg"
            name="description"
            value={experience2.description}
            onChange={handleChange2}
            id="job2Description"
            disabled
          ></textarea>
        </fieldset>

        <div className="flex flex-row gap-2" id="experienceBtnContainer">
          <button
            className="btn btn-accent"
            id="experience2EditBtn"
            onClick={handleEditClick2}
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
            id="experience2SaveBtn"
            onClick={handleSaveChange2}
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

export default Experience;
