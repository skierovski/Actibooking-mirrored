import axios from "axios";

const PostDataHandler = (url, data, method=console.log) => {
    let responseData,error = null;
    axios.post(url,data)
      .then((response) => {
        responseData = response.data;
        method(response);    
    })
      .catch((err) => {
        error = err;
      }).finally(() => {
      });
      return {responseData, error};
  }
export default PostDataHandler;