// Receber os inputs do index
// Validação de Email
// Salvar no local storage
// Validação dos dados de Login
// Redirecionar para a Page home


function newUser(){
    let email = document.getElementById('emailInput').value.trim()
    let password =  document.getElementById('passwordInput').value.trim()

    if(email == '' || password ==''){
        document.getElementById('registerErro').innerHTML = 
        ` 
          <h4 class="error" id="registerErro">Complete all the inputs.</h4>
        `
    }else{

        if(validateEmail(email) == false || password.length < 6) {

            document.getElementById('registerErro').innerHTML = 
            ` 
            <h4 class="error" id="registerErro">Email or password incorrect.</h4>
            `
            
        }else{

            localStorage.setItem('email', email)
            localStorage.setItem('password',password)
            
            document.getElementById('emailInput').value = ''
            document.getElementById('passwordInput').value = ''

            window.location.replace('./login.html')
        }
    }
}


function loginUser(){

    let loginEmail = document.getElementById('loginEmail').value.trim()
    let loginPassword = document.getElementById('loginPassword').value.trim()

    if(loginEmail == '' || loginPassword ==''){
        document.getElementById('loginError').innerHTML = 
        ` 
          <h4 class="error" id="loginError">Complete all the inputs.</h4>
        `
    }else{
        let storageEmail = localStorage.getItem('email')
        let storagePassword = localStorage.getItem('password')

        if(loginEmail == storageEmail && loginPassword == storagePassword){


            document.getElementById('loginEmail').value = ''
            document.getElementById('loginPassword').value = ''

            window.location.replace('./home.html')

        }else{

            document.getElementById('loginError').innerHTML = 
            ` 
              <h4 class="error" id="loginError">Email or password invalid.</h4>
            `
        }     
    }
}

function homePage(){

    let email = localStorage.getItem('email')

    document.getElementById('home-title').innerHTML = `
        Welcome ${email}.
    `

}





function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}