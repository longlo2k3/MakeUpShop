const MessageBox = () => {
  const alertBox = document.createElement("div");
  alertBox.style.position = "fixed";
  alertBox.style.top = "50%";
  alertBox.style.left = "50%";
  alertBox.style.transform = "translate(-50%, -50%)";
  alertBox.style.backgroundColor = "yellow";
  alertBox.style.padding = "20px";
  alertBox.style.borderRadius = "5px";
  alertBox.style.zIndex = "1000";
  alertBox.style.textAlign = "center";
  return alertBox;
};

export default MessageBox;
