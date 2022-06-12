const express = require('express')
const app = express()
const port = 3000

const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/bilihot');
}

const HotSpot = require('./model/HotSpot');

app.get('/', (req, res) => {
  res.send('Hello World!')
})

//add
app.get('/create', async (req, res) => {
  const raw = await HotSpot.create({ aid: 123, title: 'hello create!!' })
  res.send(raw)
  // res.send('Hello create!')
});

//find
app.get('/find', async (req, res) => {
  const raw = await HotSpot.find({ title: 'hello create!!' })
  res.send(raw)
})

//update

app.get('/update', async (req, res) => {
  const raw = await HotSpot.updateOne({ title: 'hello create!!' }, { title: 'updated' })
  res.send(raw)
})

//delete
app.get('/delete', async (req, res) => {
  const raw = await HotSpot.deleteOne({ aid: 123, title: 'updated' })
  res.send(raw)
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})