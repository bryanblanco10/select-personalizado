const selectOption = document.querySelector(".select-option");
const selectValue = document.querySelector(".select-value");
const optionContainer = document.querySelector(".options");
const optionList = document.querySelectorAll(".option");

// Toggle function
const selectToggle = () => {
  if (optionContainer.dataset.toggle == "collapsed") {
    optionContainer.dataset.toggle = "";
  } else {
    optionContainer.dataset.toggle = "collapsed";
  }
}

// When click on selected option
selectOption.addEventListener("click", selectToggle);

// This function update select value}
const updateSelectValue = (option) => {
  selectValue.innerText = option.innerText;
}

optionList.forEach((option) => {
  option.addEventListener("click", (e) => {
    updateSelectValue(option);
    selectToggle();
  })
})