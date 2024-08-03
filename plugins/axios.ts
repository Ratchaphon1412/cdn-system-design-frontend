import axios from 'axios';

export default defineNuxtPlugin(async () => {
    let api = axios.create({
        baseURL: 'http://localhost:8000/api/v1/'
    })
    return {
        provide: {
            axios: api,
        }
    }
})

// export default defineNuxtPlugin((nuxtApp) => {
//   const defaultUrl = "<https://localhost:5001>";

//   let api = axios.create({
//     baseUrl: defaultUrl,
//     headers: {
//       common: {},
//     },
//   });
// return {
//     provide: {
//       api: api,
//     },
//   };
// });