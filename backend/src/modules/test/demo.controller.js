const updateProduct =(req, res) => {
    console.log(req.body);
    res.status(401).send({
        status:'401',
        test:'123'
    });
}

module.exports = {
    updateProduct
}