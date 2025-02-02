import SecurityClient from "~/utilities/SecurityClient";

/**
 * This route registers a certain action for a user
 * @param {*} action
 * @returns
 */
const registerUserAction = ({ action }) => {
  return SecurityClient.fetchCall("/api/v1/user-action", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      action,
    }),
  }).then(async (res) => {
    if (res.status == 200) {
      return res;
    } else {
      console.log("Failed to register a user action");
    }
  });
};

export default registerUserAction;
