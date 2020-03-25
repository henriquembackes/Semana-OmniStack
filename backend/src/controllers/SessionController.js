const connection = require('../database/connection');

module.exports = {
    async create(request, response) {
    const { id } = request.body;
    
    const ong = await connection('ong')
    .where('id', id)
    .select('name')
    .first();

    if (!ong) {
        return response.status(400).json({ error: 'Deu pau ai amigao, tem nenhuma ONG com esse ID'});
    }
    
    return response.json(ong);

    }
}