const DeleteDataHandler = url => {
    fetch(url,{
        method:"DELETE",
    })
    .catch(error => {console.error(error)})
}
export default DeleteDataHandler;