function testValidateAnnualSalary() {
	console.assert(
		validateAnnualSalary("") === alert("Annual Salary Required"),
		'NO SE VALIDO este campo no puede estar vacio'
	)
}
testValidateAnnualSalary()