import axios from "axios"

export const axiosHelper = ({
    route,
    method = 'get',
    data = {},
    successMethod = r => console.log(r),
    failureMethod = e => console.log(e)
    // token
}) => {
    return axios({
        method,
        url: "https://jsonplaceholder.typicode.com/" + route,
        data,
        // header (?)
    })
        .then(res => successMethod(res.data))
        .catch(er => failureMethod(er))
}