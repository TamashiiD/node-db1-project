
const db = require('../../data/db-config')



const getAll = () => {
  // DO YOUR MAGIC
  return db('accounts')
}

const getById = id => {
  // DO YOUR MAGIC
  return db('accounts').where('id', id).first()

}

const create = async account => {
  const [id] = await db('accounts').insert(account)
  return getById(id)
  // DO YOUR MAGIC This doesnt work for some reason!!
}

const updateById = async (id, account) => {
await db("accounts").where("id", id).update(account)
return getById(id)
  // DO YOUR MAGIC
}

const deleteById = id => {
  // DO YOUR MAGIC
  return db('accounts').where('id', id).del()

}

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
}
