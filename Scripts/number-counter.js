var blogNumber = setInterval(numOfBlogs, 400);
var catNumber = setInterval(numOfCat, 600);
var visitors = setInterval(visitors, 200);


let count1 = 1;
let count2 = 1;
let count3 = 1;

function numOfBlogs() {
    count1++
    document.querySelector('#numofblogs').innerHTML = count1;

    if(count1 == 70) {
        clearInterval(blogNumber)
    }

    repeat()
}

function numOfCat() {
    count2++
    document.querySelector('#numofcats').innerHTML = count2;

    if(count2 == 40) {
        clearInterval(catNumber)
    }

    
}

function visitors() {
    count3++
    document.querySelector('#visitors').innerHTML = count3;

    if(count3 == 200) {
        clearInterval(visitors)
    }

    
}