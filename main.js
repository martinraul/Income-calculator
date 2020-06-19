
const $calculateButton = document.querySelector("#calculate");

$calculateButton.onclick = function () {
	validateAnnualSalary()
	calculateSalary()
	showResetButton()
	return false
}

function validateAnnualSalary() {
	if (annualSalary.value === "") {
		alertEmpyField()
	}
	return
}

function calculateSalary() {
	const annualSalary = document.querySelector('#annualSalary').value;
	const monthsPerYear = 12
	const weeksPerYear = 52
	const daysPerYear = 365
	const monthlySalary = annualSalary / monthsPerYear;
	const weeklySalary = annualSalary / weeksPerYear;
	const dailySalary = annualSalary / daysPerYear;

	document.querySelector('#monthlySalary').value = "$" + monthlySalary;
	document.querySelector('#weeklySalary').value = "$" + weeklySalary;
	document.querySelector('#dailySalary').value = "$" + dailySalary;

}

function alertEmpyField(){
	var alert = document.createElement("div");
	alert.id="alert"
	alert.className="alert alert-danger"
	alert.textContent= "Annual Salary Required"
	document.getElementById("alert").appendChild(alert); 
}

function showResetButton() {
	document.querySelector("#reset-button").className = ""
}

function hideAlertEmptyField(){
	document.getElementById("alert").className="hidden"
} 


