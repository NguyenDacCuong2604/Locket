const SignIn = (email, password) => {
    fetch('http://localhost:8000/api/v1/auth/login', {
        method: 'POST',
        body: JSON.stringify({
            email, 
            password
        })
    }).then(res => res.json())
}

export default SignIn;