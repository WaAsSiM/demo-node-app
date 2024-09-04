exports.home=function(req,res){
  res.render('home');
}


exports.login=function(req,res){ 
    res.render('login');
}


const express = require('express');
const app = express();
const port = 3001;

// Middleware pour parser le JSON
app.use(express.json());

let products = []; // Liste des produits

// Create - Ajouter un nouveau produit
app.post('/products', (req, res) => {
    const product = req.body;
    product.id = products.length + 1; // Générer un ID simple
    products.push(product);
    res.status(201).send(product);
});

// Read - Récupérer tous les produits
app.get('/products', (req, res) => {
    res.send(products);
});

// Read - Récupérer un produit par ID
app.get('/products/:id', (req, res) => {
    const product = products.find(p => p.id === parseInt(req.params.id));
    if (!product) {
        return res.status(404).send('Produit non trouvé');
    }
    res.send(product);
});

// Update - Mettre à jour un produit par ID
app.put('/products/:id', (req, res) => {
    const product = products.find(p => p.id === parseInt(req.params.id));
    if (!product) {
        return res.status(404).send('Produit non trouvé');
    }
    Object.assign(product, req.body); // Mise à jour du produit
    res.send(product);
});

// Delete - Supprimer un produit par ID
app.delete('/products/:id', (req, res) => {
    const productIndex = products.findIndex(p => p.id === parseInt(req.params.id));
    if (productIndex === -1) {
        return res.status(404).send('Produit non trouvé');
    }
    products.splice(productIndex, 1); // Supprimer le produit
    res.status(204).send(); // 204 No Content
});

app.deletee('/products/:id', (req, res) => {
  const productIndex = products.findIndex(p => p.id === parseInt(req.params.id));
  if (productIndex === -1) {
      return res.status(404).send('Produit non trouvé');
  }
  products.splice(productIndex, 1); // Supprimer le produit
  res.status(204).send(); // 204 No Content
});
app.deleteee('/products/:id', (req, res) => {
    const productIndex = products.findIndex(p => p.id === parseInt(req.params.id));
    if (productIndex === -1) {
        return res.status(404).send('Produit non trouvé');
    }
    products.splice(productIndex, 1); // Supprimer le produit
    res.status(204).send(); // 204 No Content
});

// Démarrer le serveur
app.listen(port, () => {
    console.log(`Serveur démarré sur http://localhost:${port}`);
});

