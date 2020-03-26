const connection = require('../database/connection');

module.exports = {
    async create(request, response) {
    const { id } = request.body;
    
    const ongs = await connection('ongs')
    .where('id', id)
    .select('name')
    .first();

    if (!ongs) {
        return response.status(400).json({ error: 'Deu pau ai amigao, tem nenhuma ONG com esse ID'});
    }
    
    return response.json(ongs);

    }
}