
// for deposit area


// step-1: add event listener to the deposit buttton

document.getElementById('btn-deposit').addEventListener('click', function () {
    // step-2: get the deposit amount from the deposit input field

    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    // parseFloat diye string ke number kora hoi
    const newDepositAmount = parseFloat(newDepositAmountString);
    // sub-step-1: clear the deposit input field

    depositField.value = '';

    if (isNaN(newDepositAmount)) {
        alert('Please enter a valid number')
        return;
    }

    //step -3: get the deposit total current amount

    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    // parseFloat diye string ke number kora hoi
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    // step-4: add number to set the total deposit

    const currentDepositTotal = previousDepositTotal + newDepositAmount;

    depositTotalElement.innerText = currentDepositTotal;



    // step-5: get ballance current total

    const blanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = blanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // step-6: calculate current total balance

    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
    blanceTotalElement.innerText = currentBalanceTotal;
})


