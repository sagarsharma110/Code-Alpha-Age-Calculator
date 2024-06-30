document.getElementById('ageCalculatorForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting and refreshing the page

    // Fetch user input
    const day = parseInt(document.getElementById('dob').value);
    const month = parseInt(document.getElementById('mob').value);
    const year = parseInt(document.getElementById('yob').value);

    // Validate the date
    if (isNaN(day) || isNaN(month) || isNaN(year)) {
        alert('Please enter valid date, month, and year!');
        return;
    }

    // Create a Date object for the current date
    const currentDate = new Date();

    // Create a Date object for the input birthdate
    const birthDate = new Date(year, month - 1, day); // month - 1 because months are zero-indexed in JavaScript

    // Calculate the age
    let age = currentDate.getFullYear() - birthDate.getFullYear();

    // Check if the birthday has occurred this year
    if (currentDate.getMonth() < birthDate.getMonth() || 
        (currentDate.getMonth() === birthDate.getMonth() && currentDate.getDate() < birthDate.getDate())) {
        age--;
    }

    // Display the result
    const resultContainer = document.getElementById('result');
    resultContainer.innerHTML = `<h3>Your Age is: ${age}</h3>`;
});
