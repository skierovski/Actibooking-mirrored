const ImagePost = (url, formData, method=console.log, token=null) => {
    fetch(url,{
      body: formData,
      headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
      },
      method:"POST",
  })
  .then(response => method(response))
  .catch(error => console.error(error))
    }
  export default ImagePost;