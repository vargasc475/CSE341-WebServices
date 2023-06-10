const homeRoute = (req, res) => {
    res.send('Jenny Vargas');
};

const angeeRoute = (req, res) => {
    res.send('Jerald Castellano');
};

const jeremiRoute = (req, res) => {
    res.send('Angee Vargas');
};

module.exports = {
    homeRoute,
    angeeRoute,
    jeremiRoute
}
