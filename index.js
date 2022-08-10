const Notification = (props) => {
  const { className, iconUrl, text } = props;
  const classContainer = `notification ${className}`;
  return (
    <div className={classContainer}>
      <img className="icon" src={iconUrl} />
      <p className="desc">{text}</p>
    </div>
  );
};

const element = (
  <div className="notification-container">
    <h1 className="heading">Notifications</h1>
    <div className="notification-list-container">
      <Notification
        className="primary-bg-color"
        iconUrl="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
        text="Information Message"
      />
      <Notification
        className="success-bg-color"
        iconUrl="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        text="Success Message"
      />
      <Notification
        className="warning-bg-color"
        iconUrl="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
        text="Warning Message"
      />
      <Notification
        className="danger-bg-color"
        iconUrl="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
        text="Danger Message"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
