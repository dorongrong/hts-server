import express from "express";
import schoolController from "./school.controller";
import stockItemController from "./stockItem.controller";
import orderController from "./order.controller";

const router = express.Router();

router.use("/schools", schoolController);
router.use("/stocks", stockItemController);
router.use("/orders", orderController);

export default router;
