
const PostDataHandler = (url, data, responseStatus = console.log) => {
    fetch(url,{
        method:"POST",
        headers: {
            "Content-Type": "application/json" 
        },
        body: JSON.stringify(
            data
          ),
    })
    .then(response => response, responseStatus(true))
    .catch(error => {console.error(error); responseStatus(false)})
}
export default PostDataHandler;