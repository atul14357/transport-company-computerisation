const axios=require("axios");

exports.homeRoutes=(req,res)=>{
axios.get("http://localhost:5000/api/users")
res.render('pages/index');
}

exports.viewTruck=(req,res)=>{
axios.get('http://localhost:5000/api/users')
        .then(function(response){
            res.render('pages/viewTruck', { users : response.data });
        })
        .catch(err =>{
            res.send(err);
        })

}
exports.viewTruckPending=(req,res)=>{
    axios.get('http://localhost:5000/api/users')
            .then(function(response){
                res.render('pages/viewTruckPending', { users : response.data });
            })
            .catch(err =>{
                res.send(err);
            })
    
    }

    exports.viewTruckArrived=(req,res)=>{
        axios.get('http://localhost:5000/api/users')
                .then(function(response){
                    res.render('pages/viewTruckArrived', { users : response.data });
                })
                .catch(err =>{
                    res.send(err);
                })
        
        }
exports.mymanagerView=(req,res)=>{
    axios.get('http://localhost:5000/api/users')
            .then(function(response){
                res.render('pages/managerview', { users : response.data });
            })
            .catch(err =>{
                res.send(err);
            })
    
    }
exports.addTruck=(req,res)=>{
res.render('pages/addTruck');
}




exports.update_truck = (req, res) =>{
    axios.get('http://localhost:5000/api/users', { params : { id : req.query.id }})
        .then(function(truckdata){
            res.render("pages/update_truck", { user : truckdata.data})
        })
        .catch(err =>{
            res.send(err);
        })
}
exports.SeeTruckDetails = (req, res) =>{
    axios.get('http://localhost:5000/api/users', { params : { id : req.query.id }})
        .then(function(truckdata){
            res.render("pages/seetruckdetail", { user : truckdata.data})
        })
        .catch(err =>{
            res.send(err);
        })
}

exports.MakePayment = (req, res) =>{
    axios.get('http://localhost:5000/api/users', { params : { id : req.query.id }})
        .then(function(userdata){
            res.render("pages/makepayment", { user : userdata.data})
        })
        .catch(err =>{
            res.send(err);
        })
}

exports.contactUs=(req,res)=>{
res.render('pages/contactUs');
}

exports.login=(req,res)=>{
res.render('pages/login');
}
exports.mymanagerlogin=(req,res)=>{
    res.render('pages/managerlogin');
    }

    
exports.register=(req,res)=>{
res.render('pages/register');
}
exports.createnewuser=(req,res)=>{
    res.render('pages/createnewuser');
    }
//added
exports.viewManager=(req,res)=>{
    axios.get('http://localhost:5000/api/manager')
        .then(function(response){
            res.render('pages/viewManager', { manager : response.data });
        })
        .catch(err =>{
            res.send(err);
        })
}






exports.success=(req,res)=>{
res.render('pages/success');
}
exports.failure=(req,res)=>{
res.render('pages/failure');
}
exports.aboutUs=(req,res)=>{
    res.render('pages/aboutUs');
}