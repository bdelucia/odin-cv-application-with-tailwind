import "./index.css";
import { useState } from "react";
import saveIcon from "./assets/save.svg";
function PersonalInfo() {
  const [person, setPerson] = useState({
    fullName: "Todd Howard",
    email: "mail@site.com",
    phone: "123-456-7890",
  });

  const handleEditClick = () => {
    const fullName = document.querySelector("input[name=personalFullName]");
    const email = document.querySelector("input[name=personalEmail]");
    const phone = document.querySelector("input[name=personalPhone]");

    fullName.value = person.fullName;
    email.value = person.email;
    phone.value = person.phone;

    fullName.removeAttribute("readonly");
    email.removeAttribute("readonly");
    phone.removeAttribute("readonly");

    const editBtn = document.getElementById("personalInfoEditBtn");
    editBtn.classList.add("btn-disabled");

    const personalInfoBtnContainer = document.getElementById(
      "personalInfoBtnContainer"
    );

    const saveBtn = document.createElement("button");
    saveBtn.classList.add("btn", "btn-accent");
    saveBtn.id = "personalInfoSaveBtn";
    const img = document.createElement("img");
    img.src = saveIcon;
    img.alt = "Save icon";
    img.classList.add("size-6");
    saveBtn.appendChild(img);
    saveBtn.appendChild(document.createTextNode("Save"));
    saveBtn.onclick = () => {
      handleSaveChange();
    };
    personalInfoBtnContainer.appendChild(saveBtn);
  };

  const handleSaveChange = () => {
    const fullName = document.querySelector("input[name=personalFullName]");
    const email = document.querySelector("input[name=personalEmail]");
    const phone = document.querySelector("input[name=personalPhone]");

    setPerson({
      fullName: fullName.value,
      email: email.value,
      phone: phone.value,
    });
  };

  return (
    <>
      <fieldset
        className="fieldset bg-base-200 border-base-300 rounded-box w-xl border p-4 flex flex-col items-start"
        id="personalInfoContainer"
      >
        <legend className="fieldset-legend">Personal Info</legend>

        <fieldset className="fieldset">
          <legend className="fieldset-legend">Full Name</legend>
          <label className="input validator">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </g>
            </svg>
            <input
              type="text"
              className="input border-none focus:outline-none w-full focus:ring-0 p-2"
              placeholder="Todd Howard"
              name="personalFullName"
              required
              minlength="5"
              pattern="^[a-zA-Z]+(?: [a-zA-Z]+)*$"
            />
          </label>
          <div className="validator-hint hidden">
            Name must be at least 5 characters long
          </div>
        </fieldset>

        <fieldset className="fieldset">
          <legend className="fieldset-legend">Email</legend>
          <label className="input validator">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </g>
            </svg>
            <input
              type="email"
              name="personalEmail"
              className="input border-none focus:outline-none focus:ring-0 p-2"
              placeholder="mail@site.com"
              required
            />
          </label>
          <div className="validator-hint hidden">
            Enter a valid email address
          </div>
        </fieldset>

        <fieldset className="fieldset">
          <legend className="fieldset-legend">Phone Number</legend>
          <label className="input validator">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
            >
              <g fill="none">
                <path
                  d="M7.25 11.5C6.83579 11.5 6.5 11.8358 6.5 12.25C6.5 12.6642 6.83579 13 7.25 13H8.75C9.16421 13 9.5 12.6642 9.5 12.25C9.5 11.8358 9.16421 11.5 8.75 11.5H7.25Z"
                  fill="currentColor"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6 1C4.61929 1 3.5 2.11929 3.5 3.5V12.5C3.5 13.8807 4.61929 15 6 15H10C11.3807 15 12.5 13.8807 12.5 12.5V3.5C12.5 2.11929 11.3807 1 10 1H6ZM10 2.5H9.5V3C9.5 3.27614 9.27614 3.5 9 3.5H7C6.72386 3.5 6.5 3.27614 6.5 3V2.5H6C5.44771 2.5 5 2.94772 5 3.5V12.5C5 13.0523 5.44772 13.5 6 13.5H10C10.5523 13.5 11 13.0523 11 12.5V3.5C11 2.94772 10.5523 2.5 10 2.5Z"
                  fill="currentColor"
                ></path>
              </g>
            </svg>
            <input
              type="tel"
              name="personalPhone"
              className="tabular-nums border-none focus:outline-none focus:ring-0 p-2"
              required
              placeholder="(123) 456-7890"
              pattern="[0-9]*"
              minlength="10"
              maxlength="10"
              title="Must be 10 digits"
            />
          </label>
          <p className="validator-hint">Must be 10 digits</p>
        </fieldset>
        <div className="flex flex-row gap-2" id="personalInfoBtnContainer">
          <button
            class="btn btn-accent"
            id="personalInfoEditBtn"
            onClick={handleEditClick}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
              />
            </svg>
            Edit
          </button>
        </div>
      </fieldset>
    </>
  );
}

export default PersonalInfo;
