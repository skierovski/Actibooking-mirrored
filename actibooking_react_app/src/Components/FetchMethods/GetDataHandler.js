const GetDataHandler = (url, setMethod = console.log, token = null) => {
    fetch(url,{
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
    })
    .then(response => {setMethod(response.json())})
    .then(data => console.log(data))
    .catch(error => {console.error(error)})
}
export default GetDataHandler;