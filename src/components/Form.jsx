    const Form = props => {
        return (
          <form onSubmit={props.handleSubmit}>
            <div className="mb-3">
              <label
                htmlFor="exampleInputEmail1"
                className="form-label"
              >
                Name
              </label>
              <input
                name="name"
                value={props.formState.name}
                onChange={props.handleInputChange}
                type="text"
                className="form-control"
                required 
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="exampleInputEmail1"
                className="form-label"
              >
                Email address
              </label>
              <input
                name="email"
                value={props.formState.email}
                onChange={props.handleInputChange}
                type="email"
                className="form-control"
                required 
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="exampleInputPassword1"
                className="form-label"
              >
                Message
              </label>
              <textarea
                name="message"
                value={props.formState.message}
                onChange={props.handleInputChange}
                type="text"
                className="form-control"
                required 
              />
            </div>
            <button type="submit" className="btn">Submit</button>
          </form>
        )
      }
      
export default Form