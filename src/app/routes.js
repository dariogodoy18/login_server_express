module.exports = (app, passport) => {
    app.get('/', (req, res) => {
        res.render('index')
    })

    //Control Login
    app.get('/login', (req, res) => {
        res.render('login', {
            title: 'login',
            message: req.flash('loginMessage')
        })
    })

    app.post('/login', (req, res) => {

    })
    //Control Login

    //Control Signup
    app.get('/signup', (req, res) => {
        res.render('signup', {
            title: 'Sign up',
            message: req.flash('loginMessage')
        })
    })

    app.post('/signup', (req, res) => {
        
    })
    //Control Signup

}