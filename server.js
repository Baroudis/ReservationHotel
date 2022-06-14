const express = require('express');
const mongoose = require('mongoose')
const Chambres = require('./chambres') // on importe notre model
const DatesA = require('./dateA')
const DatesD = require('./dateD')
const stripe = require('stripe')('sk_test_51LA7snDPFuwKwNiqm73g45n6Sg7YphcmM5sEplYT5ceVctVyi8cz5FplJOybloe4lkz2DiloP8EyVh5us56BzKyh00T5XtHcvo');
const YOUR_DOMAIN = 'http://localhost:4200';
//const body = require('body-parser') //deprecier avec express
// const session = await stripe.checkout.sessions.create({
//     payment_method_types: ['card'],
//     line_items: [{
//         price_data: {
//             product: '{{PRODUCT_ID}}',
//             unit_amount: 1500,
//             currency: 'eur',
//         },
//         quantity: 1,
//     }],
//     mode: 'payment',
//     success_url: 'https://example.com/success',
//     cancel_url: 'https://example.com/cancel',
// });



let app = express(); // création de l'objet représentant notre application express
//app.use(body())
app.use(express.urlencoded({ extended: true }));
//app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());


mongoose.connect(
    'mongodb+srv://Barouzi:06068888@cluster0.mmhzi.mongodb.net/livres?retryWrites=true&w=majority'
    , err => {
        if (err) throw 'erreur est : ', err;
        console.log('connected to MongoDB')
    });



let port = 8080;


app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.get('/', async (req, res) => {
    const chambres = await Chambres.find() // On récupère tout les livres,  findOne({_id : id}) 
    await res.json(chambres)
})

// app.get('/:id', async (req, res) => {
//     const id = req.params.id
//     const chambres = await Chambres.findOne({_id : id}) 
//     await res.json(livres)
// })

app.get('/chambre', async (req, res) => {
    const chambres = await Chambres.find() // On récupère tout les livres,  findOne({_id : id}) 
    await res.json(chambres)
})

app.get('/datearrive', async (req, res) => {
    const dates = await DatesA.find() // On récupère tout les livres,  findOne({_id : id}) 
    await res.json(dates)
})

app.get('/datedepart', async (req, res) => {
    const dates = await DatesD.find() // On récupère tout les livres,  findOne({_id : id}) 
    await res.json(dates)
})


app.listen(port, () => { // ecoute du serveur sur le port 8080
    console.log('le serveur fonctionne')
})


app.post('/chambre', async (req, res) => {
    const titre = req.body.titre;
    const type = req.body.type;
    //const title = req.body.title;
    const description = req.body.description;
    const prix = req.body.prix;
    const img = req.body.img;
    const disponible = req.body.disponible;

    const nouveau_chambre = new Chambres({ // création d'un objet représentant notre nouveau livre
        titre: titre,
        type: type,
        //title: title,
        description: description,
        prix: prix,
        img: img,
        disponible: disponible
    })

    await nouveau_chambre.save() // sauvegarde asynchrone du nouveau livre
    res.json(nouveau_chambre)
    return

})

app.post('/datearrive', async (req, res) => {
    const dateA = req.body.date;  

    const nouveau_date = new DatesA({ // création d'un objet représentant notre nouveau livre
        date:dateA
        
    })

    await nouveau_date.save() // sauvegarde asynchrone du nouveau livre
    res.json(nouveau_date)
    return

})

app.post('/datedepart', async (req, res) => {
    const dateD = req.body.date;  

    const nouveau_date = new DatesD({ // création d'un objet représentant notre nouveau livre
        date:dateD
        
    })

    await nouveau_date.save() // sauvegarde asynchrone du nouveau livre
    res.json(nouveau_date)
    return

})


app.delete('/:id', async (req, res) => {
    const id = req.params.id
    const suppr = await Chambres.deleteOne({ _id: id })
    res.json(suppr)

})

app.patch('/:id', async (req, res) => {
    const id = req.params.id
    const livre = await Chambres.findOne({ _id: id }) // on récupere le livre pour pouvoir le modifier

    // on récupère les valeurs potentiellement modifiées
    const titre = req.body.titre;
    const auteur = req.body.auteur
    const genre = req.body.genre;

    // on vérifie maintenant si les valeurs sont remplies, si elles le sont on modifie l'ancienne valeure par la nouvelle

    if (titre) {
        livre.titre = titre
    }
    if (auteur) {
        livre.auteur = auteur
    }
    if (genre) {
        livre.genre = genre
    }

    await livre.save() // on sauvegarde les modifications

    res.json(livre)



})




