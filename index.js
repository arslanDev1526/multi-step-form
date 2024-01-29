let currentStep = 1;
const totalSteps = 5;

function showStep(stepNumber) {
  for (let i = 1; i <= totalSteps; i++) {
    const stepContent = document.getElementById(`step_${i}`);
    const stepCircle = document.getElementById(`circule_${i}`);

    if (stepContent || stepCircle) {
      stepContent.style.display = i === stepNumber ? "block" : "none";
      stepCircle.style.backgroundColor = i === stepNumber ? "red" : "";
    }
  }
}

function nextStep() {
  let inputs = document.getElementsByTagName("input");
  let validation = document.getElementsByClassName("validation");
  let isEmpty = false;

  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].value.trim() === "") {
      isEmpty = true;
      if (validation[i]) {
        validation[i].style.display = "block";
      }
    } else {
      if (validation[i] && validation[i].style) {
        validation[i].style.display = "none";
      isEmpty = false;

      }
    }
  }
 
  console.log (isEmpty, "isempty")

    if (!isEmpty && currentStep < totalSteps) {
      currentStep++;
      showStep(currentStep);
  }
}

function previousStep() {
  if (currentStep > 1) {
    currentStep--;
    showStep(currentStep);
  }
}

function toggleCards() {
  var monthlyCards = document.getElementById("monthly_cards");
  var yearlyCards = document.getElementById("yearly_cards");
  var month = document.querySelector(".month");
  var year = document.querySelector(".year");

  if (monthlyCards.style.display === "none") {
    monthlyCards.style.display = "flex";
    yearlyCards.style.display = "none";
    month.style.color = "red";
    year.style.color = "";
  } else {
    monthlyCards.style.display = "none";
    yearlyCards.style.display = "flex";
    month.style.color = "";
    year.style.color = "green";
  }
}
