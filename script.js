// Mock email data
const emails = [
  { from: "support@example.com", subject: "Welcome to Temp Mail", body: "Thank you for using our service." },
  { from: "newsletter@example.com", subject: "Weekly Newsletter", body: "Here are the latest updates." },
];

// DOM Elements
const emailInput = document.getElementById("email-input");
const generateEmailBtn = document.getElementById("generate-email");
const copyEmailBtn = document.getElementById("copy-email");
const emailList = document.getElementById("email-list");

// Generate a random email address
function generateRandomEmail() {
  const randomString = Math.random().toString(36).substring(7);
  return `${randomString}@tempmail.com`;
}

// Display emails in the inbox
function displayEmails() {
  emailList.innerHTML = "";
  emails.forEach((email) => {
    const emailItem = document.createElement("div");
    emailItem.className = "email-item";
    emailItem.innerHTML = `
      <strong>From:</strong> ${email.from}<br>
      <strong>Subject:</strong> ${email.subject}<br>
      <strong>Body:</strong> ${email.body}
    `;
    emailList.appendChild(emailItem);
  });
}

// Event Listeners
generateEmailBtn.addEventListener("click", () => {
  const newEmail = generateRandomEmail();
  emailInput.value = newEmail;
  displayEmails();
});

copyEmailBtn.addEventListener("click", () => {
  emailInput.select();
  document.execCommand("copy");
  alert("Email copied to clipboard!");
});

// Initial load
displayEmails();
