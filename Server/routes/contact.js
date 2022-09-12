var express = require('express');
var router = express.Router();
var db  = require('../db');
var bodyParser = require('body-parser');
var nodeMailer = require('nodemailer');


router.use(bodyParser.json()); // for parsing application/json
router.use(bodyParser.urlencoded({extended: true})); // for parsing application/x-www-form-urlencoded

/* get method for fetch all products. */
router.get('/', function(req, res, next) {
    var sql = "SELECT * FROM contacts ";
    db.query(sql, function(err, rows, fields) {
      if (err) {
        res.status(500).send({ error: 'Something failed!' })
      }
      res.json(rows)
    })
  });

  
/*get method for fetch single product*/
router.get('/:id', function(req, res, next) {
    var id = req.params.id;
    var sql = `SELECT * FROM contacts WHERE id=${id}`;
    db.query(sql, function(err, row, fields) {
      if(err) {
        res.status(500).send({ error: 'Something failed!' })
      }
      res.json(row[0])
    })
  });

// send mail on contact form
router.post('/send-email', function (req, res) {
    var name = req.body.name;
    var email = req.body.email;
    var mobile = req.body.mobile;
    var message = req.body.message;
    

    let transporter = nodeMailer.createTransport({
        host: 'softgetix.com',
        port: 587,
        secure: false,
        requireTLS:true,
        auth: {
          user: 'softgetix.test@gmail.com',
          pass: 'softgetix@2022'
        }, tls: {
          rejectUnauthorized: false
        },
    });
    
    let mailOptions = {
        from: req.body.email, // sender address
        to: 'bhawalkarashwini27@gmail.com', // list of receivers
        subject: 'Contact Us', // Subject line
        text: message, // plain text body
        html: '<b>NodeJS Email Tutorial</b>' // html body
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message %s sent: %s', info.messageId, info.response);
        var sql = `INSERT INTO contacts (name, email, mobile, message, created_at) VALUES ("${name}", "${email}", "${mobile}","${message}", NOW())`;
        db.query(sql, function(err, result) {
          if(err) {
            res.status(500).send({ error: 'Something failed!' })
          }
          res.json({'status': 'success', id: result.insertId , 'name': req.body.name})
        })

            // res.render('index');
        });
    });

/*post method for create product*/
router.post('/create', function(req, res) {
  console.log(req.body);
    var name = req.body.name;
    var email = req.body.email;
    var mobile = req.body.mobile;
    var message = req.body.message;
    
    var sql = `INSERT INTO contacts (name, email, mobile, message, created_at) VALUES ("${name}", "${email}", "${mobile}","${message}", NOW())`;
    db.query(sql, function(err, result) {
      if(err) {
        res.status(500).send({ error: 'Something failed!' })
      }
      res.json({'status': 'success', id: result.insertId , 'name': req.body.name})
    })
  });
  
  /*put method for update product*/
  router.put('/update/:id', function(req, res, next) {
    var id = req.params.id;
    var name = req.body.name;
 
    var sql = `UPDATE contacts SET name="${name}" WHERE id=${id}`;
    db.query(sql, function(err, result) {
      if(err) {
        res.status(500).send({ error: 'Something failed!' })
      }
      res.json({'status': 'success'})
    })
  });
  
  /*delete method for delete product*/
  router.delete('/delete/:id*?', function(req, res, next) {
    var id = req.params.id;
    var sql = `DELETE FROM contacts WHERE id=${id}`;
    db.query(sql, function(err, result) {
      if(err) {
        res.status(500).send({ error: 'Something failed!' })
      }
      res.json({'status': 'success'})
    })
  });

  
  module.exports = router;
