/* eslint-disable indent */
const express = require("express");

const tummoc = require("../routes/tummoc.routes");

module.exports = function (app) {
  app.use(express.json({ limit: "50mb" }));
  app.use(express.urlencoded({ extended: true, limit: "50mb" }));
  /* initial route */
  app.get('', (req, res) => {
    res.send('Services are active');
  })

  app.use('/tummoc', tummoc);

};
