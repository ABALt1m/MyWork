window.addEventListener("load", (e) => {
    let index = new IndexController();
    index.init();
});

class IndexController {

    init() {
        // Dit zijn de correcte gebruikersnaam en wachtwoord.
        let correctUsername = "1";
        let correctPassword = "12";

        
        // Begin hier met je code te schrijven.
    const loginSection = document.querySelector(".loginSection");
    const loginForm = document.querySelector('.loginForm');
    const userNameInput = document.querySelector('.name');
    const passWordInput = document.querySelector('.password');    
    const errorP = document.querySelector('.error-text');
    const error = document.querySelectorAll(".input");

    loginForm.addEventListener('submit' , (event) => {
        event.preventDefault();
        const userName = userNameInput.value;
        const password = passWordInput.value;
        
        if(userName === correctUsername && password === correctPassword ) {
            loginSection.innerHTML = "Login success ";
            
        }else{
          
            errorP.textContent = "login mislukt";
            errorP.classList.add("error-text");

           for (let i = 0; i < error.length; i++) {
                const element = error[i];
                element.classList.add("error");
                
            }
            
        }
    })
 
      
    }



  
}  
