module.exports = app => {
    const express = require('express');
    const router = express.Router();
    // const HotSpot = require('../../model/HotSpot')
    // router.post('/create', async (req, res) =>{
    //     const model = await HotSpot.create(req.body)
    //     res.send(model)
    // })
    router.get('/', async (req, res) => {
        res.send('Hello World!')
    })
    router.get('/api/get', async (req, res) => {
        const query = req.query
        res.send({
            status: 200,
            msg: 'get',
            data: query
        })
    })
    //add
    router.get('/api/create', async (req, res) => {
        const query = req.query
        res.send({
            status: 200,
            msg: 'get',
            data: query
        })
      });
    app.use('/', router)
}