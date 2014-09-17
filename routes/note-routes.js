'use strict';

var Note = require('../models/note');

module.exports = function(app, jwtauth) {
  var baseUrl = '/api/v_0_0_1/notes';

  app.get(baseUrl, jwtauth, function(req, res){
    Note.find({}, function(err, notes) {
      if (err) return res.status(500).json(err);
      return res.send(notes);
    });
  });

  app.post(baseUrl, jwtauth, function(req, res) {
    var note = new Note(req.body);
    note.save(function(err, resNote) {
      if (err) return res.status(500).json(err);
      return res.send(resNote);
    });
  });

  app.get(baseUrl + '/:id', jwtauth, function(req, res) {
    Note.findOne({'_id': req.params.id}, function(err, note) {
      if (err) return res.status(500).json(err);
      return res.json(note);
    });
  });

  app.put(baseUrl + '/:id', jwtauth, function(req, res) {
    var note = req.body;
    delete note._id;
    Note.findOneAndUpdate({'_id': req.params.id}, note, function(err, resNote) {
      if (err) return res.status(500).json(err);
      return res.status(202).json(resNote);
    });
  });

  app.delete(baseUrl + '/:id', jwtauth, function(req, res) {
    Note.remove({'_id': req.params.id}, function(err) {
      if (err) return res.status(500).json(err);
      return res.status(200).json({'msg': 'deleted'});
    });
  });
};
