const SignUp = (email, password) => {
    fetch('http://localhost:8000/api/v1/auth/register', {
        method: 'POST',
        body: JSON.stringify({
            email, 
            password,
            firstName
        })
    }).then(res => res.json())
}

export default SignUp;