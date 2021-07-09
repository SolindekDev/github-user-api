
const fetch = require('node-fetch')

module.exports = {
     /**
     * Get user by username 
     * 
     * @param {*} member 
     * @returns JSON 
     */
    getUser: function (member) {
        fetch(`https://api.github.com/users/${member}`)
            .then(res => res.json())
            .then(json => {
                if (json.message === "Not Found") {
                    throw new TypeError("User not found!")
                    return
                }
                return true
            });
    },
}