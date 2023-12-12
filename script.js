const emailInputEl = document.querySelector(".email-input");
const submitBtnEl = document.querySelector(".btn");
const emailSubsEl = document.querySelector(".email-subs");
const containerEl = document.querySelector(".container");
const responseDiv = document.querySelector(".response-div");
const dismisBtnEl = document.querySelector(".dismiss-msg-btn");
const errorSpanEl = document.querySelector(".error-msg");

function showResponse(event) {
	event.preventDefault();
	const emailSub = emailInputEl.value;
	 // Check if email is empty or if it's not a valid email address
  if (!emailSub || !isValidEmail(emailSub)) {
    errorSpanEl.textContent = 'Valid email required';
    errorSpanEl.style.display = 'inline';
	emailInputEl.style.backgroundColor = "hsl(4, 100%, 67%)"
	emailInputEl.style.color = "red";
	emailInputEl.style.borderColor = "red";
    return;
  } else {
	emailSubsEl.innerHTML = emailSub;
	containerEl.style.display = "none";
	responseDiv.style.display = "block"
}
	
}
emailInputEl.value = "";

function resetInputField() {
	// emailInputEl.value = "";
	errorSpanEl.textContent = "";
	errorSpanEl.style.display = "none";
	emailInputEl.style.backgroundColor = "";
	emailInputEl.style.color = "";
	emailInputEl.style.borderColor = "";
}

function isValidEmail(email){
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return emailRegex.test(email);
}
 emailInputEl.addEventListener("click", resetInputField);
submitBtnEl.addEventListener("click", showResponse);

dismisBtnEl.addEventListener("click", ()=>{
	containerEl.style.display = "flex";
	responseDiv.style.display = "none";
	emailInputEl.value = "";
})