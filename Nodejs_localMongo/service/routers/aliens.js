const express = require('express');
const router = express.Router()
const Alien = require('../models/aliens')

router.get('/',async (req, res) => {
    try{
        const aliens = await Alien.find();
        res.json(aliens)
    }catch(err){
        res.send('Error '+err)
    }
});

router.get('/:id',async (req, res) => {
    try{
        const alien = await Alien.findById(req.params.id);
        res.json(alien);
    }catch(err){
        res.send('Error '+err);
    }
});

router.post('/',async(req, res)=>{
    
        let name = req.body.Name
        let mail = req.body.Mail
        let phone = req.body.Phone
        let group = req.body.Group
        let domain = req.body.Domain
        const emailRegexp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

        if(name != undefined && name != null){
            if(name.indexOf(' ') >= 0){
                const  Response = {
                    Status_Code: 400,
                    Status_Message: 'Check your Name ....!',
                };
                res.json(Response);
            }
            else{
                var User_name = name
            }
        }

        if(mail != undefined && mail != null){

            if(emailRegexp.test(mail) === true){
                var User_mail = mail
            }
            else{
                const  Response = {
                    Status_Code: 400,
                    Status_Message: 'Check your MailID ....!',
                };
                res.json(Response);
            }
        }
        if(phone != undefined && phone != null){
            let dump_phone = phone.toString()
            if (dump_phone.length >= 10){
                var User_phone = phone
            }
            else{
                const  Response = {
                    Status_Code: 400,
                    Status_Message: 'Check your Phone ....!',
                };
                res.json(Response);
                
            }    
        }
        if(group != undefined && group != null){
            if(group.indexOf(' ') >= 0){
                const  Response = {
                    Status_Code: 400,
                    Status_Message: 'Check your Group ....!',
                };
                res.json(Response);
            }
            else{
                var User_group = group
            }
        }
        if(domain != undefined && domain != null){
            if(domain.indexOf(' ') >= 0){
                const  Response = {
                    Status_Code: 400,
                    Status_Message: 'Check your Domain ....!',
                };
                res.json(Response);
            }
            else{
                var User_domain = domain
            }
        }
        const alien = new Alien({
            Name: User_name,
            Mail: User_mail,
            Phone: User_phone,
            Group: User_group,
            Domain: User_domain
        });
        try{
            const a1 = await alien.save();
            const  Response = {
                Status_Code: 200,
                Status_Message: 'success',
            };
            res.json(Response);
        }catch(err){
            if (Object.keys(err.keyPattern)[0] == "Mail"){
                const  Response = {
                    Status_Code: 400,
                    Status_Message: `This Mail ID ${Object.values(err.keyValue)[0]} is already there enter valid email id `
                };
                res.json(Response);
            }
            if (Object.keys(err.keyPattern)[0] == "Phone"){
                const  Response = {
                    Status_Code: 400,
                    Status_Message: `This Phone Number ${Object.values(err.keyValue)[0]} is already there enter valid Phone Number`
                };
                res.json(Response);
            }
        };
    
});

router.patch('/:id', async(req, res) => {
    try {
        const alien = await Alien.findById(req.params.id);
        alien.Sub = req.body.Sub;
        const a1 = await alien.save();
        res.json(a1);
    }catch(err){
        res.send('Error '+err);
    }
});

router.delete('/:id', async(req, res)=>{
    try{
        const alien = await Alien.findById(req.params.id);
        alien.delete();
        res.send(`${req.params.id} deleted`);
    }catch(err){
        res.send('Error '+err);
    }
})

module.exports = router;