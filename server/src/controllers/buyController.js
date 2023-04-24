// buy controller

const db = require('../db');

// get all properties which have status of buy
const getBuy = async (req, res) => {
    try {
        const properties = await db.query("SELECT * FROM properties WHERE status = $1", ["buy"]);
        res.status(200).json({ properties: properties.rows });
    } catch (error) {
        res.status(500).json({ error });
    }
}

// get all properties which have status of buy and filter according to the price range, city, and type
const getBuyFilter = async (req, res) => {
    try {
        const { price, city, type } = req.query;
        const properties = await db.query("SELECT * FROM properties WHERE status = $1 AND price BETWEEN $2 AND $3 AND city = $4 AND type = $5", ["buy", price[0], price[1], city, type]);
        res.status(200).json({ properties: properties.rows });
    } catch (error) {
        res.status(500).json({ error });
    }
}

// get individual property after clicking on it
const getBuyId = async (req, res) => {
    try {
        const { id } = req.params;
        const property = await db.query("SELECT * FROM properties WHERE property_id = $1", [id]);
        res.status(200).json({ property: property.rows[0] });
    } catch (error) {
        res.status(500).json({ error });
    }
}

module.exports = {
    getBuy,
    getBuyFilter,
    getBuyId
}