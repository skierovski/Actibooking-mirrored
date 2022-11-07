const DeleteDataHandler = (url, token = null) => {
    fetch(url,{
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        method:"DELETE",
    })
    .catch(error => {console.error(error)})
}
export default DeleteDataHandler;