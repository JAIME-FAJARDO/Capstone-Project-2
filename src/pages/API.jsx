const COHORT_NAME = '2302-ACC-ET-WEB-PT-A'
const BASE_URL = 'https://fakestoreapi.com/products'
// const BASE_URL =`https://strangers-things.herokuapp.com/api/${COHORT_NAME}`

export const fetchPosts = async () => {
    try {
      const response = await fetch(`${BASE_URL}`)
  
      const result = await response.json();
      console.log("result is" + result);
      // return result.data.posts;
      return result;
    } catch (err) {
      console.error(err);
    }
}

export const registerUser = async (username, password) => {
    try {
      const response = await fetch(
        `${BASE_URL}/users/register`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          user: {
            username: username,
            password: password
          }
        })
      });
      const result = await response.json();
// You can log ▲▲▲ the result
// here ▼▼▼ to view the json object before returning it
      console.log("result from Registeruser", result)
      return result.data.token;
    } catch (err) {
      console.error(err);
    }
  }

  export const loginUser = async (username, password) => {
    try {
      const response = await fetch(
        `${BASE_URL}/users/login`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          user: {
            username:username,
            password:password
          }
        })
      });
      const result = await response.json();
// You can log ▲▲▲ the result
// here ▼▼▼ to view the json object before returning it
      console.log(result)
      return result.data.token;
    } catch (err) {
      console.error(err);
    }
  }

  export const profileData = async ( token) => {

    try {
      const response = await fetch(`${BASE_URL}/users/me`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
      });
      const result = await response.json();
      console.log(result);
      return result.data;
    } catch (err) {
      console.error(err);
    }
  }