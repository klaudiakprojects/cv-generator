const { jsPDF } = window.jspdf;


let experienceDiv = document.getElementById("experience-div");
let experienceButton = document.getElementsByClassName("btn-experience")[0];
let educationDiv = document.getElementById("education-div");
let allEducationDiv = document.getElementById("all-education");
let educationButton = document.getElementsByClassName("btn-education")[0];
let experiences = document.getElementById("experiences");
let positionName = document.getElementsByClassName("position-name")[0];
let dateOfEmployment = document.getElementsByClassName("date-of-employment")[0];
let companyName = document.getElementsByClassName("company-name")[0];
let responsibilities = document.getElementsByClassName("responsibilities")[0];
let languagesButton = document.getElementById("languages-button");
let generatePdfButton = document.getElementById("generate-pdf");
let firstName = document.getElementsByClassName("first-name")[0];
let secondName = document.getElementsByClassName("second-name")[0];
let email = document.getElementsByClassName("e-mail")[0];
let phoneNumber = document.getElementsByClassName("phone-number")[0];
let languages = document.getElementsByClassName("language-choice")[0];
let buttonMoreResponsibilities = document.getElementsByClassName("add-more-responsibilities")[0];
let selectedLanguageLevel = document.getElementsByClassName("language-levels");
let selectedLanguageLevelValue = selectedLanguageLevel.value;
languagesButton.addEventListener("click", addLanguages);
let languagesDiv = document.getElementById("languages-div")
let allResponsibilities = document.getElementById("all-responsibilities");
let photo = document.getElementById("photo");
// let switchExperienceButtons = document.getElementsByClassName("switch-section-experience");
// let switchEducationButtons = document.getElementsByClassName("switch-section-education");


experienceButton.addEventListener("click", addMoreExperience);
generatePdfButton.addEventListener("click", generatePDF);
educationButton.addEventListener("click", addMoreEducation)



function addMoreExperience(event) {
  event.target.remove()
  let newExperienceDiv = document.createElement("div");
  newExperienceDiv.setAttribute("class", "new-experience-div");
  experiences.appendChild(newExperienceDiv);
  let newLabelForPositionName = document.createElement("label");
  newLabelForPositionName.innerHTML = "Position name: "
  newLabelForPositionName.setAttribute("class", "label-for-position-name");
  newExperienceDiv.appendChild(newLabelForPositionName);
  let newPositionName = document.createElement("input");
  newPositionName.setAttribute("class", "position-name");
  newExperienceDiv.appendChild(newPositionName);
  let newLabelForDate = document.createElement("label");
  newLabelForDate.innerHTML = "Date of employment:";
  newLabelForDate.setAttribute("class", "label-for-date");
  newExperienceDiv.appendChild(newLabelForDate);
  let newDateOfEmployment = document.createElement("input");
  newDateOfEmployment.setAttribute("class", "date-of-employment");
  newExperienceDiv.appendChild(newDateOfEmployment);
  let newLabelForCompanyName = document.createElement("label");
  newLabelForCompanyName.innerHTML = "Company name:";
  newLabelForCompanyName.setAttribute("class", "label-for-company-name");
  newExperienceDiv.appendChild(newLabelForCompanyName);
  let newCompanyName = document.createElement("input");
  newCompanyName.setAttribute("class", "company-name");
  newExperienceDiv.appendChild(newCompanyName);
  let newResponsibilitiesDiv = document.createElement("div");
  newResponsibilitiesDiv.setAttribute("class", "responsibility-input-div");
  newExperienceDiv.appendChild(newResponsibilitiesDiv);
  let newLabelForResponsibilities = document.createElement("label");
  newLabelForResponsibilities.innerHTML = "Responsibilities";
  newLabelForResponsibilities.setAttribute("class", "label-for-responsibilities");
  newResponsibilitiesDiv.appendChild(newLabelForResponsibilities);
  let newResponsibilities = document.createElement("input");
  newResponsibilities.setAttribute("class", "responsibilities");
  newResponsibilitiesDiv.appendChild(newResponsibilities);
  let newAddMoreExperienceButton = document.createElement("button");
  newAddMoreExperienceButton.setAttribute("class", "btn-experience");
  newAddMoreExperienceButton.innerHTML = "ADD another job"
  newExperienceDiv.appendChild(newAddMoreExperienceButton);
  newAddMoreExperienceButton.addEventListener("click", addMoreExperience);
  let deleteButton = document.createElement("button");
  deleteButton.innerHTML = "DELETE";
  deleteButton.setAttribute("class", "delete-button");
  newExperienceDiv.appendChild(deleteButton);




  deleteButton.addEventListener("click", deleteSection)
  function deleteSection() {
    deleteButton.parentNode.remove()
  }
}



function addLanguages() {
  let newLanguagesContainer = document.createElement("div");
  newLanguagesContainer.setAttribute("class", "language-container");
  languagesDiv.appendChild(newLanguagesContainer)
  let newLanguageChoice = document.createElement("input");
  newLanguageChoice.setAttribute("class", "new-language-choice");
  newLanguagesContainer.appendChild(newLanguageChoice);
  let newLanguagesLevels = document.createElement("select");
  newLanguagesLevels.setAttribute("class", "new-languages-level");
  newLanguagesContainer.appendChild(newLanguagesLevels);
  let a1Level = document.createElement("option");
  a1Level.setAttribute("class", "new-a1-level");
  a1Level.innerHTML = "A1";
  newLanguagesLevels.appendChild(a1Level);
  let a2Level = document.createElement("option");
  a2Level.setAttribute("class", "new-a2-level");
  a2Level.innerHTML = "A2";
  newLanguagesLevels.appendChild(a2Level);
  let b1Level = document.createElement("option");
  b1Level.setAttribute("class", "new-b1-level");
  b1Level.innerHTML = "B1";
  newLanguagesLevels.appendChild(b1Level);
  let b2Level = document.createElement("option");
  b2Level.setAttribute("class", "new-b2-level");
  b2Level.innerHTML = "B2";
  newLanguagesLevels.appendChild(b2Level);
  let c1Level = document.createElement("option");
  c1Level.setAttribute("class", "new-c1-level");
  c1Level.innerHTML = "C1";
  newLanguagesLevels.appendChild(c1Level);
  let c2Level = document.createElement("option");
  c2Level.setAttribute("class", "new-c2-level");
  c2Level.innerHTML = "C2";
  newLanguagesLevels.appendChild(c2Level);
  newLanguagesContainer.appendChild(languagesButton)
}

function addToCVGenerator() {
  let containerCV = document.createElement("div");
  containerCV.setAttribute("class", "container-cv");

  let firstNameCV = document.createElement("span");
  firstNameCV.setAttribute("class", "first-name-cv");
  firstNameCV.innerHTML = firstName.value;
  containerCV.appendChild(firstNameCV);

  let secondNameCV = document.createElement("span");
  secondNameCV.setAttribute("class", "second-name-cv");
  secondNameCV.innerHTML = secondName.value;
  containerCV.appendChild(secondNameCV);

  let emailCV = document.createElement("span");
  emailCV.setAttribute("class", "email-cv");
  emailCV.innerHTML = email.value;
  containerCV.append(emailCV);

  let phoneNumberCV = document.createElement("span");
  phoneNumberCV.setAttribute("class", "phone-number-cv");
  phoneNumberCV.innerHTML = phoneNumber.value;
  containerCV.appendChild(phoneNumberCV);

  let experienceContainerCV = document.createElement("div");
  experienceContainerCV.setAttribute("class", "experience-container-cv");
  containerCV.appendChild(experienceContainerCV);

  let educationContainerCV = document.createElement("div");
  educationContainerCV.setAttribute("class", "education-container-cv");
  containerCV.appendChild(educationContainerCV);
  // let universityNameCV = document.createElement("span");
  // universityNameCV.setAttribute("class", "university-name-cv");
  // universityNameCV.innerHTML = universityName.value;
  // educationContainerCV.appendChild(universityNameCV);
  // let universityDateCV = document.createElement("span");
  // universityDateCV.setAttribute("class", "university-date-cv");
  // universityDateCV.innerHTML = universityDate.value;
  // educationContainerCV.appendChild(universityDateCV);
  // let fieldOfStudyCV = document.createElement("span");
  // fieldOfStudyCV.setAttribute("class", "field-of-study-cv");
  // fieldOfStudyCV.innerHTML = fieldOfStudy.value;
  // educationContainerCV.appendChild(fieldOfStudyCV)
  let languagesContainerCV = document.createElement("div");
  languagesContainerCV.setAttribute("class", "languages-container-cv");
  containerCV.appendChild(languagesContainerCV);


  let allExperience = document.getElementById("experiences").getElementsByClassName("new-experience-div");

  for (let i = 0; i < allExperience.length; i++) {

    let divForNewExperiences = document.createElement("div");
    experienceContainerCV.appendChild(divForNewExperiences)

    let positionNameVal = allExperience[i].getElementsByClassName("position-name")[0].value
    let dateOfEmploymentVal = allExperience[i].getElementsByClassName("date-of-employment")[0].value;
    let companyNameVal = allExperience[i].getElementsByClassName("company-name")[0].value;

    let spanForPositionName = document.createElement("span");
    spanForPositionName.textContent = positionNameVal;

    let spanForDateOfEmployment = document.createElement("span");
    spanForDateOfEmployment.textContent = dateOfEmploymentVal;

    let spanForCompanyName = document.createElement("span");
    spanForCompanyName.textContent = companyNameVal;

    divForNewExperiences.appendChild(spanForPositionName);
    divForNewExperiences.appendChild(spanForDateOfEmployment);
    divForNewExperiences.appendChild(spanForCompanyName);


    for (let y = 0; y < allExperience[i].getElementsByClassName("responsibilities").length; y++) {
      let responsibilityVal = allExperience[i].getElementsByClassName("responsibilities")[y].value;
      let resposibilitySpan = document.createElement("span");
      resposibilitySpan.textContent = responsibilityVal;
      divForNewExperiences.appendChild(resposibilitySpan);
    }

  }

  let allEducation = document.getElementById("all-education").getElementsByClassName("education-div");
  for (let x = 0; x < allEducation.length; x++) {
    let divForNewEducation = document.createElement("div");
    educationContainerCV.appendChild(divForNewEducation);

    let universityNameVal = allEducation[x].getElementsByClassName("uni-name")[0].value;
    let dateOfAttendingUniversityVal = allEducation[x].getElementsByClassName("uni-date")[0].value;
    let fieldOfStudyVal = allEducation[x].getElementsByClassName("field-of-study")[0].value;

    let spanForUniversityName = document.createElement("span");
    spanForUniversityName.textContent = universityNameVal;

    let spanForUniverstyDate = document.createElement("span");
    spanForUniverstyDate.textContent = dateOfAttendingUniversityVal;

    let spanForFieldOfStudy = document.createElement("span");
    spanForFieldOfStudy.textContent = fieldOfStudyVal;

    divForNewEducation.appendChild(spanForUniversityName);
    divForNewEducation.appendChild(spanForUniverstyDate);
    divForNewEducation.appendChild(spanForFieldOfStudy);

  }

  let allLanguages = document.getElementById("languages-div").getElementsByClassName("language-container");
  for (let v = 0; v < allLanguages.length; v++) {
    let divForNewLanguage = document.createElement("div");
    languagesContainerCV.appendChild(divForNewLanguage);

    let languageNameVal = allLanguages[v].getElementsByClassName("language-choice")[0].value;
    console.log(languageNameVal);
    let languageLevelVal = allLanguages[v].getElementsByClassName("language-levels")[0].value;

    let spanForLanguage = document.createElement("span");
    spanForLanguage.textContent = languageNameVal + " " + languageLevelVal;

    divForNewLanguage.appendChild(spanForLanguage);
  }


  console.log(containerCV)
  return containerCV
}

buttonMoreResponsibilities.addEventListener("click", addMoreResponsibilities)

function addMoreResponsibilities() {
  buttonMoreResponsibilities.remove();

  let newInputDiv = document.createElement("div");
  newInputDiv.setAttribute("class", "responsibility-input-div");
  allResponsibilities.appendChild(newInputDiv);
  let newInputForResponsibility = document.createElement("input");
  newInputForResponsibility.setAttribute("class", "responsibilities");
  newInputDiv.appendChild(newInputForResponsibility);

  let deleteResponsibilitiesBtn = document.createElement("button");
  deleteResponsibilitiesBtn.setAttribute("class", "delete-responsibilities");
  deleteResponsibilitiesBtn.innerHTML = "DELETE";
  newInputDiv.appendChild(deleteResponsibilitiesBtn);

  // experienceDiv.appendChild(newInputDiv);
  experienceDiv.appendChild(buttonMoreResponsibilities);
  experienceDiv.appendChild(experienceButton);

  deleteResponsibilitiesBtn.addEventListener("click", deleteResponsibilities);


}
function deleteResponsibilities(e) {
  e.target.parentNode.remove();
}
function addMoreEducation(event) {
  event.target.remove()
  let newEducationDiv = document.createElement("div");
  newEducationDiv.setAttribute("class", "education-div");
  allEducationDiv.appendChild(newEducationDiv);
  let newLabelForUniName = document.createElement("label");
  newLabelForUniName.innerHTML = "University name:";
  newLabelForUniName.setAttribute("class", "label-uni-name");
  newEducationDiv.appendChild(newLabelForUniName);
  let newInputForUniversityName = document.createElement("input");
  newInputForUniversityName.setAttribute("class", "uni-name");
  newEducationDiv.appendChild(newInputForUniversityName);
  let newLabelForDateOfUni = document.createElement("label");
  newLabelForDateOfUni.setAttribute("class", "label-date-of-uni");
  newLabelForDateOfUni.innerHTML = "Date of attending university:";
  newEducationDiv.appendChild(newLabelForDateOfUni);
  let newInputForDateOfUni = document.createElement("input");
  newInputForDateOfUni.setAttribute("class", "uni-date");
  newEducationDiv.appendChild(newInputForDateOfUni);
  let newLabelForFieldOfStudy = document.createElement("label");
  newLabelForFieldOfStudy.setAttribute("class", "label-field-of-study");
  newLabelForFieldOfStudy.innerHTML = "Field of study:";
  newEducationDiv.appendChild(newLabelForFieldOfStudy);
  let newInputForFieldOfStudy = document.createElement("input");
  newInputForFieldOfStudy.setAttribute("class", "field-of-study");
  newEducationDiv.appendChild(newInputForFieldOfStudy)
  let newButtonEducation = document.createElement("button");
  newButtonEducation.setAttribute("class", "btn-education")
  newButtonEducation.innerHTML = "ADD MORE";
  newEducationDiv.appendChild(newButtonEducation);
  let deleteButton = document.createElement("button");
  deleteButton.innerHTML = "DELETE";
  deleteButton.setAttribute("class", "delete-button");
  newEducationDiv.appendChild(deleteButton);

  newButtonEducation.addEventListener("click", addMoreEducation);

  deleteButton.addEventListener("click", deleteSection)
  function deleteSection() {
    deleteButton.parentNode.remove();
  }
}



function generatePDF() {
  const doc = new jsPDF();

  let html = addToCVGenerator().innerHTML;

  let canvas = document.createElement('canvas');
  canvas.width = doc.internal.pageSize.getWidth();
  canvas.height = doc.internal.pageSize.getHeight();
  let ctx = canvas.getContext('2d');
  ctx.fillStyle = "#fffbe2";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  let img = new Image();
  img.onload = function () {
    ctx.drawImage(img, 0, 0);
    doc.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, doc.internal.pageSize.getWidth(), doc.internal.pageSize.getHeight());

    // Add HTML content after the image is added to the PDF
    doc.fromHTML(html, 15, 15, {
      'width': 170
    });

    // Save the PDF file
    doc.save('cv.pdf');
  };
  img.src = 'path/to/image.png';
};


