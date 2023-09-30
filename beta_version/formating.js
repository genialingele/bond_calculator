/* Copyright of GENIAL INGELE (2023). This calculator is merely an estimation of what your bond would cost and the other costs associated with it.
    Hence, GENIAL INGELE is not liable for any inaccuracies found in this code. We are trying to guide you in making a decision in the best way we can, 
    but the accurate information will be given to you by your bank.
    NOTE: Data found on this code is based on South African laws and fees.
    
    DATE: 25 SEPTEMBER 2023
    
    GENIAL INGELE */


    /*TODO 
    * Automatically separate large numbers with comma or point when typed in
    * Loop through 2 arrays to compare and assign values based on a set of conditions. E.g. loan amount vs deeds office fees matching. 
    */

//an Array of input fields as objects
var input_fields = [document.getElementById("purchase_price"), document.getElementById("deposit"), document.getElementById("interest_rate"), document.getElementById("number_of_years")]


//A validation function to ensure that only numbers between 0 - 9 are entered
function isNumber(evt) {
      // The 'evt' parameter represents the event object passed to this function,
    // typically an event like keypress or keydown.

    // The following line determines the character code of the key pressed.
    // It checks both 'which' and 'keyCode' properties, as these can vary
    // depending on the browser being used.
    var charCode = (evt.which) ? evt.which : evt.keyCode;

    // Now, it checks whether the character code corresponds to a numeric key (0-9).
    // The condition checks if the charCode is greater than 31 (to exclude control characters)
    // and if it's not in the range of 48-57 (ASCII codes for 0 to 9).
    if (charCode > 31 && (charCode < 48 || charCode > 57 ) ) {
        // If the character code is not within the range of 0-9, the function returns false,
        // indicating that the input should be rejected.
        return false;
    }

    // If the character code is within the range of 0-9, the function returns true,
    // allowing the input to be processed as a valid number.
    return true;

}


//A validation function to ensure that DECIMAL numbers only entered
function isDecimalNumber(evt) {
  var charCode = (evt.which) ? evt.which : evt.keyCode;

  // Check if a period has already been typed.
  var hasPeriod = evt.target.value.includes(".");

  // Allow numbers (0-9) and the period (.) character if it hasn't been typed.
  if ((charCode >= 48 && charCode <= 57) || (charCode === 46 && !hasPeriod)) {
      // If it's a period, set the hasPeriod flag to true.
      if (charCode === 46) {
          hasPeriod = true;
      }
      return true;
  } else {
      return false;
  }
}


//Use the enter key to trigger calculation
for (let i = 0 ; i < input_fields.length ; i++){
  //Ensure that there is data when the loop runs
  if (input_fields[i].value != null){
 
    // Execute a function when the user presses a key on the keyboard
    input_fields[i].addEventListener("keypress", function(event) {
      // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        document.getElementById("submit_btn").click();

        }
    });     
  }
}



// Spit results by the thousands. 
function numberWithSpaces(variable_to_split) {
    return variable_to_split.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }
  