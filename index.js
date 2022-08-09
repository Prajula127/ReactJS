const Button = (props) => {
  //  Write your code here.
  const { buttonText, className } = props;
  return <button className={`button ${className}`}>{buttonText}</button>;
};

const element = (
  //  Write your code here.
  <div className="social-container">
    <h1 className="heading">Social Buttons</h1>
    <div className="button-container">
      <Button buttonText="Like" className="btn1" />
      <Button buttonText="Comment" className="btn2" />
      <Button buttonText="Share" className="btn3" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
