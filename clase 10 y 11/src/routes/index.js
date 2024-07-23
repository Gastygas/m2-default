const {Router} = require("express");;
const usersController = require("../controllers/userControllers");
const vehiclesController = require("../controllers/vehiclesController");
const validateId = require("../middleware/validateId");

const router = Router();

router.get("/vehicles",vehiclesController.getAllVehicles)

router.get("/users",usersController.getUsers);

router.get("/users/byName", usersController.getUserByName);

//las rutas param van a lo ultimo siempre
router.get("/users/:id",validateId, usersController.getUserById);

router.put("/users/addVehicle",usersController.addVehicle)

router.post("/vehicles",vehiclesController.createVehicle)
router.post("/users",usersController.createUser);


module.exports = router;