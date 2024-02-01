let currentStep = 1;
const totalSteps = 5;

function showStep(stepNumber) {
  for (let i = 1; i <= totalSteps; i++) {
    const stepContent = document.getElementById(`step_${i}`);
    const stepCircle = document.getElementById(`circule_${i}`);

    if (stepContent || stepCircle) {
      stepContent.style.display = i === stepNumber ? "block" : "none";
      stepCircle.style.backgroundColor = i === stepNumber ? "hsl(206, 94%, 87%)" : "";
      stepCircle.style.color = i === stepNumber ? " hsl(213, 96%, 18%)" : "";

    }
  }
}

function nextStep() {
  let inputs = document.querySelectorAll(".step_1_input");
  let validation = document.querySelectorAll(".validation");
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

function doublePreviousStep(){ 
  if (currentStep > 2) {
    currentStep -= 2;
    showStep(currentStep);
  } 
}

function toggleCards() {
  var monthlyCards = document.getElementById("monthly_cards");
  var yearlyCards = document.getElementById("yearly_cards");
  var stepThreeMonthly = document.getElementById("step_3_monthly");
  var stepThreeYearly = document.getElementById("step_3_yearly");
  var month = document.querySelector(".month");
  var year = document.querySelector(".year");

  if (monthlyCards.style.display === "none") {
    monthlyCards.style.display = "flex";
    yearlyCards.style.display = "none";
    stepThreeMonthly.style.display = "block";
    stepThreeYearly.style.display = "none";
    month.style.color = "hsl(213, 96%, 18%)"
    year.style.color = "hsl(231, 11%, 63%)";
  } else {
    monthlyCards.style.display = "none";
    yearlyCards.style.display = "flex";
    stepThreeMonthly.style.display = "none";
    stepThreeYearly.style.display = "block";
    month.style.color = "hsl(231, 11%, 63%)";
    year.style.color = "hsl(213, 96%, 18%)";
  }
}

document.addEventListener("DOMContentLoaded", function(){ 
const checkboxes = document.querySelectorAll(`input[type="checkbox"]`);
checkboxes.forEach(function(checkbox){
  checkbox.addEventListener("change", function (){ 
    const container = checkbox.closest(".step_3_content");
    if(checkbox.checked){ 
      container.classList.add("checked");
    } else { 
      container.classList.remove("checked");
    }
  })
})
})
