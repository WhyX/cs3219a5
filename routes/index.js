var fs = require('fs'),
    seo = JSON.parse(fs.readFileSync(__dirname + '/seo.json'));

exports.router = {
    index: function(req, res) {
        res.render('index', { seo : seo });
    },
    contributions: function(req, res) {
        res.render('contributions', { seo : seo });
    },
    commithistory: function(req, res) {
        res.render('commithistory', { seo : seo });
    },
    effort: function(req, res) {
        res.render('effort', { seo : seo });
    },
    loc: function(req, res) {
        res.render('loc', { seo : seo });
    },
    activerate: function(req, res) {
        res.render('activerate', { seo : seo });
    },
    subscribe: function(req, res) {
        res.render('subscribe', { seo : seo });
    }
};
