import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        // 'Access-Control-Allow-Origin': '*',
        'API-KEY': '3f9d1af1-7f48-40b9-97f9-18e3de6e5535'
    }
});
export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10)  {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
        // axios.get(`http://localhost:3001/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
    }
}
export const followAPI = {
    getUnFollow(id)  {
        return instance.delete(`follow/${id}`)
            .then(response => response.data);
    },
    getFollow(id)  {
        return instance.post(`follow/${id}`)
            .then(response => response.data);
    }
}
export const authAPI = {
    getAuth() {
        return instance.get(`auth/me`)
            .then(response => response.data);
    }
}
export const profileAPI = {
    gitProfile(userId) {
        return instance.get(`profile`)
            .then(response => response.data);
        // axios.get(`http://localhost:3001/profile/` + userId)
    }
}
