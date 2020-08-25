const db = require('../config/db')

module.exports = {
  all(){
    return db.query(`
      SELECT * FROM users
    `)
  },
  post(data){
    const query = `
      INSERT INTO users(
        avatar,
        name,
        breed,
        weight,
        birthday,
        gender
      ) VALUES($1, $2, $3, $4, $5, $6)
      RETURNING id
    `
    const values =[
      data.avatar,
      data.name,
      data.breed,
      data.weight,
      data.birthday,
      data.gender
    ]

    return db.query(query, values)
  },
  update(data){
    const query = `
      UPDATE users SET
        avatar=($1),
        name=($2),
        breed=($3),
        weight=($4),
        birthday=($5),
        gender=($6),
        where id=$7
    `
   
    const values = [
      data.avatar,
      data.name,
      data.breed,
      data.weight,
      data.birthday,
      data.gender,
      data.id
    ]

    return db.query(query, values)

  },
  delete(id){
    return db.query('DELETE FROM users WHERE id = $1', [id])
  }
}