function BlogpostForm({
    name, setName,
    nameError,           // joi
    email, setEmail,
    emailError,          // joi
    details, setDetails,
    detailsError,        // joi
    handleSubmit,
  }) {
    return (
      <form onSubmit={handleSubmit} className="p-2 my-3 col-12 col-md-9 col-lg-5 col-xl-4 mx-auto">
  
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)}  />    {/* required */}
          {nameError && <span className="text-danger">{nameError}</span>}    {/* joi */}
        </div>
  
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)}  /> {/* required */}
          {emailError && <span className="text-danger">{emailError}</span>}
        </div>
  
        <div className="mb-3">
          <label className="form-label">Details</label>
          <textarea className="form-control" value={details} onChange={(e) => setDetails(e.target.value)} />        {/* required */}
          {detailsError && <span className="text-danger">{detailsError}</span>}
        </div>
  
        <button type="submit" className="btn btn-primary w-100 fs-5 mt-3 mb-2">
          Submit blogpost
        </button>
      </form>
    );
  }
  
  export default BlogpostForm
