import toast from "react-hot-toast";

// eslint-disable-next-line consistent-return
export const findMenuById = (menus, findMenuId) => {
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < menus.length; i++) {
    if (menus[i].id === findMenuId) {
      return menus[i];
    }
    // eslint-disable-next-line no-plusplus
    for (let j = 0; j < menus[i].menus.length; j++) {
      if (menus[i].menus[j].id === findMenuId) {
        return menus[i].menus[j];
      }
    }
  }
};

export const showToastError = (message) => {
  toast.error(message, {
    style: {
      borderRadius: "10px",
      background: "#333",
      color: "#fff",
    },
  });
};

export const showToastErrorObject = (error) => {
  if (error.response) {
    showToastError(error.response.data.message);
  } else if (error.message) {
    showToastError(error.message);
  } else {
    showToastError(error);
  }
};

export const showToastSucess = (message) => {
  toast.success(message, {
    icon: null,
    style: {
      fontWeight: 600,
      fontSize: "16px",
      lineHeight: "24px",
      padding: "20px",
      backgroundColor: "rgba(58, 58, 58, 0.9)",
      color: "white",
      width: "500px",
      maxWidth: "500px",
    },
  });
};
