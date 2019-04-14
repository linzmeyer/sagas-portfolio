const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// GET all projects
router.get('/', (req, res) => {
  const queryText = 'SELECT * FROM projects';
  pool.query(queryText)
    .then((result) => { res.send(result.rows); })
    .catch((err) => {
      console.log('Error completing SELECT projects query', err);
      res.sendStatus(500);
    });
});

// DELETE a specific project
router.delete('/:id', (req, res) => {
  const queryText = 'DELETE FROM projects WHERE id=$1';
  pool.query(queryText, [req.params.id])
    .then(() => { res.sendStatus(200); })
    .catch((err) => {
      console.log('Error completing SELECT plant query', err);
      res.sendStatus(500);
    });
});


module.exports = router;