// JavaScript object mapping student IDs to URLs
const studentURLs = {
    "123": "https://www.google.com",
    "456": "https://www.youtube.com",
    "789": "https://www.apple.com"
};

// Function to handle form submission
document.getElementById('studentForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the default way
    const studentId = document.getElementById('studentId').value;

    if (studentURLs[studentId]) {
        // Redirect to the corresponding URL
        window.location.href = studentURLs[studentId];
    } else {
        // Handle case where ID is not found
        alert('Student ID not found.');
    }
});
