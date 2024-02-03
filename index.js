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
    month.style.color = "hsl(213, 96%, 18%)"
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

document.addEventListener("DOMContentLoaded",function(){

  const arcade = document.getElementById("arcade");
  const advanced = document.getElementById("advanced");
  const pro = document.getElementById("pro");
  const monthlyValue = document.getElementById("monthly_value")

  arcade.addEventListener("change", function(){
    monthlyValue.textContent = arcade.checked ? "$9/mo" : " ";
  });

  advanced.addEventListener("change", function(){
    monthlyValue.textContent = advanced.checked ? "$12/mo" : " ";
  });

  pro.addEventListener("change", function(){
    monthlyValue.textContent = pro.checked ? "$15/mo" : " ";
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

  checkbox1Year.addEventListener("change", function(){
    serviceYearContainer1.style.display = checkbox1Year.checked ? "flex" : "none";
  });

  checkbox2Year.addEventListener("change", function(){
    serviceYearContainer2.style.display = checkbox2Year.checked ? "flex" : "none";
  });

  checkbox3Year.addEventListener("change", function(){
    serviceYearContainer3.style.display = checkbox3Year.checked ? "flex" : "none";
  });

  checkbox1.addEventListener("change", function(){
    serviceContainer1.style.display = checkbox1.checked ? "flex" : "none";
  });

  checkbox2.addEventListener("change", function(){
    serviceContainer2.style.display = checkbox2.checked ? "flex" : "none";
  });

  checkbox3.addEventListener("change", function(){
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
  const checkedValuesYear = [90];

  const input1Year = document.getElementById("input_1_value_year").innerHTML;
  const numeric1Year = parseFloat(input1Year.replace(/\D/g, ''));
  console.log(numeric1Year, "numeric1Year");

  if (checkbox1Year.checked) checkedValuesYear.push(numeric1Year);

  const input2Year = document.getElementById("input_2_value_year").innerHTML;
  const numeric2Year = parseFloat(input2Year.replace(/\D/g, ''));
  console.log(numeric2Year, "numeric2Value");

  if (checkbox2Year.checked) checkedValuesYear.push(numeric2Year);

  const input3Year = document.getElementById("input_3_value_year").innerHTML;
  const numeric3Year = parseFloat(input3Year.replace(/\D/g, ''));
  console.log(numeric3Year, "numeric3Value");

  if (checkbox3Year.checked) checkedValuesYear.push(numeric3Year);

  const totalSumYear = checkedValuesYear.reduce((acc, val) => acc + val, 0);
  const sumResultElement = document.getElementById('sumResultYear');
  sumResultElement.textContent = `$${totalSumYear}/yr`;
console.log(checkedValuesYear,"checkedValuesYear")
  console.log(totalSumYear);
}

function updateSum() { 
  const checkedValues = [ ];

  const input1Value = document.getElementById("input_1_value").innerHTML;
  const numeric1Value = parseFloat(input1Value.replace(/\D/g, ''));
  console.log(numeric1Value, "numeric1Value");
  if (checkbox1.checked) checkedValues.push(numeric1Value);

  const monthlyValue = document.getElementById("monthly_value").innerHTML;
  console.log(monthlyValue,"<==monthlyValue");
  const monthlyNumericValue = parseFloat(monthlyValue.replace(/\D/g, ''));

 
  
  console.log(monthlyNumericValue,"monthlyNumericValue")

  const input2Value = document.getElementById("input_2_value").innerHTML;
  const numeric2Value = parseFloat(input2Value.replace(/\D/g, ''));
  // console.log(numeric2Value, "numeric2Value");

  if (checkbox2.checked) checkedValues.push(numeric2Value);

  const input3Value = document.getElementById("input_3_value").innerHTML;
  const numeric3Value = parseFloat(input3Value.replace(/\D/g, ''));
  // console.log(numeric3Value, "numeric3Value");

  if (checkbox3.checked) checkedValues.push(numeric3Value);

  const totalSum = checkedValues.reduce((acc, val) => acc + val, 0);
  const sumResultYearly = document.getElementById('sumResult');
  sumResultYearly.textContent = `$${totalSum}/mo`;

  // console.log(totalSum);
}

updateSum();
updateSumYearly();


