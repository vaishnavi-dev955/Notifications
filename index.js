const Notification = (props) => {
  const { className, Url, Children } = props;
  const CommonDesignEl = `common-design ${className}`;
  return (
    <div className={CommonDesignEl}>
      <img className="image1" src={Url} />
      <p className="paragraph">{Children}</p>
    </div>
  );
};

const element = (
  <div className="background-container">
    <h1 className="heading">Notifications</h1>
    <div className="notifications-list-container">
      <Notification
        className="box1"
        Url="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
        Children="Information Message"
      />
      <Notification
        className="box2"
        Url="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        Children="Success Message"
      />
      <Notification
        className="box3"
        Url="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
        Children="Warning Message"
      />
      <Notification
        className="box4"
        Url="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
        Children="Error Message"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
