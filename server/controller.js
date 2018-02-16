module.exports = {
    getAll: (req, res) =>{
        
        const db = req.app.get('db')

        //Sim 1 76e
        if (req.query.search) {
            db.search_student(`%${req.query.search}%`).then( result => res.send(result) )
        } else {
            db.get_students().then( result => res.send(result) )
        }
    },
    getOne: (req, res) => {
        const db = req.app.get('db')

        //Sim 1 76d
        db.select_classlist_student(req.params.page).then( result => res.send(result) )
    }
}