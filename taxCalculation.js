/**
 * Input: Monthly Income and Tax Relief
 * Process: Calculate The Tax ((Mothly Income * 12) - relief) - base tax ) * percentage tax
 * Output: Tax Nominal
 */

function taxCalculate(mIncome, relief){
    let grossAnnualIncome = mIncome * 12;
    let nettAnnualIncome = grossAnnualIncome;
    let tax = 0
    let temp = 0
    let initFee1 = 50000000 * 0.05
    let initFee2 = 200000000 * 0.15
    let initFee3 = 250000000 * 0.25

    if(relief == 'TK0'){
        nettAnnualIncome = grossAnnualIncome - 54000000;
    }else if(relief == 'K0') {
        nettAnnualIncome = grossAnnualIncome - 58500000;
    }else if(relief == 'K1') {
        nettAnnualIncome = grossAnnualIncome - 63000000;
    }else if(relief == 'K2') {
        nettAnnualIncome = grossAnnualIncome - 67500000;
    }else if(relief == 'K3') {
        nettAnnualIncome = grossAnnualIncome - 72000000;
    }else {
        // default relief is single
        nettAnnualIncome = grossAnnualIncome - 54000000;   
    }
    
    if(nettAnnualIncome > 0 && nettAnnualIncome <= 50000000){
        tax = 0.05 * nettAnnualIncome
    }else if(nettAnnualIncome > 5000000 && nettAnnualIncome <= 250000000) {
        temp = (nettAnnualIncome - 50000000) * 0.15
        tax = initFee1 + temp
    }else if(nettAnnualIncome > 25000000 && nettAnnualIncome <= 500000000) {
        temp = (nettAnnualIncome - 250000000) * 0.25
        tax = initFee1 + initFee2 + temp
    }else if(nettAnnualIncome > 500000000) {
        temp = (nettAnnualIncome - 500000000) * 0.3
        tax = initFee1 + initFee2 + initFee3 + temp
    }else {
        tax = 0;  
    } 

    return 'Annual Tax Income : ' + tax;
}

console.log(taxCalculate(6500000, 'K1'))
console.log(taxCalculate(25000000, 'TK0'))