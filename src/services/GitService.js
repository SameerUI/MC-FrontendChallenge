import axios from 'axios';

const GITHUB_USERS_URL = 'https://api.github.com/search/users?q=';

export default {
    async getAPIResponse(searchData) {
        // Wait for 5 sec
        await new Promise(resolve => setTimeout(resolve, 5000));

        console.log("searchData : ", searchData);
        searchData = searchData.trim();
        if (!searchData || searchData.length < 1) return [];

        return axios.get(GITHUB_USERS_URL + searchData).then(e => {
            let userList = e.data.items;
            if (userList.length > 0) {
                let gitUserNameList = []
                userList.map(e => gitUserNameList.push({'name' : e.login, 'img': e.avatar_url}));
                console.log("GitUserNameList : ", gitUserNameList);
                return gitUserNameList;
            }
            return []

        }).catch(err => {
            console.error("Exception : ", err)
            return [];
        });
    }

}
