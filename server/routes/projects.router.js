const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// GET all projects from the database
router.get('/', (req, res) => {
  const queryText = `SELECT * FROM projects ORDER BY "name";`;
  pool.query(queryText)
    .then((result) => { res.send(result.rows); })
    .catch((err) => {
      console.log('Error completing SELECT projects query', err);
      res.sendStatus(500);
    });
}); // End GET

// GET all tags from the database
router.get('/tags', (req, res) => {
  const queryText = `SELECT * FROM "tags";`;
  pool.query(queryText)
    .then((result) => { res.send(result.rows); })
    .catch((err) => {
      console.log('Error completing SELECT tags query', err);
      res.sendStatus(500);
    });
}); // End GET

// POST a project to the database
router.post('/', (req, res) => {
  // req.body should be a project object
  const newProject = req.body;

  // database query should mask VALUES
  const queryText = 
    `INSERT INTO "projects" (
      "name",
      "description",
      "thumbnail",
      "website",
      "github",
      "tag_id"
    )
    VALUES (
      $1, $2, $3, $4, $5, $6
    );`
  ;
  
  // database query
  pool.query(
    queryText,
    [
      newProject.name,
      newProject.description,
      newProject.thumbnail,
      newProject.website,
      newProject.github,
      newProject.tag_id,
    ]
  )
  .then((result) => {
    console.log( `Added project to the database`, newProject );
    res.sendStatus( 201 ); // Good servers always responds
  })
  .catch((error) => {
      console.log( `Error making database query ${ queryText }`, error);
      res.sendStatus( 500 ); // Good servers always responds
  })
}); // End POST


// DELETE a specific project from the database
router.delete('/:id', (req, res) => {
  const queryText = 'DELETE FROM projects WHERE id=$1';
  pool.query(queryText, [req.params.id])
    .then(() => { res.sendStatus(200); })
    .catch((err) => {
      console.log('Error completing SELECT plant query', err);
      res.sendStatus(500);
    });
}); // End DELETE

module.exports = router;