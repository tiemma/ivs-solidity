let User = Schema => {
  return new Schema({
    name: {
      type: String,
      required: true,
    },

    age: {
      type: String,
      required: true,
    },

    sex: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },

    address: {
      type: String,
    },
  });
};

module.exports = User;
