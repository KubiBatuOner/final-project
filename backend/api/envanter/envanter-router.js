const router = require("express").Router();
const Envanter = require("./envanter-model");

router.get("/", async (req, res, next) => {
  try {
    const envanter = await Envanter.getAll();
    res.status(201).json(envanter);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    res.status(201).json(req.params.id);
  } catch (error) {
    next(error);
  }
});

router.get("/:name", async (req, res, next) => {
  try {
    res.status(201).json(req.params.name);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const newEnvanter = await Envanter.add(req.body);
    res.json(newEnvanter);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    console.log(req.params.id);
    await Envanter.remove(req.params.id);
    res
      .status(201)
      .json({ message: `${req.params.id} id nolu envanter silindi` });
  } catch (error) {
    next(error);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    await Envanter.change(req.body, req.params.id);
    res
      .status(201)
      .json({ message: `${req.params.id} id nolu envanter değiştirildi` });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
