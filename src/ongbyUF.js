const connection = require('./database/connection');

module.exports = {

    async index(request, response){
        const ong_uf = request.param.ong_uf;

        const ong = await connection('ongs')
        .where('uf', ong_uf)
        .select('*');
       
        return response.json(ong);

    }

};