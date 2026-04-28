function payroll(){
    // declare variables
    const name = "Anthony Kuma Batsa";
    const role = "Manager";
    const baseSalary = 23000;
    // total hours worked in the month (including overtime) = 45 * 4 + 10  
    const hoursWorked = 190; 
    const overtime = 0;
    const bonus = 0;
    const gross = 0;
    const pension = 0;
    const tax = 0;
    const net = 0;
    
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
    bonus = 0.04 * sales;
    } 

    gross = baseSalary + overtime + bonus;
    pension = 0.12 * gross;
    tax = gross * 0.1; 
    net = gross - (pension + tax);
    
    console.log("Employee Name: " + name);
    console.log("Role: " + role);
    console.log("Base Salary: GHS " + baseSalary);
    console.log("Net Salary: GHS " + net);

}

payroll();
