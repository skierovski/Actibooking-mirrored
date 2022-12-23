// import React, { useState, useEffect } from 'react';

const PutDataHandler = (url, postData, token = null) => {
  // const [postId, setPostId] = useState(null);
  // const [errorMessage, setErrorMessage] = useState(null);
  const requestOptions = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(postData),
  };
  fetch(url, requestOptions)
    .then(response => {
      const data = response.json();
      console.log(response.ok)

      // check for error response
      if (!response.ok) {
        // get error message from body or default to response status
        const error = (data && data.message) || response.status;
        return Promise.reject(error);
      }

      // setPostId(data.id);
    })
    .catch((error) => {
      // setErrorMessage(error);
      console.error("There was an error!", error);
    });
};
export default PutDataHandler;