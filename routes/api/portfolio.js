var router = require("express").Router();
var id = require("shortid");
var User = require("../../models/user");
var Portfolio = require("../../models/portfolio");
var secret = require("../../config/secret");
var passport = require("passport");
var mongoose = require("mongoose");

var validatePortfolioInput = require("../../validation/porfolio");
var validateEducationInput = require("../../validation/education");
var validateWorkInput = require("../../validation/work");
var validateSocialInput = require("../../validation/social");

// @route   GET api/portfolio/test
// @desc    Testing portfolio route
// @access  Public
router.post("/test", function(req, res, next) {
  res.send("hi")
});

router.get(
  "/profile",
  passport.authenticate("jwt", { session: false }),
  function(req, res) {
    const errors = {};
    Portfolio.findOne({ userid: req.user.id })
      .then(profile => {
        if (!profile) {
          errors.noproile = "No User Found";
          return res.status(404).json(errors);
        }
        res.json(profile);
      })
      .catch(err => {
        res.status(404).json(err);
      });
  }
);

// @route   POST api/portfolio/create-profile
// @desc    Create or edit user profile
// @access  Private
router.post(
  "/create-portfolio",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validatePortfolioInput(req.body);

    // Check Validation
    if (!isValid) {
      // Return any errors with 400 status
      return res.status(400).json(errors);
    }

    // Get fields
    const portfolioFields = {};
    portfolioFields.userid = req.user.id;
    if (req.body.smallbio) portfolioFields.smallbio = req.body.smallbio;
    if (req.body.mainbio) portfolioFields.mainbio = req.body.mainbio;
    if (req.body.address) portfolioFields.address = req.body.address;
    if (req.body.interests) portfolioFields.interests = req.body.interests;
    // Skills - Spilt into array
    if (typeof req.body.skills !== "undefined") {
      portfolioFields.skills = req.body.skills.split(",");
    }
    var nameuser = req.user.name.replace(/ +/g, "");
    portfolioFields.username = nameuser + "-" + id.generate();

    Portfolio.findOne({ userid: req.user.id }).then(portfolio => {
      if (portfolio) {
        // Update
        Portfolio.findOneAndUpdate(
          { userid: req.user.id },
          { $set: portfolioFields },
          { new: true }
        ).then(portfolio => res.json(portfolio));
      } else {
        // Create
        new Portfolio(portfolioFields)
          .save()
          .then(portfolio => res.json(portfolio));
      }
    });
  }
);

// @route   POST api/portfolio/education
// @desc    Add education to profile
// @access  Private
router.post(
  "/education",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateEducationInput(req.body);

    // Check Validation
    if (!isValid) {
      // Return any errors with 400 status
      return res.status(400).json(errors);
    }

    Portfolio.findOne({ userid: req.user.id }).then(portfolio => {
      const newEdu = {
        school: req.body.college,
        course: req.body.degree,
        from: req.body.from,
        to: req.body.to
      };

      // Add to exp array
      portfolio.education.unshift(newEdu);

      portfolio.save().then(profile => res.json(profile));
    });
  }
);
// @route   POST api/portfolio/work
// @desc    Add work to profile
// @access  Private
router.post(
  "/work",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateWorkInput(req.body);

    // Check Validation
    if (!isValid) {
      // Return any errors with 400 status
      return res.status(400).json(errors);
    }

    Portfolio.findOne({ userid: req.user.id }).then(portfolio => {
      const newProject = {
        name: req.body.projectname,
        link: req.body.link,
        description: req.body.description
      };

      // Add to project array
      portfolio.projects.unshift(newProject);

      portfolio.save().then(profile => res.json(profile));
    });
  }
);

// @route   POST api/portfolio/work
// @desc    Add work to profile
// @access  Private

router.post(
  "/social",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateSocialInput(req.body);

    // Check Validation
    if (!isValid) {
      // Return any errors with 400 status
      return res.status(400).json(errors);
    }

    Portfolio.findOne({ userid: req.user.id }).then(portfolio => {
      // Social
      portfolio.socialaccount = {};
      if (req.body.facebook)
        portfolio.socialaccount.facebook = req.body.facebook;
      if (req.body.linkedin)
        portfolio.socialaccount.linkedin = req.body.linkedin;
      if (req.body.instagram)
        portfolio.socialaccount.instagram = req.body.instagram;
      if (req.body.github) portfolio.socialaccount.github = req.body.github;
      portfolio.save().then(profile => res.json(profile));
    });
  }
);

router.delete(
  "/education/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Portfolio.findOne({ userid: req.user.id })
      .then(portfolio => {
        // Get remove index
        const removeIndex = portfolio.education
          .map(item => item.id)
          .indexOf(req.params.id);

        // Splice out of array
        portfolio.education.splice(removeIndex, 1);

        // Save
        portfolio.save().then(portfolio => res.json(portfolio));
      })
      .catch(err => res.status(404).json(err));
  }
);
router.delete(
  "/project/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Portfolio.findOne({ userid: req.user.id })
      .then(portfolio => {
        // Get remove index
        const removeIndex = portfolio.projects
          .map(item => item.id)
          .indexOf(req.params.id);

        // Splice out of array
        portfolio.projects.splice(removeIndex, 1);

        // Save
        portfolio.save().then(portfolio => res.json(portfolio));
      })
      .catch(err => res.status(404).json(err));
  }
);
router.get("/handle/:handle", (req, res) => {
  const errors = {};
      Portfolio.findOne({ username: req.params.handle })
    .populate("userid", ["name"])
    .then(profile => {
      if (!profile) {
        errors.noprofile = "There is no profile for this user";
        res.status(404).json(errors);
      } else {
 
       res.json(profile);

      }
    })
    .catch(err => res.status(404).json(err));

  });
module.exports = router;
