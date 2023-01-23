const express=require("express");
const route=express.Router()


const services=require("../services/render");
const controller = require('../controller/controller');

route.get('/', services.homeRoutes);
route.get('/view', services.viewTruck);
route.get('/viewPending', services.viewTruckPending);
route.get('/viewArrived', services.viewTruckArrived);
route.get('/add', services.addTruck);
route.get('/update-truck', services.update_truck);
route.get('/seetruckdetail', services.SeeTruckDetails);
route.get('/makepayment', services.MakePayment);
route.get('/createnewuser', services.createnewuser);
route.get('/contact', services.contactUs);
route.get("/login",services.login);
route.get("/managerview",services.mymanagerView);
route.get("/managerlogin",services.mymanagerlogin);
route.get("/register",services.register);
route.get('/manager', services.viewManager);
route.get('/success', services.success);
route.get('/failure', services.failure);
route.get('/about', services.aboutUs);




// API
route.post('/api/users', controller.create);
route.get('/api/users', controller.find);
route.put('/api/users/:id', controller.update);
route.delete('/api/users/:id', controller.delete);

route.post('/api/manager',controller.createManager);
route.get('/api/manager', controller.findManager);




module.exports=route