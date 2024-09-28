function calculateNetSalary(basicSalary, benefits) {
    const grossSalary = basicSalary + benefits;
    
    const nssfDeductions = calculateNSSF(grossSalary);
    const nhifDeductions = calculateNHIF(grossSalary);
    const tax = calculateTax(grossSalary);
  
    const netSalary = grossSalary - (nssfDeductions + nhifDeductions + tax);
    
    return {
      grossSalary: grossSalary,
      netSalary: netSalary,
      nssf: nssfDeductions,
      nhif: nhifDeductions,
      tax: tax
    };
  }
  
  function calculateNSSF(salary) {
    // Example value based on Kenyan rates
    return Math.min(salary * 0.06, 1800); // Max NSSF is 6% or 1800 cap
  }
  
  function calculateNHIF(salary) {
    if (salary <= 5999) return 150;
    else if (salary <= 7999) return 300;
    // Add more NHIF bands based on salary
    else return 1700; // Example max
  }
  
  function calculateTax(salary) {
    // Example progressive tax rates
    if (salary <= 24000) return salary * 0.1;
    else if (salary <= 32333) return salary * 0.25;
    else return salary * 0.30; // 30% tax
  }