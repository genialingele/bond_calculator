/* Copyright of Ndolena Design. This calculator is merely an estimation of what your bond would cost and the other costs associated with it.
    Hence, Ndolena Design is not liable for any inaccuracies found in this code. We are trying to guide you in making a decision in the best way we can, 
    but the accurate information will be given to you by your bank.
    NOTE: Data found on this code is based on South African laws and fees.
    
    DATE: 24 SEPTEMBER 2023
    
    NDOLENA DESIGN 
    REPRESENTED BY GENIAL INGELE*/

    /*TODO 
    * Allow decimals as input
    * Automatically separate large numbers with comma or point when typed in
    * Styling 
    * Add other calculators such as affordability, costs breakdown, etc. 
    * Loop through 2 arrays to compare and assign values based on a set of conditions. E.g. loan amount vs deeds office fees matching. 
    */



//A validation function to ensure that only numbers between 0 - 9 are entered
function isNumber(evt){
  var charCode = (evt.which) ? evt.which : evt.keyCode;
  if (charCode > 31 && (charCode < 48 || charCode > 57 )){
  //alert("Numbers only (0-9)");
  return false;}
return true;
}

//Use the enter key to trigger calculation

var input = [document.getElementById("purchase_price"), document.getElementById("deposit"), document.getElementById("interest_rate"), document.getElementById("number_of_years")]


for (let i = 0 ; i < input.length ; i++){
if (input[i].value != null){

// Execute a function when the user presses a key on the keyboard
input[i].addEventListener("keypress", function(event) {
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







/* //read values entered by the user on the input fields, convert them to local variables
const purchase_price_input =document.getElementById("purchase_price").value;
const interest_rate_input = document.getElementById("interest_rate").value;
const years_input = document.getElementById("number_of_years").value;
const deposit_input = document.getElementById("deposit").value;
const submitButton = document.getElementById("submit_btn");   */




function bondCalculator(purchase_price, interest_rate, years, deposit){
  //the mathematical formula is A = P * ( r * (1+r)^n ) / ( (1+r)^n - 1 )
  /*
  A = repayment amount 
  P = loan amount
  r = rate (e.g. 10% per year for 12 months = (10/100)/12 = 0.008333)
  n = number of repayments. (e.g 5 years = 5*12months = 60 payments)
  */
  var repayment_amount;
  var period = [12, 6, 0.5, 1] //12 is monthly, 0.5 bi-annually, 1 annually, etc. 
  var calculated_rates = interest_rate/100/12;
  var number_of_repayments = years * period[0]; 
  var total_interest;
  var total_repayment;
  var registration_cost;
  var transfer_cost;
  var deeds_office_fee= [496, 642, 800, 1126, 1293, 1453, 2014, 2443, 2909, 3401, 4048, 4863, 5667, 8098]; //as of FEBRUARY 2023 FROM Deeds office Websitein So
  var salary;


  purchase_price = purchase_price - deposit;

      //repayment calculator as shown earlier
      repayment_amount = purchase_price * ( calculated_rates * ((1 + calculated_rates)**number_of_repayments) ) / ( ((1+calculated_rates) ** number_of_repayments)- 1 );
      repayment_amount = repayment_amount.toFixed(2);//round the repayment number to 2 decimal places
      
      //display the repayment value on the HTML page by using the id of "monthly_repayment"
      document.getElementById("monthly_repayment").innerHTML = repayment_amount; 

      //calculate the minimum gross salary an individual should earn to qualify for this loan and display on HTML element of id "salary"
      salary = repayment_amount*3.5; 
      salary = salary.toFixed(2);
      document.getElementById("salary").innerHTML = salary;
   
      
      //calculate the total interest
      total_interest = (repayment_amount * number_of_repayments ) - purchase_price;
      total_interest = total_interest.toFixed(2);
      document.getElementById("total_interest").innerHTML = total_interest; 

      //calculate the total repayment
      total_repayment = purchase_price + total_interest;
      console.log(total_repayment)
      total_repayment = Number(total_repayment.toFixed(2));
      console.log(total_repayment)


      document.getElementById("total_repayment").innerHTML = total_repayment; 
      console.log(total_repayment)



      //calculate the Registration costs


};


//reset form values
function reset(){
var form = document.getElementById("calculator_input_form");
form.reset();

}