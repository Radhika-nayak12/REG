function Validation(values){
    let error={}
    const email_pattern=  /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-0]{8,}$/
    if (values.email===""){
        error.email="Name shoul not empty"
    }
    else if(!email_pattern.test(values.email)){
        error.email="email not match"
    }else{
        error.email =""
    }
    if (values.password===""){
        error.password="password didn't match"
    }
    else if(!password_pattern.test(values.password)){
        error.password="password"
    }else{
        error.password =""
    }
    return error;
}
export default Validation;