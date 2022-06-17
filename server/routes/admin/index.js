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
    router.get('/get', async (req, res) => {
        const query = req.query
        res.send({
            status: 200,
            msg: 'get',
            data: query
        })
    })
    //add
    app.get('/create', async (req, res) => {
        const query = req.query
        res.send({
            status: 200,
            msg: 'get',
            data: query
        })
      });
    app.use('/', router)
}