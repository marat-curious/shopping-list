// @flow
import express from 'express';

const router = express.Router();

router.get('/', (req, res) => { res.json({message: 'Server Response OK'})});

module.exports = router;
