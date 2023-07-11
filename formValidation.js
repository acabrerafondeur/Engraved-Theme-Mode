// Calculate Gross and Net Pay
const calculateButton = document.getElementById('calculate-btn');
const grossPaySpan = document.getElementById('gross-pay');
const netPaySpan = document.getElementById('net-pay');

calculateButton.addEventListener('click', function() {
  const salary = parseFloat(document.getElementById('salary').value);
  const taxRate = parseFloat(document.getElementById('tax-rate').value);

  if (!isNaN(salary) && !isNaN(taxRate)) {
    const grossPay = salary;
    const taxAmount = (salary * (taxRate / 100));
    const netPay = grossPay - taxAmount;

    grossPaySpan.textContent = `$${grossPay.toFixed(2)}`;
    netPaySpan.textContent = `$${netPay.toFixed(2)}`;
  } else {
    grossPaySpan.textContent = 'Invalid input';
    netPaySpan.textContent = '';
  }
});
