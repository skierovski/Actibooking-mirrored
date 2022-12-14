const OrganizationFilterPostDataHandler = (url, method=console.log, token=null) => {
    fetch(url,{
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
  export default OrganizationFilterPostDataHandler;