import express from "express"
import Blogpost from '../models/blogpostModel.js'

const router = express.Router()


// GET All Blogposts 
router.get('/', async (req, res) => {
    const allBlogposts = await Blogpost.find()
    console.log(allBlogposts)
    res.status(200).json(allBlogposts)
})


// POST Blogpost
router.post('/', async (req, res) => {
    const { name, email, details } = req.body

    try {
      const existingBlogposts = await Blogpost.findOne({ name, email, details })
      
      if (!existingBlogposts) {  // before saving, query DB to see if the blogpost is already taken. If taken send error
        const newBlogpost = new Blogpost({ name, email, details })  
        await newBlogpost.save() 
        res.status(200).json(newBlogpost)
        //console.log(newBlogpost)
      }else{
        res.status(400).json('Blogpost already taken')
      }

    } catch (error) {
      console.error(error)
      res.status(500).json('Internal server error.')
    }
})

// DELETE Blogpost
router.delete('/:id', async (req, res) => {
  const { id: blogpostId } = req.params // 

  try {
    const result = await Blogpost.deleteOne({ _id: blogpostId })

    if (result.deletedCount === 0) {
      return res.status(404).json({ message: 'Blogpost not found' })
    }

    res.status(200).json({ message: 'Blogpost deleted' })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Internal server error' })
  }
})


export default router