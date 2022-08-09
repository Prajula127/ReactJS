const element = (
  // Write your code here.
  <div className="congrats-container">
    <h1 className="heading">Congratulations</h1>
    <div className="congrats-card">
      <img
        className="profile-pic"
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
      />
      <div>
        <h1 className="name">Kiran V</h1>
        <p className="desc">
          Vishnu Institute of Eduction and Technology,Bhimavaram
        </p>
      </div>
      <img
        className="image"
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
