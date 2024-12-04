// ContactUs.routes: Module file for the ContactUs.routes functionality.
import express from "express";
import { contactUsController } from "./ContactUs.controller";
import validateRequest from "../../middlewares/validateRequest";
import { messageSchema } from "../Reservation/Reservation.validation";

const router = express.Router();
router.post("/", validateRequest(messageSchema), contactUsController.contactUs);

export const ContactUsRoutes = router;
