const router = require("express").Router();
const Personel = require("./personel-model");

router.get("/", async (req, res, next) => {
  try {
    const personel = await Personel.getAll();
    res.status(201).json(personel);
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
    const newPersonel = await Personel.add(req.body);
    res.json(newPersonel);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    console.log(req.params.id);
    await Personel.remove(req.params.id);
    res
      .status(201)
      .json({ message: `${req.params.id} id nolu personel silindi` });
  } catch (error) {
    next(error);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    await Personel.change(req.body, req.params.id);
    res
      .status(201)
      .json({ message: `${req.params.id} id nolu personel değiştirildi` });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
