module.exports = app => {
    const express = require('express');
    const router = express.Router();
    const HotSpot = require('../../model/HotSpot')
    router.post('/api/create', async (req, res) => {
        const model = await HotSpot.create(req.body)
        res.send(model)
    })
    router.get('/api', async (req, res) => {
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
        const query = await HotSpot.create(req.body)
        console.log(req.body)
        // console.log(res)
        res.send({
            status: 200,
            msg: 'get',
            data: query
        })
    });
    //find
    router.get('/api/find', async (req, res) => {
        // const raw = await HotSpot.find({ title: 'hello create!!' })
        const raw = await HotSpot.find(req.query)
        res.send(raw)
        console.log(req.query)
    });
    app.use('/', router)
}
