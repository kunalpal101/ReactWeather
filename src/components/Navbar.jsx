function Navbar({ sendData }) {
  const handleClick = (event) => {
    const inputValue = document.getElementById("city").value;
    sendData(inputValue);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleChange = (event) => {
    console.log(event.target.value);
    sendData(event.target.value);
  };
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Weather App
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
          <form className="d-flex" role="search" onSubmit={handleSubmit}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              id="city"
              onChange={handleChange}
            />
            <button
              className="btn btn-outline-success"
              id="submit"
              onClick={handleClick}
              // type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
