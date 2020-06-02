
const $calculateButton = document.querySelector("#calculate");

$calculateButton.onclick = function () {

	validateAnnualSalary()
	calculateSalary()
	showResetButton()
	return false
}

function validateAnnualSalary() {
	if (annualSalary.value === "") {
		alert("Annual Salary Required");
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

function showResetButton() {
	document.querySelector("#reset-button").className = ""
}


