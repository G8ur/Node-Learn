const Product = require("../models/product");

exports.getAddProduct = (req, res, next) => {
  res.render("admin/edit-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
    editing: false,
  });
};

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  req.user.createProduct({
    title: title,
    price: price,
    imageUrl: imageUrl,
    description: description,
    // userId: req.user.id  // this is adding user id manually
  }).then(result =>{
    // console.log(result)
    console.log('Created Product')
    res.redirect('/admin/products')
  }).catch(err =>{
    console.log(err)
  });
};

exports.getEditProduct = (req, res, next) => {
  const editMode = req.query.edit;
  if (!editMode) {
    return res.redirect("/");
  }
  const prodId = req.params.productId;
  req.user.getProducts({ where:{id: prodId} })
  // Product.findByPk(prodId)
  .then(products =>{
    const product = products[0] // as when we click on edit if not this array then it will display empty form
    if(!product){
      return res.redirect('/');
    }
    res.render('admin/edit-product',{
      pageTitle:' Edit Product',
      path: '/admin/edit-product',
      editing:  editMode,
      product: product
    })
  }).catch(err =>{
    console.log(err)
  });
};

// also if no then and catch then try to return the function

exports.postEditProduct = (req, res, next) => {
  const prodId = req.body.productId;
  const updatedTitle = req.body.title;
  const updatedPrice = req.body.price;
  const updatedImageUrl = req.body.imageUrl;
  const updatedDesc = req.body.description;
  Product.findByPk(prodId).then(product =>{
    product.title = updatedTitle;
    product.price = updatedPrice;
    product.description = updatedDesc;
    product.imageUrl = updatedImageUrl;
    return product.save() // takes the product and saves it as we edited
  }).then( result => {
    console.log("UPDATED PRODUCT")
    res.redirect("/admin/products");
  })
  .catch(err => {    // as promise function so in then we render and in catch we log error if any

    console.log(err)
  })
  
};

exports.getProducts = (req, res, next) => {
  req.user.getProducts().then(products =>{
    res.render('admin/products',{
      prods: products,
      pageTitle:'Admin Products',
      path: '/admin/products'

    })
  }).catch(err => {
    console.log(err)
  });
 
};

exports.postDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findByPk(prodId).then( product =>{
    return product.destroy()
  }).then(product => {
    console.log("Deleted product")
    res.redirect("/admin/products");
  })
  .catch(err =>{
    console.log(err)
  })
  
};
