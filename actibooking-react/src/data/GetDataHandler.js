const GetDataHandler = (url, setMethod) => {
    fetch(url,{
        headers: {
            "Content-Type": "application/json" 
        },
    })
    .then(response => {return response.json()})
    .then(data => {
        setMethod(data);
    }).catch(error => {console.error(error)})
}
export default GetDataHandler;