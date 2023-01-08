const GetDataHandler = async (url, setMethod, token = null) => {
    await fetch(url,{
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
    })
    .then((response) => response.json())
    .then((responseData) => {
      setMethod(responseData);
    })
    .catch(error => {console.error(error)})
}
export default GetDataHandler;