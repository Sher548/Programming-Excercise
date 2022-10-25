const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const titleInput = document.querySelector('#title');
const salaryInput = document.querySelector('#salary');
const msg = document.querySelector('.msg');
const list = document.querySelector('#items');
let salary;
let taxOnSalary;



myForm.addEventListener('submit', onSubmit);

function onSubmit(e){

    const superAnnuation = salaryInput.value*0.105;
    if(salaryInput.value <= 18200)
    {
        taxOnSalary = 0;
    }
    else if(salaryInput.value >= 18201 && salaryInput.value <=37000){
        salary = salaryInput.value -18200;
        console.log("Hello World");
        taxOnSalary = salary*0.19;
    }else if(salaryInput.value >= 37001 && salaryInput.value <=90000){
        salary = salaryInput.value - 37000;
        taxOnSalary = 3572 + salary*0.325;
    }else if(salaryInput.value >= 90001 && salaryInput.value <= 180000){
        salary = salaryInput.value - 90000;
        taxOnSalary = 20797 + salary*0.37;
    }else{
        salary = salaryInput.value - 180000;
        taxOnSalary = 54097 + salary*0.45;
    }
    e.preventDefault();

    if(nameInput.value === '' || emailInput.value === '' || titleInput.value === '' || salaryInput.value === ''){
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all the values';

        setTimeout(() => {
            msg.remove();
        }, 3000);
    } else {
        const netSalary =  salaryInput.value - taxOnSalary;
        const li = document.createElement('li');
        const li2 = document.createElement('li');
        const li3 = document.createElement('li');
        const li4 = document.createElement('li');
        const li5 = document.createElement('li');
        const li6 = document.createElement('li');
        li.appendChild(document.createTextNode(`Name of Employee: ${nameInput.value}`));
        li2.appendChild(document.createTextNode(`Email: ${emailInput.value}`));
        li3.appendChild(document.createTextNode(`Job Title: ${titleInput.value}`));
        li4.appendChild(document.createTextNode(`Gross Salary: ${salaryInput.value}`));
        li5.appendChild(document.createTextNode(`Net Salary: ${netSalary}`));
        li6.appendChild(document.createTextNode(`Super Annuation: ${superAnnuation}`));

        list.appendChild(li);
        list.appendChild(li2);
        list.appendChild(li3);
        list.appendChild(li4);
        list.appendChild(li5);
        list.appendChild(li6);
        // clear Fields

        nameInput.value = '';
        emailInput.value = '';
        titleInput.value = '';
        salaryInput.value = '';
    }
}
