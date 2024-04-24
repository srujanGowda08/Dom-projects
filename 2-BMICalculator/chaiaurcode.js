const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#results');

  if (isNaN(height) || height < 0) {
    result.innerHTML = 'Please provide a valid height.';
  } else if (isNaN(weight) || weight < 0) {
    result.innerHTML = 'Please provide a valid weight.';
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    if (bmi < 18.6) {
      result.innerHTML = `Under Weight: ${bmi}`;
    }
    if (bmi > 18.6 && bmi < 24.9) {
      result.innerHTML = `Normal Range: ${bmi}`;
    }
    if (bmi > 24.9) {
      result.innerHTML = `Over Weight: ${bmi}`;
    }
  }

  e.preventDefault(); // prevent form submission
});
