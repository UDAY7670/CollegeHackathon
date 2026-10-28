
const form = document.getElementById("registrationForm");
const message = document.getElementById("message");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const team = document.getElementById("team").value.trim();

    if (!name || !email || !phone || !team) {
        message.style.color = "red";
        message.textContent = "Please fill in all required fields.";
        return;
    }

    message.style.color = "green";
    message.textContent =
        "🎉 Registration successful! Thank you, " + name +
        ". Your team " + team + " is ready for the hackathon!";

    form.reset();
});
