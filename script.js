function compute()
{
    // assign values inputed in calculator form to variables.
    // These will be used to calculate and display the result.
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate / 100;

    // Calculates the year based on number of years inputed in form
    var year = new Date().getFullYear()+parseInt(years);

    // Gives an alert if user inputs 0 or a negative number
    if (principal <= 0) {
        alert("Enter a positive number");
    }
    // Displays the results after user submits form
    else {
        document.getElementById("result").innerHTML="If you deposit \<mark\>"
        +principal+"\<\/mark\>,\<br\> at an interest rate of \<mark\>"
        +rate+"%\<\/mark\>.\<br\>You will receive an amount of \<mark\>"
        +interest+"\<\/mark\>,\<br\> in the year \<mark\>"
        +year+"\<\/mark\>\<br\>"
    }

    

    

    
}

// Updates the numerical rate when the user interacts with the rate slider
function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval
}
        