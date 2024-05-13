// NOTE: ALL CALCULATIONS ARE IN CENTS

document.addEventListener('DOMContentLoaded', function () {
    let dollarsOut = document.getElementById('dollars-output');
    let quartersOut = document.getElementById('quarters-output');
    let dimesOut = document.getElementById('dimes-output');    
    let nickelsOut = document.getElementById('nickels-output');    
    let penniesOut = document.getElementById('pennies-output');

    // Define cent values (note: use string keys for property access)
    const Values = {
        dollarValue: 100,
        quarterValue: 25,
        dimeValue: 10,
        nickelValue: 5,
        pennyValue: 1,
    };

    // Money format fuction. Takes cents and outputs formatted USD value
    function formatMoney(number) {
        return (number/100).toLocaleString('en-US', { style: 'currency', currency: 'USD' });
      }

    // Add event listener for the Calculate button
    document.getElementById('calculate-change').addEventListener('click', () => {
        const amountDue = document.getElementById('amount-due');
        const amountReceived = document.getElementById('amount-received');
        let amountChange = document.getElementById('change-output');

        let centsDue = parseFloat(amountDue.value)*100
        let centsReceived = parseFloat(amountReceived.value)*100

        let centsChange = centsReceived - centsDue
        let centsRemaining = centsChange

        //Dollars
        dollarsOut.textContent = Math.floor(centsRemaining/Values.dollarValue)
        centsRemaining=centsRemaining % Values.dollarValue

        //Quarters
        quartersOut.textContent = Math.floor(centsRemaining/Values.quarterValue)
        centsRemaining=centsRemaining % Values.quarterValue

        //Dimes
        dimesOut.textContent = Math.floor(centsRemaining/Values.dimeValue)
        centsRemaining=centsRemaining % Values.dimeValue

        //Nickels
        nickelsOut.textContent = Math.floor(centsRemaining/Values.nickelValue)
        centsRemaining=centsRemaining % Values.nickelValue

        //Pennies 
        penniesOut.textContent = Math.round(centsRemaining)

        amountChange.textContent = formatMoney((centsReceived - centsDue)) //Change owed in Dollars
        console.log(centsDue,centsReceived, formatMoney(centsChange))

        // amountChange=  (centsReceived - centsDue)/100 //Change owed in Dollars
        //  new Intl.NumberFormat('en-US', {
        //     style: 'currency',
        //     currency: 'USD'
        // }).format(amountChange);
    });
});