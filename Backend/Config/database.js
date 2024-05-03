import { connect } from "mongoose";

const connectDb = () => {
  connect("mongodb+srv://saad-raja:saad-raja@myatlasclusteredu.uc11aog.mongodb.net/Book-It")
    .then(() => {
      console.log("Connected Moogose");
    })
    .catch((err) => {
      console.log(err);
    });
};

export default connectDb;
