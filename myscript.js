function validateInput() {
    let inputField = document.getElementById("comment", "name");
    let submitBtn = document.getElementById("submit_button");
  
    if (inputField.value.trim().length > 0) {
      submitBtn.disabled = false;
      submitBtn.style.color = "dark blue";
    } else {
      submitBtn.disabled = true;
      submitBtn.style.color = "";
    }
}
  
  