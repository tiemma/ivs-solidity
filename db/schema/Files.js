let Files = Schema => {
  return new Schema({
    address: {
      type: String,
      required: true,
    },

    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },

    name: {
      type: String,
      required: true,
    },

    uploaded: {
      type: Date,
      required: true,
    },

    modified: {
      type: Date,
      required: true,
    },
  });
};

module.exports = Files;
