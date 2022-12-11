const SignUpPostDataHandler = (url, postData, method=console.log, token=null) => {
  fetch(url,{
    body: JSON.stringify(postData),
    headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
    },
    method:"POST",
})
.then(response => method(response))
.catch(error => console.error(error))
  }
export default SignUpPostDataHandler;