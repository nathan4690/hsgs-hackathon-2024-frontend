// services/auth.ts

import { request } from "http";

// const options = {
//     hostname: 'www.google.com',
//     port: 80,
//     path: '/upload',
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       'Content-Length': Buffer.byteLength(postData),
//     },
//   };
  
const apiLink = "http://localhost:1301"
export const addAccountToDatabase = async (username: string, password: string) => {
    const response = await fetch(apiLink + '/AddAccountToDatabase', {
        method: "POST",
        // mode: "cors",
        body: JSON.stringify({
          username: username,
          password: password
        }),
        headers: {
            "Accept": "application/json",
          "Content-Type": "application/json"
        //   "Access-Control-Allow-Origin": "*",
        //   "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS",
        //   "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Requested-With"
        }
    }).catch((err) => console.log(err));
    // axios.post(apiLink + "/AddAccountToDatabase", {"username": username, "password": password}).then(console.log("debug"));
    //const response = await fetch(apiLink + `/AddAccountToDatabase?username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`);
    const data = await response.json();
    return data;
};

export const loginPasswordVerify = async (username: string, password: string) => {
    const response = await fetch(apiLink + '/LoginPasswordVerify', {
        method: "POST",
        // mode: "cors",
        body: JSON.stringify({
          username: username,
          password: password
        }),
        headers: {
            "Accept": "application/json",
          "Content-Type": "application/json"
        //   "Access-Control-Allow-Origin": "*",
        //   "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS",
        //   "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Requested-With"
        }
    }).catch((err) => console.log(err));
    // axios.post(apiLink + "/AddAccountToDatabase", {"username": username, "password": password}).then(console.log("debug"));
    //const response = await fetch(apiLink + `/AddAccountToDatabase?username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`);
    const data = await response.json();
    return data;
    // const response = await fetch(apiLink + `/LoginPasswordVerify?username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`);
    // const data = await response.json();
    // return data;
};
