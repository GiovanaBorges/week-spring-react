import notify_img from "../../img/icon-notification.png";

import "./styles.css";

function NotificationButton() {
  return (
    <>
      <div className="dsmeta-red-btn">
        <img src={notify_img} alt="image" />
      </div>
    </>
  );
}
export default NotificationButton;
