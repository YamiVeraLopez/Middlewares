module.exports = {
    index: (req, res) => {
        res.render('index')
    },
    admin: (req, res) => {
        let userName = req.query.user;
        res.render('admin', {
           userName 
        })
    }
}