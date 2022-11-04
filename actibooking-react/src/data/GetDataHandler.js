const GetDataHandler = (url, setMethod, token = null) => {
    fetch(url,{
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
    })
    .then(response => {return response.json()})
    .then(data => {
        setMethod(data);
    }).catch(error => {console.error(error)})
}
export default GetDataHandler;