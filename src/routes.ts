import { Router } from "express";
import shortUrlSchema from "./models/shortUrl";

const routes = Router();

routes.post("/shortUrl", async  (req, res) => {
  await shortUrlSchema.create({ short: req.body });
});

routes.get("/:url", (req, res) => {
  const param = req.params.url;
  return res.redirect("https://google.com");
});

export default routes;
