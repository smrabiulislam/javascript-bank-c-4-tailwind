// step-1
document.getElementById('btn-withdraw').addEventListener('click', function () {

    // step-2
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    // parseFloat diye string ke number kora hoi
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    withdrawField.value = '';

    if (isNaN(newWithdrawAmount)) {
        alert('Please enter a valid number')
        return;
    }

    //step -3: get the withdraw total current amount

    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    // parseFloat diye string ke number kora hoi
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);





    // step-6: get ballance current total

    const blanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = blanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // withdraw blance limiter baire gele condition set korte pari

    if (newWithdrawAmount > previousBalanceTotal) {
        alert('You have no blance for this amount')
        return;
    }

    // step-4: calculate current total withdraw balance

    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;

    // step-5: set total withdraw amount

    withdrawTotalElement.innerText = currentWithdrawTotal;

    // step-7: calculate current total balance

    const currentBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    blanceTotalElement.innerText = currentBalanceTotal;




})