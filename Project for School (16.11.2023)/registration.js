
function reg() {
    let section = document.querySelector('section');


    if (section.style.display === "none") {
        
        section.style.display = "block";
        
    }
    else {
        let email = document.querySelector('#email').value;

        let mainEmail = document.querySelector('#mainEmail');


        mainEmail.value = email;


        
        section.style.display = "none";
    }

}



