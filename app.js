var inputValue = document.getElementById('number');
var income = document.getElementById('income');
var expense = document.getElementById('expense');
var saving = document.getElementById('saving');

var mySaving = 0;
var myIncome = 0;
var myExpense = 0;
var mySavingNow;

function calculateIncome() {
    var myIncomeUpdate = parseFloat(inputValue.value);
    myIncome += myIncomeUpdate;
    income.innerText = myIncome;

    if (mySaving < 0) {
        mySaving += myIncomeUpdate;        
        if (mySaving >= 0) {
            myIncome += mySaving;
            saving.innerText = mySaving;
        }
    } else {
        mySaving = myIncome;
    }

    var transactionList = document.getElementById('transactions');
    var transactionItem = document.createElement('li');
    transactionItem.textContent = 'Income: +' + myIncomeUpdate.toFixed(2);
    transactionItem.classList.add('income');
    transactionList.appendChild(transactionItem);

    saving.innerText = mySaving;
    inputValue.value = '';
    expense.innerText = '0';
}

function calculateExpense(){
    myExpense =  parseFloat(number.value);
    expense.innerText = myExpense;
    
    mySavingNow = mySaving - myExpense;
    saving.innerText = mySavingNow;

    var transactionList = document.getElementById('transactions');
    var transactionItem = document.createElement('li');
    transactionItem.textContent = 'Expense: -' + myExpense.toFixed(2);
    transactionItem.classList.add('expense');
    transactionList.appendChild(transactionItem);

    mySaving = mySavingNow;
    inputValue.value = '';
    
}   
   
