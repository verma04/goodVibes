const express = require("express");
const router = express.Router();

const sgMail = require("@sendgrid/mail");
function routes(app) {

router.post("/formEnquiry", (req, res) => {

    console.log(req.body)
  

    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey('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');
   
    
    const msg = {
      to: 'info@thegoodvibes.co.in',
      from: 'info@thegoodvibes.co.in',
      subject: "Contact Us form  ",
    
      html: `
   
    
    <p>   Name: ${req.body.name} <p/> 
    <p>   Email: ${req.body.email}  <p/>
    <p>    Phone Number: ${req.body.number}  <p/>
    <p>   Company Name: ${req.body.Company} <p/>
    <p>    Message: ${req.body.Message} <p/>

    
  
    
    </div>`
    };
    sgMail.send(msg).catch(err => {
      console.log(err);
    });


});








        
 




      
return router;
};

module.exports = routes;