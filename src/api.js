import axios from 'axios';

module.exports = {
    fetchContest : contestId => {
        return axios.get(`/api/contest/${contestId}`)
                .then( resp => resp.data )
    },

    backToHome : () => {
        return axios.get('/api/contest')
            .then( resp => resp.data.data )
    },

    nameIds : nameIds => {
        return axios.get(`/api/names/${nameIds.join(',')}`)
            .then( resp => resp.data.names )
    },

    addName : (newName, contestId) => {
        return axios.post('/api/names', { newName, contestId })
            .then( resp => resp.data )
    }
}