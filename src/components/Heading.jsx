function Heading(props) {
  //submit.onclick(console.log("hi"));

  return (
    <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
      <h5 className="display-3 fw-normal">Hello Guests,</h5>
      <p className="fs-5 text-muted">
        This here is an easy to use, quick & reliable weather fetching app, just
        for you. You can search for any city around the globe and the weather
        details will be fetched for you just in minutes. You can also check the
        weather of some famous cities at the bottom of the page. Made using API
        by "weather by Ninja", so credits to them for the data.
      </p>
    </div>
  );
}

export default Heading;
