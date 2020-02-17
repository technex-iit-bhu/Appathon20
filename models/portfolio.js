var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var portfolioSchema = new Schema(
  {
    userid: {
      type: Schema.Types.ObjectId,
      ref: "User"
    },
    username: { type: String, unique: true, required: true },
    smallbio: String,
    mainbio: String,
    socialaccount: {
      facebook: { type: String },
      github: { type: String },
      instagram: { type: String },
      linkedin: { type: String }
    },
    address: String,
    interests: String,
    skills: [String],
    education: [
      {
        from: Date,
        to: Date,
        school: String,
        course: String
      }
    ],
    projects: [
      {
        name: String,
        link: String,
        description: String
      }
    ]
  },
  {
    timestamps: {
      createdAt: "createdAt",
      updatedAt: "updateAt"
    }
  }
);

module.exports = mongoose.model("Portfolio", portfolioSchema);
