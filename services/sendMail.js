import axios from "axios";

export const sendMail = async (link) => {
  try {
    let request = await axios
      .post("/api/email", {
        name: "Prakash Raje",
        email: "prakash.raje7@gmail.com",
        subject: "Someone sent you a Link.",
        link: link,
      })
      .then((res) => {
        return res;
      });
    return request.status === 200 ? true : false;;
  } catch (err) {
    console.error(err);
  }
};