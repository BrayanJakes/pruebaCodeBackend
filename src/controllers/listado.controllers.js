const data = require('../database.json')

const ctrl = {};


ctrl.listar = async(req, res) => {



    return res.json({
        ok: true,
        data
    })

};

module.exports = ctrl;