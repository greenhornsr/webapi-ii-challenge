const Posts = require('./db');

const router = require('express').Router();

router.get('/', async (req, res) => {
try {
    const posts = Posts.find(req.query);
} catch {
    
}
})

module.exports = router;