import axios from 'axios';

module.exports = {
    fetchContest : contestId => {
        return axios.get(`/api/contest/${contestId}`)
                .then( resp => resp.data )
    },

    backToHome : () => {
        return axios.get('api/contest')
            .then( resp => resp.data.data )
    }
}