const getUser = async (req, res) => {
    return res.sendSuccess('Datos user')
}

const getUserGitHub = async (req, res) => {
    return res.sendSuccess('Datos GitHub')
}

const addUser = async (req, res) => {
    return res.sendSuccess('Creacion de User')
}

module.exports = {getUser, getUserGitHub, addUser}
