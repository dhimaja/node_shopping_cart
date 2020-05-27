exports.get404 = (req, res, next) => {
    res.status(404).render('404', { pageTitle: 'Page not found!', layout: false, path: '/404', isAuthenticated: req.session.isLoggedIn });

}