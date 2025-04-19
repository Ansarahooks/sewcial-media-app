const formController = {
};

formController.getFormInfo = (req, res, next) => {
      console.log(req.body);
      res.locals.formData = req.body;
      if (err) return next('Error in formController.getFormInfo: ' + JSON.stringify(err));
      return next();
  };

  module.exports = formController;