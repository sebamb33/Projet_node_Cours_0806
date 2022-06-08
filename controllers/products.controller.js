export class ProductsController {
    constructor(repository) {
        this.repository = repository;
    }

    getAll(req, res) {
        this.repository.get().then((products) => {
            res.render("index", {products});
        });
    }

    getByName(req, res) {
        console.log("la req ; " + req.query.name);
        this.repository.getByName(req.query.name).then((products) => {
            res.render("index", {products});
        });

    }

    removeByID(req, res) {
        this.repository.removeByID(req.params.id).then((products) => {
            res.render("index", {products});
        });
        res.redirect("/")
    }

    getOne(req, res) {
        const id = req.params.id;

        // const product = this.repository.getOne(id);
        this.repository.getOne(id).then((product) => {
            res.render("details", {product});
        })
    }

    editForm(req, res) {
        res.render("edit");
    }

    create(req, res) {
        return this.repository.create(req.body).then(() => {
            res.redirect("/")
        });
    }
}
