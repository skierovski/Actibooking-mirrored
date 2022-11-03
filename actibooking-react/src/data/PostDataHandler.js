
const PostDataHandler = (url, data, responseStatus = console.log) => {
    fetch(url,{
        method:"POST",
        headers: {
            "Content-Type": "application/json" 
        },
        body: JSON.stringify(
            data
          ),
    }).then(response => response.json().then(data => ({data: data,})).then(res => {responseStatus(res.data.token)
}))
    .catch(error => {console.error(error); responseStatus(false)})
}
export default PostDataHandler;