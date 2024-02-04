let currentStep = 1;
const totalSteps = 5;

function showStep(stepNumber) {
  for (let i = 1; i <= totalSteps; i++) {
    const stepContent = document.getElementById(`step_${i}`);
    const stepCircle = document.getElementById(`circule_${i}`);

    if (stepContent || stepCircle) {
      stepContent.style.display = i === stepNumber ? "block" : "none";
      if (i == 3) {
        updateSum();
        updateSumYearly();
      }
      stepCircle.style.backgroundColor =
        i === stepNumber || (stepNumber === totalSteps && i === totalSteps - 1)
          ? "hsl(206, 94%, 87%)"
          : "";
      stepCircle.style.color =
        i === stepNumber || (stepNumber === totalSteps && i === totalSteps - 1)
          ? " hsl(213, 96%, 18%)"
          : "";
    }
  }
}

function nextStep() {
  let name = document.getElementById("name");
  let email = document.getElementById("email");
  let phone = document.getElementById("phone");


  let nameValidation = document.getElementById("name_validation");
  let nameValidation2 = document.getElementById("name_validation_2");
  let emailValidation = document.getElementById("email_validation");
  let emailValidation2 = document.getElementById("email_validation_2");
  let phoneValidation = document.getElementById("phone_validation");
  let phoneValidation2 = document.getElementById("phone_validation_2");

  let isNameValid = false;
  let isEmailValid = false;
  let isPhoneValid = false;

  if (name.value.trim() === "") {
    nameValidation.style.display = "block";
    nameValidation2.style.display = "none";
    isNameValid = true;
  } else { 
    let nameRegex = /^[A-Za-z\s]+$/; 
    if (!nameRegex.test(name.value)) {
      nameValidation.style.display = "none";
      nameValidation2.style.display = "block";
      isNameValid = true;
    } else { 
      nameValidation.style.display = "none";
      nameValidation2.style.display = "none";
      isNameValid = false;
    }
  }

   if (email.value.trim() === "") {
    emailValidation.style.display = "block";
    emailValidation2.style.display = "none";
    isEmailValid = true;
  } else { 
    let emailRegex =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
      emailValidation.style.display = "none";
      emailValidation2.style.display = "block";
      isEmailValid = true;
    } else { 
      emailValidation.style.display = "none";
      emailValidation2.style.display = "none";
      isEmpty = false;
    }
  }

  if (phone.value.trim() === "") {
    phoneValidation.style.display = "block";
    phoneValidation2.style.display = "none";
    isPhoneValid = true;
  } else { 
    let phoneRegex =  /^(?:\+92|0)?3\d{9}$/;
    if (!phoneRegex.test(phone.value)) {
      phoneValidation.style.display = "none";
      phoneValidation2.style.display = "block";
      isPhoneValid = true;
    } else { 
      phoneValidation.style.display = "none";
      phoneValidation2.style.display = "none";
      isPhoneValid = false;
    }
  }

  if (!isNameValid && !isEmailValid && !isPhoneValid && currentStep < totalSteps) {
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

function doublePreviousStep() {
  if (currentStep > 2) {
    currentStep -= 2;
    showStep(currentStep);
  }
}

function toggleCards() {
  var monthlyCards = document.getElementById("monthly_cards");
  var yearlyCards = document.getElementById("yearly_cards");
  var stepThreeMonthly = document.getElementById("step_3_monthly");
  var stepFourYearly = document.querySelector(".step_4_card_yearly");
  var totalMonthly = document.getElementById("total_monthly");
  var totalYearly = document.getElementById("total_yearly");

  var stepFourMonthly = document.querySelector(".step_4_card");

  var stepThreeYearly = document.getElementById("step_3_yearly");
  var month = document.querySelector(".month");
  var year = document.querySelector(".year");

  if (monthlyCards.style.display === "none") {
    totalMonthly.style.display = "flex";
    totalYearly.style.display = "none";
    stepFourMonthly.style.display = "block";
    stepFourYearly.style.display = "none";
    monthlyCards.style.display = "flex";
    yearlyCards.style.display = "none";
    stepThreeMonthly.style.display = "block";
    stepThreeYearly.style.display = "none";
    month.style.color = "hsl(213, 96%, 18%)";
    year.style.color = "hsl(231, 11%, 63%)";
  } else {
    totalMonthly.style.display = "none";
    totalYearly.style.display = "flex";
    stepFourMonthly.style.display = "none";
    stepFourYearly.style.display = "block";
    monthlyCards.style.display = "none";
    yearlyCards.style.display = "flex";
    stepThreeMonthly.style.display = "none";
    stepThreeYearly.style.display = "block";
    month.style.color = "hsl(231, 11%, 63%)";
    year.style.color = "hsl(213, 96%, 18%)";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const checkboxes = document.querySelectorAll(`input[type="checkbox"]`);
  checkboxes.forEach(function (checkbox) {
    checkbox.addEventListener("change", function () {
      const container = checkbox.closest(".step_3_content");
      if (checkbox.checked) {
        container.classList.add("checked");
      } else {
        container.classList.remove("checked");
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const arcade = document.getElementById("arcade");
  const advanced = document.getElementById("advanced");
  const pro = document.getElementById("pro");
  const arcadeYearly = document.getElementById("arcade_yearly");
  const advancedYearly = document.getElementById("advanced_yearly");
  const proYearly = document.getElementById("pro_yearly");
  const monthlyValue = document.getElementById("monthly_value");
  const monthlyValueText = document.getElementById("monthly_text");
  const yearlyValue = document.getElementById("yearly_value");
  const yearlyValueText = document.getElementById("yearly_text");

  arcade.addEventListener("change", function () {
    monthlyValue.textContent = arcade.checked ? "$9/mo" : " ";
    monthlyValueText.textContent = arcade.checked ? "Arcade(Monthly)" : " ";
  });

  arcade.click();

  advanced.addEventListener("change", function () {
    monthlyValue.textContent = advanced.checked ? "$12/mo" : " ";
    monthlyValueText.textContent = advanced.checked ? "Advance(Monthly)" : " ";
  });

  pro.addEventListener("change", function () {
    monthlyValue.textContent = pro.checked ? "$15/mo" : " ";
    monthlyValueText.textContent = pro.checked ? "Pro(Monthly)" : " ";
  });

  arcadeYearly.addEventListener("change", function () {
    yearlyValue.textContent = arcadeYearly.checked ? "$90/mo" : " ";
    yearlyValueText.textContent = arcadeYearly.checked ? "Arcade(Yearly)" : " ";
  });

  arcadeYearly.click();

  advancedYearly.addEventListener("change", function () {
    yearlyValue.textContent = advancedYearly.checked ? "$120/mo" : " ";
    yearlyValueText.textContent = advancedYearly.checked
      ? "Advance(Yearly)"
      : " ";
  });

  proYearly.addEventListener("change", function () {
    yearlyValue.textContent = proYearly.checked ? "$150/mo" : " ";
    yearlyValueText.textContent = proYearly.checked ? "Pro(Monthly)" : " ";
  });

  const checkbox1Year = document.getElementById("add_yearly_1");
  const serviceYearContainer1 = document.querySelector(".input_1_year");

  const checkbox2Year = document.getElementById("add_yearly_2");
  const serviceYearContainer2 = document.querySelector(".input_2_year");

  const checkbox3Year = document.getElementById("add_yearly_3");
  const serviceYearContainer3 = document.querySelector(".input_3_year");

  const checkbox1 = document.getElementById("add_1");
  const serviceContainer1 = document.querySelector(".input_1_render");

  const checkbox2 = document.getElementById("add_2");
  const serviceContainer2 = document.querySelector(".input_2_render");

  const checkbox3 = document.getElementById("add_3");
  const serviceContainer3 = document.querySelector(".input_3_render");

  checkbox1Year.addEventListener("change", function () {
    serviceYearContainer1.style.display = checkbox1Year.checked
      ? "flex"
      : "none";
  });

  checkbox1Year.click();

  checkbox2Year.addEventListener("change", function () {
    serviceYearContainer2.style.display = checkbox2Year.checked
      ? "flex"
      : "none";
  });

  checkbox2Year.click();

  checkbox3Year.addEventListener("change", function () {
    serviceYearContainer3.style.display = checkbox3Year.checked
      ? "flex"
      : "none";
  });

  checkbox1.addEventListener("change", function () {
    serviceContainer1.style.display = checkbox1.checked ? "flex" : "none";
  });

  checkbox1.click();

  checkbox2.addEventListener("change", function () {
    serviceContainer2.style.display = checkbox2.checked ? "flex" : "none";
  });

  checkbox2.click();

  checkbox3.addEventListener("change", function () {
    serviceContainer3.style.display = checkbox3.checked ? "flex" : "none";
  });
});

var checkbox1Year = document.getElementById("add_yearly_1");
var checkbox2Year = document.getElementById("add_yearly_2");
var checkbox3Year = document.getElementById("add_yearly_3");

checkbox1Year.addEventListener("change", updateSumYearly);
checkbox2Year.addEventListener("change", updateSumYearly);
checkbox3Year.addEventListener("change", updateSumYearly);

var checkbox1 = document.getElementById("add_1");
var checkbox2 = document.getElementById("add_2");
var checkbox3 = document.getElementById("add_3");

checkbox1.addEventListener("change", updateSum);
checkbox2.addEventListener("change", updateSum);
checkbox3.addEventListener("change", updateSum);

function updateSumYearly() {
  const checkedValuesYear = [];

  const yearlyValue = document.getElementById("yearly_value").innerHTML;
  const yearlyNumericValue = parseFloat(yearlyValue.replace(/\D/g, ""));

  checkedValuesYear.push(yearlyNumericValue);

  const input1Year = document.getElementById("input_1_value_year").innerHTML;
  const numeric1Year = parseFloat(input1Year.replace(/\D/g, ""));
  if (checkbox1Year.checked) checkedValuesYear.push(numeric1Year);

  const input2Year = document.getElementById("input_2_value_year").innerHTML;
  const numeric2Year = parseFloat(input2Year.replace(/\D/g, ""));
  if (checkbox2Year.checked) checkedValuesYear.push(numeric2Year);

  const input3Year = document.getElementById("input_3_value_year").innerHTML;
  const numeric3Year = parseFloat(input3Year.replace(/\D/g, ""));
  if (checkbox3Year.checked) checkedValuesYear.push(numeric3Year);

  const totalSumYear = checkedValuesYear.reduce((acc, val) => acc + val, 0);
  const sumResultElement = document.getElementById("sumResultYear");
  sumResultElement.textContent = `$${totalSumYear}/yr`;
}

function updateSum() {
  const checkedValues = [];

  const monthlyValue = document.getElementById("monthly_value").innerHTML;
  const monthlyNumericValue = parseFloat(monthlyValue.replace(/\D/g, ""));
  checkedValues.push(monthlyNumericValue);

  const input1Value = document.getElementById("input_1_value").innerHTML;
  const numeric1Value = parseFloat(input1Value.replace(/\D/g, ""));
  if (checkbox1.checked) checkedValues.push(numeric1Value);

  const input2Value = document.getElementById("input_2_value").innerHTML;
  const numeric2Value = parseFloat(input2Value.replace(/\D/g, ""));
  if (checkbox2.checked) checkedValues.push(numeric2Value);

  const input3Value = document.getElementById("input_3_value").innerHTML;
  const numeric3Value = parseFloat(input3Value.replace(/\D/g, ""));
  if (checkbox3.checked) checkedValues.push(numeric3Value);

  const totalSum = checkedValues.reduce((acc, val) => acc + val, 0);
  const sumResultYearly = document.getElementById("sumResult");
  sumResultYearly.textContent = `$${totalSum}/mo`;
}
