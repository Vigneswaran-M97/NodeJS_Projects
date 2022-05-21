"use strict";

var express = require('express');

var router = express.Router();

var Alien = require('../models/aliens');

router.get('/', function _callee(req, res) {
  var aliens;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(Alien.find());

        case 3:
          aliens = _context.sent;
          res.json(aliens);
          _context.next = 10;
          break;

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          res.send('Error ' + _context.t0);

        case 10:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 7]]);
});
router.get('/:id', function _callee2(req, res) {
  var alien;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(Alien.findById(req.params.id));

        case 3:
          alien = _context2.sent;
          res.json(alien);
          _context2.next = 10;
          break;

        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          res.send('Error ' + _context2.t0);

        case 10:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 7]]);
});
router.post('/', function _callee3(req, res) {
  var name, mail, phone, group, domain, alien, a1;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          name = req.body.Name;
          mail = req.body.Mail;
          phone = req.body.Phone;
          group = req.body.Group;
          domain = req.body.Domain;

          if (name != undefined && name != null) {}

          if (req.body.Mail != undefined && req.body.Mail != null) {}

          if (req.body.Phone != undefined && req.body.Phone != null) {}

          alien = new Alien({
            Name: req.body.Name,
            Mail: req.body.Mail,
            Phone: req.body.Phone
          });
          _context3.prev = 9;
          _context3.next = 12;
          return regeneratorRuntime.awrap(alien.save());

        case 12:
          a1 = _context3.sent;
          res.json(a1);
          _context3.next = 20;
          break;

        case 16:
          _context3.prev = 16;
          _context3.t0 = _context3["catch"](9);
          res.status(404);
          res.write('Error ' + _context3.t0);

        case 20:
          ;

        case 21:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[9, 16]]);
});
router.patch('/:id', function _callee4(req, res) {
  var alien, a1;
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return regeneratorRuntime.awrap(Alien.findById(req.params.id));

        case 3:
          alien = _context4.sent;
          alien.Sub = req.body.Sub;
          _context4.next = 7;
          return regeneratorRuntime.awrap(alien.save());

        case 7:
          a1 = _context4.sent;
          res.json(a1);
          _context4.next = 14;
          break;

        case 11:
          _context4.prev = 11;
          _context4.t0 = _context4["catch"](0);
          res.send('Error ' + _context4.t0);

        case 14:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[0, 11]]);
});
router["delete"]('/:id', function _callee5(req, res) {
  var alien;
  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return regeneratorRuntime.awrap(Alien.findById(req.params.id));

        case 3:
          alien = _context5.sent;
          alien["delete"]();
          res.send("".concat(req.params.id, " deleted"));
          _context5.next = 11;
          break;

        case 8:
          _context5.prev = 8;
          _context5.t0 = _context5["catch"](0);
          res.send('Error ' + _context5.t0);

        case 11:
        case "end":
          return _context5.stop();
      }
    }
  }, null, null, [[0, 8]]);
});
module.exports = router;