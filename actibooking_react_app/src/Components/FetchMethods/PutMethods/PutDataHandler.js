const PutDataHandler = (url, postData, token = null) => {
  const requestOptions = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(postData),
  };
  fetch(url, requestOptions)
    .then(async (response) => {
      const data = await response.json();

      // check for error response
      if (!response.ok) {
        // get error message from body or default to response status
        const error = (data && data.message) || response.status;
        return Promise.reject(error);
      }

/*       setPostId(data.id); */
    })
    /* .catch((error) => {
      setErrorMessage(error);
      console.error("There was an error!", error);
    }) */;
};
export default PutDataHandler;
