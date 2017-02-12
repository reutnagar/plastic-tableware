var qs = require('querystring');
var User = require('../models/User');
module.exports = {
    signIn: signIn,
    signOut: signOut,
    getSessionInfo: getSessionInfo
    
}


function signIn(req, res) {
    console.log("get post request in server side");  

  var body = '';
        req.on('data', function (data) {
            body += data;
            // 1e6 === 1 * Math.pow(10, 6) === 1 * 1000000 ~~~ 1MB
            if (body.length > 1e6) { 
                // FLOOD ATTACK OR FAULTY CLIENT, NUKE REQUEST
                req.connection.destroy();
            }
        });   
        req.on('end', function () {
        var POST = qs.parse(body); 
        var existUser = new User({ userName : POST.userName,password :  POST.password });
                if(req.session.user != null)
                    {
                        res.json({ in: false, msg: "הנך מחובר! התנתק לפני התחברות חוזרת", user: null });
                    }

               else{
                User.findOne({  userName: existUser.userName}, function (err, user) {
                  if (user) {

                    if(user.password != existUser.password)
                    {
                           res.json({ in: false, msg: "הסיסמא שהכנסת שגויה", user: user });
                       
                    }
                    else
                    {
                         req.session.user = user;
                       console.log(req.session);
                        res.json({ in: true, msg: "התחברת בהצלחה", user: user });
                      
                    }

                }
                else {
                   
                    
                    res.json({ in: false, msg: "משתמש אינו קיים ", user: user });
                    
                     }
             });

           }
       
        });
}



function signOut(req, res) {
    req.session.destroy(function (err) {
        if (err) {
            console.log(err);
        } else {
            res.json({out: true});
        }
    });
}


function getSessionInfo(req, res) {         //check if user is logged in or not?
    console.log(req.session.user);            //using cookie session
    if(req.session.user == null)
    {
        console.log("no session");
        res.json({signed : false, session : null,user:null});
    }
    else
    {
        console.log("yes session");
        res.json({signed: true, session: req.session ,user:req.session.user});
    }

}


