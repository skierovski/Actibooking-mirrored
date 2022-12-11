const LogInPostDataHandler = (url, postData, method=console.log, token=null) => {
    fetch(url,{
      body: JSON.stringify(postData),
      headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
      },
      method:"POST",
  })
  .then(response => response.json())
  .then(data => method(data))
  .catch(error => {console.error(error)})
    }
  export default LogInPostDataHandler;