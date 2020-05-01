var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var cors = require('cors');
var path = require('path');
const bodyParser = require("body-parser");
var multer = require('multer');
var upload = multer({dest: './public/uploads/'})
var fs = require('fs');
require('dotenv').config();



var auth = {
    host: 'mail07.domainhotelli.fi',
    port: 465,
    secure: true,
    auth: {
        user: process.env.AUTH_USER,
        pass: process.env.AUTH_PASS
    }

}


const transporter = nodemailer.createTransport(auth);

transporter.verify((error, success) => {
    if (error) {
        console.log(error)
    } else {
        console.log('Server is ready to take messages')
    }
});



router.post('/', upload.array('file'), (req, res, next) => {

    var customerFirstName = req.body.firstName;
    var customerLastName = req.body.lastName;
    var customerName = customerFirstName + ' ' + customerLastName;
    var customerEmail = req.body.email;
    var customerPhoneNumber = req.body.phoneNumber;
    var customerCarMake = req.body.carMake;
    var customerCarModel = req.body.carModel;
    var customerCarYear = req.body.carYear;
    var customerCarEngine = req.body.carEngine;
    var customerCarValidation = req.body.carValidation;
    var customerCarMileage = req.body.carMileage;
    var customerCarInfo = req.body.carInfo;

    console.log(req.files);

    // Iterates through all of the user inputted files
    var attachmentArray = req.files.map((file) =>{
        return { filename: file.originalname, path: file.path}
    })

    const outputAdmin = 
    `<h3>Hei Abdl !</h3>
    <p>Sinulle on saapunut uusi hintahyvityslomake, alla näet tiedot </p>
    <ul>
        <li>Asiakas: ${customerName}</li>
        <li>sähköpostiosoite: ${customerEmail}</li>
        <li>Puhelinnumero: ${customerPhoneNumber}</li>
        <li>Auton valmistaja: ${customerCarMake}</li>
        <li>Malli: ${customerCarModel}</li>
        <li>Valmistusvuosi: ${customerCarYear}</li>
        <li>Moottorin tilavuus: ${customerCarEngine}</li>
        <li>katsastuspäivä ${customerCarValidation}</li>
        <li>Kilometrilukema: ${customerCarMileage}</li>
    </ul>
    <p>Lisätietoja autosta: ${customerCarInfo}</p>
    `

    const outputAutoResponse = 
    `<h3>Hei ${customerName}</h3>
    <p>Kiitos kun otit meihin yhteyttä, myyjämme käyvät läpi lähettämääsi lomaketta ja ottavat teihin yhteyttä mahdollisimman pian</p>
    <br></br>
    <p>Ystävällisin terveisin, Suomen Autotorin tiimi.</p>`

    

    var mailAdmin = {
        from: 'info@suomenautotori.fi',
        to: 'haider.alkaleedy@edu.turkuamk.fi',
        subject: 'Hintahyvitys',
        html: outputAdmin,
        attachments: attachmentArray
    }



    transporter.sendMail(mailAdmin, (err, data) => {
        if (err) {
            console.log('There was an error in admin mail', err)
        } else {
            console.log('Successful')
        }
    })

    var mailCustomer = {
        from: 'noreply@suomenautotori.fi',
        to: req.body.email,
        subject: 'Lomakkeesi on vastaanotettu',
        html: outputAutoResponse

    }

    transporter.sendMail(mailCustomer, (err, data) => {
        if (err) {
            console.log('There was an error in autoresponse', err)
        } else  {
            console.log('Successful')
            // Delete uploaded file after emailing
            const attachmentPath = req.files.map((file) => {
                return file.path
            })
            fs.unlink(attachmentPath, (err) => {
                if (err) {
                    console.log('error deleting file', err);
                }
                else {console.log('file deleted successfully');
                }
            })
        }
        
    })

    



})



module.exports = router;  