const { Router } = require('express');
const express = require('express');
const data_router = express.Router();
const admin_router = express.Router();
const path = require('path');
const mysql = require('mysql');
const crypto = require('crypto');
const session = require('express-session');

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'sigma',
});

const mysqlQuery = function (conn) {
    conn.connect((err) => {
        if (err) throw err;
        console.log('[OK] Connection established...');
    });
};

// const checkCreds = function (res) {
//     if
// };

mysqlQuery(conn);

// Hackathon data API

let sql = 'SELECT * FROM hackathons;';

conn.query(sql, (err, result) => {
    if (err) throw err;
    //console.log(res);
    data_router.get('/', (req, res) => {
        res.send(result);
    });
});

//login page

admin_router.get('/', (req, res) => {
    sql = 'SELECT * FROM creds;';

    conn.query(sql, (err, result) => {
        const uname = result[0].uname;
        const passw = result[0].passw;
        const hash = crypto.createHash('sha256').update(passw).digest('base64');
        sql = 'SELECT * FROM hackathons;';

        conn.query(sql, (err, hackathons) => {
            req.session.granted = false; // değiştir
            if (req.session.granted)
                res.render('panel', { hackathons: hackathons });
            else if (req.cookies.auth) {
                if (req.cookies.auth === hash) {
                    req.session.granted = true;
                    console.log('[OK] Access granted. Cohesive cookie...');
                    res.render('panel', { hackathons: hackathons });
                } else {
                    console.log('[ERROR] Access denied. Wrong cookie...');
                    res.render('login');
                }
            } else res.render('login');
        });
    });
});

admin_router.get('/proxy', (req, res) => {
    console.log(req.query);
    const method = req.query.submit;
    switch (method) {
        case 'Add':
            sql = `INSERT INTO hackathons (title, descp, time) VALUES ('${
                req.query.title
            }', '${req.query.descp}', '${new Date()
                .toISOString()
                .slice(0, 19)
                .replace('T', ' ')}');`;
            conn.query(sql, (err, result) => {
                if (err) throw err;
                console.log('1 record insterted.');
            });
            break;
        case 'Delete':
            sql = `DELETE FROM hackathons WHERE id = '${req.query.hackathons}';`;
            conn.query(sql, (err, result) => {
                console.log('Deletion successfull!', result.affectedRows);
            });
            break;
        case 'Update':
            sql = `UPDATE customers SET title = '${req.query.title}', descp = '${req.query.descp}';`;
            conn.query(sql, (err, result) => {
                console.log('Update successfull!', result.affectedRows);
            });
            break;
    }
    res.render('panel', { hackathons: hackathons });
});

admin_router.post('/', (req, res) => {
    sql = 'SELECT * FROM creds;';

    conn.query(sql, (err, result) => {
        const uname = result[0].uname;
        const passw = result[0].passw;
        const hash = crypto.createHash('sha256').update(passw).digest('base64');
        sql = 'SELECT * FROM hackathons;';

        conn.query(sql, (err, hackathons) => {
            if (uname === req.body.uname && passw === req.body.passw) {
                req.session.granted = true;
                if (!req.cookies.auth) {
                    req.cookies.auth = crypto
                        .createHash('sha256')
                        .update(passw)
                        .digest('base64');
                    res.cookie('auth', req.cookies.auth, {
                        maxAge: 900000,
                        httpOnly: true,
                    });
                }
                console.log('[OK] Access granted...');
                res.render('panel', { hackathons: hackathons });
            } else {
                // TO-ASK __LINE__ ??
                console.log('[ERROR] Access denied. Wrong credentials...');
                res.render('login');
            }

            console.log(req.cookies.auth);
        });
    });
});

module.exports = [data_router, admin_router, session];
