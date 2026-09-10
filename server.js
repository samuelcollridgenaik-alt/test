app.get("/movie/:id", (req, res) => {
    const movie = movies.find(m => m.id === Number(req.params.id))
    if (!movie) return res.status(404).json({message: "Movie not found"})
        res.status(200).json(movie)
})

app.put("/movie/:id", validateMovie, (req, res)=>{
    const movie = movies.find(m => m.id === Number(req.params.id))
    if(!movie) return res.status(404).json({message: "Movie not found"})
})

object.assign(movie, { title: req.body.title, genre: req.body.genre})
res.status(200).json({message: 'Updated movie ${movie.id} to "${movie.title}"'.movie
})

app.delete("/movies/:id", (req, res)=> {
    const index = movies.findindex(m => m.id === Number(req.params.id))
    if (index === -1) return res.status(404).json({message: "Movie not found"})

    const [deleted] = movies.splice(index, 1)
    res.status(200).json({message: 'Deleted "${deleted.title}"',movie: deleted})
})

app.use((req, res) => {
   res.status(404).json({message: 'No route for $(req.method} $(req.originalUrl}'})
})

app.use((error, req, res, next) => {
 console.error(error, stack)
 res.status(500).json({message: "Something went wrong on the server"})
})