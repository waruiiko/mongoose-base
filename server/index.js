const express = require('express')
const app = express()
const port = 3000
// const router = express.Router()

app.use(express.json())

const cors = require('cors')
app.use(cors())

require('./routes/admin')(app);
require('./plugins/db')(app);

app.listen(port,()=>{
  console.log(`Server running at http://127.0.0.1:${port}`)
});


//model
// const HotSpot = require('./model/HotSpot');

// app.get('/get', (req, res) => {
//   res.send('Hello World!')
// })

// //add
// app.get('/create', async (req, res) => {
//   const raw = await HotSpot.create({ aid: 123, title: 'hello create!!' })
//   res.send(raw)
//   // res.send('Hello create!')
// });

// //find
// app.get('/find', async (req, res) => {
//   const raw = await HotSpot.find({ title: 'hello create!!' })
//   res.send(raw)
// })

// //update

// app.get('/update', async (req, res) => {
//   const raw = await HotSpot.updateOne({ title: 'hello create!!' }, { title: 'updated' })
//   res.send(raw)
// })

// //delete
// app.get('/delete', async (req, res) => {
//   const raw = await HotSpot.deleteOne({ aid: 123, title: 'updated' })
//   res.send(raw)
// });

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

// router.post('/ca', async (req, res) => {
//   const model = await HotSpot.create({ aid: 123, title: 'hello create!!' })
//   res.send(model)
// })

// app.use('/admin/api',router)