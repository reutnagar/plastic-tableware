
var qs = require('querystring');
var User = require('../models/User');
module.exports = {
    signIn: signIn,
    signOut: signOut,
    getSessionInfo: getSessionInfo
    
}
//var User = db.model('User',userSchema);

// functions for each different server calls.

// function signUp(req, res) {

//     var user = req.body;
//     var newUser = new User({userName:user.userName, password:user.password});

//     User.count({ userName: user.userName }, function (err, count) {
//         if (count > 0) {
//             res.json({ success: false, msg: "שם משתמש קיים ", user: user });
//         }
//         else
//         {
//             newUser.save();
//             req.session.user = newUser;
//             res.json({ success: true, msg: "ברוך הבא משתמש רשום חדש", user: user });

//         }

//     });
// }

function signIn(req, res) {
    console.log("get post request in server side");  




        // var existUser = new User(req.body);

        // console.log("In sign in :",existUser);

        // if(req.session.user != null)
        // {
        //     res.json({ in: false, msg: "הנך מחובר! התנתק לפני התחברות חוזרת", user: null });
        // }
        // else
        // {
        //     User.findOne({  userName: existUser.userName}, function (err, user) {
        //         if (user) {

        //             if(user.password != existUser.password)
        //             {
        //                 res.json({ in: false, msg: "הסיסמא שהכנסת שגויה", user: user });
        //             }
        //             else
        //             {
        //                 req.session.user = user;
        //                 res.json({ in: true, msg: "התחברת בהצלחה", user: user });
        //             }

        //         }
        //         else {
        //             res.json({ in: false, msg: "משתמש אינו קיים ", user: user });

        //         }
        //     });
        // }

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
                User.findOne({  userName: existUser.userName}, function (err, user) {
                  if (user) {

                    if(user.password != existUser.password)
                    {
                     
                           res.send("Incorrect password");
                    }
                    else
                    {
                        // req.session.user = user;
                        
                        res.send("logged in succesfully");
                    }

               }
                else {
                    console.log(user);

                    res.send("user doesn't exist!");
                }
            });


       
       
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
    console.log(req.session.user);
    if(req.session.user == null)
    {
        console.log("no session");
        res.json({signed : false, session : null});
    }
    else
    {
        console.log("yes session");
        res.json({signed: true, session: req.session });
    }

}


