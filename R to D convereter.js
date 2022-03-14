let Rupees = document.getElementById('Rupees');
let Dollars = document.getElementById('Dollars');

Rupees.oninput = () => {
  let output = (parseFloat(Rupees.value) * 0.013);
  Dollars.value = parseFloat(output.toFixed(2));
};

Dollars.oninput = () => {
  let output = ((parseFloat(Dollars.value)*76.37));
  Rupees.value = parseFloat(output.toFixed(2));
};
