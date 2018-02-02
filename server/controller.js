module.exports = {
    shelves: (req, res) => {
        const db = req.app.get('db');

        db.shelves(req.params.id).then(shelves => {
            let maxBins = 5;
            let bins = [];

            for (var i = 0; i < maxBins; i++) {
                if (shelves[i]) {
                    bins[shelves[i].bin - 1] = shelves[i];
                } else if (!bins[i]) {
                    bins[i] = null;
                }
            };
            res.status(200).send(bins);
        }).catch(err => {
            console.log(err)
            res.status(500).send(err)
        })
    },

    bin: (req, res) => {
        const db = req.app.get('db');

        db.bin(req.params.id[0], req.params.id[1]).then(binInfo => {
            if (binInfo.length > 0) {
                res.status(200).send(binInfo[0]);
            } else {
                res.status(200).send(null);
            }
        }).catch(function (err) {
            console.log(err);
        })
    },

    update: (req, res) => {
        const db = req.app.get('db');
        const { name, price } = req.body;

        db.update(req.params.id[0], req.params.id[1], name, price).then(bin => {
            res.send(bin[0])
        })
    }, 

    delete: (req, res) => {
        const db = req.app.get('db');

        db.delete(req.params.id[0], req.params.id[1]).then(bin => {
            res.status(200).send('Deleted bin!')
        })
    },

    add: (req, res) => {
        const db = req.app.get('db');

        db.add_stuff(req.body.name, req.params.id[0], req.params.id[1], req.body.image, req.body.price).then(newThing => {
            res.status(200).send(newThing); 
        }).catch(err => {console.log(err)});
    }

}