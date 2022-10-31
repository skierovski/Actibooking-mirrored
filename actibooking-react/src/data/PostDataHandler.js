
const PostDataHandler = (url, data, responseStatus) => {
    fetch(url,{
        method:"POST",
        headers: {
            "Content-Type": "application/json" 
        },
        body: JSON.stringify(
            data
          ),
    })
    .then(response => {responseStatus(true);response.json()})
    .catch(error => {console.error(error); responseStatus(false)})
}
export default PostDataHandler;