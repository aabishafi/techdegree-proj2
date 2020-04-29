/******************************************
     Treehouse Techdegree:
    FSJS project 2 - List Filter and Pagination 
    
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


//global variables
const studentList = document.getElementsByClassName('student-item cf');
const itemsInPage = 10;
const containerDiv = document.querySelector('.page');





/*** 
    function to hide all of the items in the 
   list except for the ten to be shown.

   ***/
function showPage(list, page) {
    let startIndex = (page * itemsInPage) - itemsInPage;
    let endIndex = page * itemsInPage;
    for (let i = 0; i < list.length; i++) {
        if (i >= startIndex && i < endIndex) {
            list[i].style.display = '';
        } else {
            list[i].style.display = 'none';
        }
    }
}




// adding pagination links

function appendPageLinks(list) {
    const pageNumbers = Math.ceil(list.length / itemsInPage);
    /*creating wrapper div for the list 
    and appending to main div*/
    const div = document.createElement('div');
    div.className = 'pagination';
    containerDiv.appendChild(div);
    const ul = document.createElement('ul');
    div.appendChild(ul);
    //create list and append to student list
    for (let i = 0; i < pageNumbers; i += 1) {
        const li = document.createElement('li');
        ul.appendChild(li);
        const a = document.createElement('a');
        a.href = '#';
        a.textContent = i + 1;
        li.appendChild(a);
        //addeventlistener for the buttons to add and remove active class
        a.addEventListener('click', (e) => {
            e.preventDefault();
            const currentPage = document.querySelector('.active');
            if (currentPage) {
                currentPage.classList.remove('active');
            }
            e.target.className = 'active';
            showPage(studentList, a.textContent);
        })
    }

}

//calling both functions
showPage(studentList, 1);
appendPageLinks(studentList);