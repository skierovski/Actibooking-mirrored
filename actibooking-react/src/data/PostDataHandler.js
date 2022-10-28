
const PostDataHandler = (url,data) => {
    fetch(url,{
        method:"POST",
        headers: {
            "Content-Type": "application/json" 
        },
        body: JSON.stringify(
            data
          ),
    })
    .then(response => response.json())
    .catch(error => {console.error(error)})
}
export default PostDataHandler;