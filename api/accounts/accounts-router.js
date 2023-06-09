const router = require('express').Router()
const Accounts = require('./accounts-model')
const MW = require('./accounts-middleware')


router.get('/', (req, res, next) => {
  Accounts.getAll()
  .then(stuff => {
    res.status(200).json(stuff)
  })
  .catch(err =>{
    next()
  })
  // DO YOUR MAGIC
})

router.get('/:id', MW.checkAccountId, (req, res, next) => {
  // DO YOUR MAGIC
})

router.post('/', (req, res, next) => {
  // DO YOUR MAGIC
})

router.put('/:id', MW.checkAccountId, MW.checkAccountPayload, MW.checkAccountNameUnique, (req, res, next) => {
  // DO YOUR MAGIC
});

router.delete('/:id', MW.checkAccountId, (req, res, next) => {
  // DO YOUR MAGIC
})

router.use((err, req, res, next) => { // eslint-disable-line
  // DO YOUR MAGIC
  res.status(err.status || 500).json({
    message: err.message,

  })
})

module.exports = router;
