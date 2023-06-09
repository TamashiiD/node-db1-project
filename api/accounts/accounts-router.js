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

router.get('/:id', MW.checkAccountId, async (req, res, next) => {
 res.json(req.account)
  // DO YOUR MAGIC
})

router.post('/',MW.checkAccountPayload, MW.checkAccountNameUnique, (req, res, next) => {
  // DO YOUR MAGIC
  Accounts.create(req.body)
  .then(newbody => {
    res.json(newbody)
  })
  .catch(err=> {
    next(err)
  })
})

router.put('/:id', MW.checkAccountId, MW.checkAccountPayload, MW.checkAccountNameUnique, (req, res, next) => {
  // DO YOUR MAGIC
  Accounts.create(req.body)
  .then(newpost=> {
    res.status(201).json(newpost)
  })
  .catch(err=>{
    next(err)
  })
});

router.delete('/:id', MW.checkAccountId, async (req, res, next) => {
  try{
    await Accounts.deleteById(req.params.id)
    res.json(req.account)
  }
  catch(err){
    next(err)
  }
  // DO YOUR MAGIC
})

router.use((err, req, res, next) => { // eslint-disable-line
  // DO YOUR MAGIC
  res.status(err.status || 500).json({
    message: err.message,

  })
})

module.exports = router;
