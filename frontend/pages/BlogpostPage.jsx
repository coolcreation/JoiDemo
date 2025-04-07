import { useEffect, useState } from 'react'
import BlogpostForm from '../components/BlogpostForm';

/* This page in a nutshell:
   The button click hits handleSubmit(), then the POST tries and if successful it's 'response.ok' which 
   allows for the call to handleBlogpostCreated(), then fetchData GET's the new array */

/* The new blogpost is not directly added to the blogposts state in the handleSubmit or handleBlogpostCreated methods. 
   The blogposts state is refreshed with the entire list of blogposts on the GET fetch from the backend API */

function BlogpostPage() {

  // create and initialize empty state variables so we can call DatePickerUI and BlogpostForm and send them for filling with values
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [details, setDetails] = useState('')
  const [blogposts, setBlogposts] = useState([]) 

  // gets the initial list of blogposts, but also runs a second time after the POST request if it's successful
  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:5000/blogposts')
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      const data = await response.json()
      setBlogposts(data)
      console.log('Server response:', data)
    } catch (error) {
      console.error('Error:', error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])      // useEffect only handles the initial data load (runs once), which is our state array

  const handleBlogpostCreated = () => {
    fetchData()     // add new blogpost
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await fetch('http://localhost:5000/blogposts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          details,
        }),
      })

      const result = await response.json()
      console.log('Server response:', result)

      if (response.ok) {
        console.log('Blogpost created successfully')
        handleBlogpostCreated()   // call method to add new blogpost if successful

        // Clear all fields/inputs if successful
        setName('')
        setEmail('')
        setDetails('')

      } else {
        console.error('Failed to create blogpost')
      }
    } catch (error) {
      console.error('Error:', error)
    }
  }

  return (
    <div className="container d-flex flex-column bg-light border border-1 rounded-4 gap-0 gap-lg-2 py-2 p-lg-3 my-2 my-lg-4">
      <h1 className="text-center fs-3 m-0 mt-1">Blogpost page</h1>

      {/* BlogpostForm gets called and uses our empty state variables we already initilized, and fills them with values*/}
      <BlogpostForm
        name={name}
        setName={setName}
        email={email}
        setEmail={setEmail}
        details={details}
        setDetails={setDetails}
        handleSubmit={handleSubmit}
      />

      <div className="cards-wrapper">
        {blogposts.map((blogpost) => (
          <div key={blogpost._id} className="card d-flex flex-column flex-lg-row gap-1 gap-lg-3 p-2 p-lg-1">
            <div className="col-12 col-lg-2">{blogpost.name}</div>
            <div className="col-12 col-lg-2">{blogpost.email}</div>
            <div className="col-12 col-lg-auto">{blogpost.details}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BlogpostPage

