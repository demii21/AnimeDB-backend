const axios = require('axios')
const express = require('express');
const router = express();

//get TopAnime

router.get('/topAnime',async (req,res)=>{
    try{
        const anime = await axios.get(`https://api.jikan.moe/v4/top/anime?limit=5`)
        res.status(200).json(anime.data.data);
    }
    catch(e){
        console.error(e);
        res.status(500).send("Internal Server Error");
    }
})

//Search Anime

router.get('/search/',async (req,res)=>{
    try{
        const query = req.query.q;
        const anime = await axios.get(`http://api.jikan.moe/v4/anime/?q=${query}&sfw=true`)
        res.json(anime.data.data);
    }
    catch(e){
        console.log(e);
        res.status(500).send("Internal Server Error");
    }
})

router.get('/:id',async(req,res)=>{
    try{
        const id = req.params.id;
        const anime = await axios.get(`https://api.jikan.moe/v4/anime/${id}`)
        res.json(anime.data.data);
        
    }
    catch(e){
        console.log(e);
        res.status(500).send("Internal Server Error");
    }
})

module.exports = router;