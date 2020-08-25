const User = require('../models/User')

module.exports = {
  async index(req, res){
    const users = await User.all()

    return res.json(users.rows)
  },
  async post(req, res){
    const keys = Object.keys(req.body)

    for(key of keys) {
        if (req.body[key] == "") {
            return res.send('Please, fill all fields!')
        }
    }

    let results = await User.post(req.body)

    const userId = results.rows[0].id

    return res.json( userId )
    
  },
  async put(req, res){
   
   await User.update(req.body)   
   
    return res.json(req.body.id)    
  },
  async delete(req, res){
    await User.delete(req.body.id)

    return res.status(204).send()
  }
  
}