var allBooks = [];
var oneBook;
var submit = document.querySelector(".btn-submit");
var close = document.querySelector(".close");
var overlay = document.querySelector(".box-error");

if (localStorage.getItem("ourData") != null){
    allBooks = JSON.parse(localStorage.getItem("ourData"));
    displayBooks();
}


// >>>>>>>>>>>>>>>>> Add , validation , save , clear , diplay <<<<<<<<<<<<<<<<<<<<<<<<<

function submitFun(){

        //   ------------ Take Value -------------- 
    oneBook = {
         bookName : document.getElementById("bookName").value,
         bookUrl : document.getElementById("bookURL").value,
        
    }
    //  ------------ Validation
    var valid = /^(ftp|http|https):\/\/[^ "]+$/

       if ( valid.test(oneBook.bookUrl) ) {
            
       }else if(oneBook.bookUrl == "" || oneBook.bookName== ""){
        document.querySelector(".box-error").classList.replace("d-none" , "d-flex");
        return;

       }
       else{
        document.querySelector(".box-error").classList.replace("d-none" , "d-flex");
        return;
       }

    // --------------------- Push Books -----------

    allBooks.push(oneBook);
    localStorage.setItem("ourData" , JSON.stringify(allBooks));

    clearInputs();
    displayBooks();


  
}

// >>>>>>>>>>>>>>>>>>>>> Clear Function <<<<<<<<<<<<<<<<<<<<<<<<<

function clearInputs(){
    document.getElementById("bookName").value = "";
    document.getElementById("bookURL").value = "";
}

// >>>>>>>>>>>>>>>>>>>> Display Function <<<<<<<<<<<<<<<<<<<<<

function displayBooks(){

       var cartona ="" ;
    for(var i= 0; i<allBooks.length ; i++){

        cartona+= ` <tr class = 'mt-2'>
         <td>`+allBooks[i].bookName +`</td>`+
        `<td>`+allBooks[i].bookUrl +`</td>`+
        `<td> <a class="btn text-white bg-green border-0 py-2 px-3" href="`+allBooks[i].bookUrl+`"> <i class="fa-solid fa-eye"></i> Visit </a></td>`+


        `<td> <button onclick =" removeBooks(`+i+`)" class="remove btn text-white bg-red border-0 py-2 px-3"><i class="fa-solid fa-trash-can"></i> Delete</button></td> </tr>`
        
    
    }
    document.getElementById("t-Content").innerHTML = cartona;

    
}
// >>>>>>>>>>>>>>>> Close Error Function

function hideOverlay(){

    document.querySelector(".box-error").classList.replace("d-flex" , "d-none");
}
// >>>>>>>>>>>>>>>>. Close Error Function Call

close.addEventListener("click" , hideOverlay);
overlay.addEventListener("click" , hideOverlay);

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// >>>>>>>> Submit Action <<<<<<<<<<<<<<<<<<<<<<<<<<

submit.addEventListener("click" , submitFun);

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// >>>>>>>>>>>>>>>>>>> Delete Function 

function removeBooks(bIndex){
    allBooks.splice(bIndex , 1);
    localStorage.setItem("ourData" , JSON.stringify(allBooks));
    displayBooks();
    
}
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
