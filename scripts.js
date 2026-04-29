function payroll(){
    // declare variables
    let name = "Anthony Kuma Batsa";
    let role = "Manager";
    let baseSalary = 23000;
    // total hours worked in the month (including overtime) = 45 * 4 + 10  
    let hoursWorked = 190; 
    let Sales = 0;
    //Calculation for Overtime
    if (hoursWorked > 180) {
    let extraHours = hoursWorked - 180;
    overtime = extraHours * (0.02 * baseSalary);
    }
    //Bonus Calculation
    if (role === "Manager") {
    bonus = 0.05 * (baseSalary + overtime);
    } 
    else if (role === "C-Level") {
    bonus = 0.08 * (baseSalary + overtime);
    } 
    else if (role === "Sales") {
    bonus = 0.04 * Sales;
    } 
    //Tax Calculation
    function taxRate(gross) {
    let tax = 0;

    if (gross > 10500) {
    tax = (gross - 10500) * 0.12;
    } else if (gross > 7500) {
    tax = (gross - 7500) * 0.10;
    } else if (gross > 6000) {
    tax = (gross - 6000) * 0.07;
    } else {
    tax = 0;
    }
    return tax;
    }
    gross = baseSalary + overtime + bonus;
    pension = 0.12 * gross;
    net = gross - (pension + taxRate(gross));
    
    console.log("EMPLOYEE PAYSLIP - April 2026");
    console.log("Employee Name: " + name);
    console.log("Role: " + role);
    console.log("Net Salary: GHS " + net);
    }
    payroll();
