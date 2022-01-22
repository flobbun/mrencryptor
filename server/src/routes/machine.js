const { Router } = require('express');
const router = Router();
const Machine = require('../machine/main');

let lastInput = '';
router.route('/encrypt')
    .post((req, res) => {
        const { input, iterations, mode, protocol } = req.body;

        if (input !== lastInput && input.length > 0) {
            console.log('Processing...');
            res.status(200).json({
                output: Machine[mode](input, iterations, protocol)
            });
        }
        lastInput = input;
    });

module.exports = router;