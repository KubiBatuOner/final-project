const router = require("express").Router();
const Hizmet = require("./hizmet-model");

router.get("/", async (req, res, next) => {
  try {
    const hizmet = await Hizmet.getAll();
    res.status(201).json(hizmet);
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
    const newHizmet = await Hizmet.add(req.body);
    res.json(newHizmet);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    console.log(req.params.id);
    await Hizmet.remove(req.params.id);
    res
      .status(201)
      .json({ message: `${req.params.id} id nolu hizmet silindi` });
  } catch (error) {
    next(error);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    await Hizmet.change(req.body, req.params.id);
    res
      .status(201)
      .json({ message: `${req.params.id} id nolu hizmet değiştirildi` });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
