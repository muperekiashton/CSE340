const utilities = require("../utilities/")
const baseController = {}

baseController.buildHome = async function(req, res){
  const nav = await utilities.getNav()
  res.render("index", {title: "Home", nav})
}

baseController.buildCustomPage = async function(req, res) {
  try {
    const nav = await utilities.getNav();
    res.render("custom", { title: "Custom Page", nav });
  } catch (error) {
    next(error);
  }
}

baseController.buildSedanPage = async function(req, res) {
  try {
    const nav = await utilities.getNav();
    res.render("sedan", { title: "Sedan Page", nav });
  } catch (error) {
    next(error);
  }
}

baseController.buildSuvPage = async function(req, res) {
  try {
    const nav = await utilities.getNav();
    res.render("suv", { title: "SUV Page", nav });
  } catch (error) {
    next(error);
  }
}

baseController.buildSportPage = async function(req, res) {
  try {
    const nav = await utilities.getNav();
    res.render("sport", { title: "Sport Page", nav });
  } catch (error) {
    next(error);
  }
}

baseController.buildTruckPage = async function(req, res) {
  try {
    const nav = await utilities.getNav();
    res.render("truck", { title: "Truck Page", nav });
  } catch (error) {
    next(error);
  }
}
module.exports = baseController