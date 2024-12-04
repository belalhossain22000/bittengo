// Reservation.routes: Module file for the Reservation.routes functionality.
// ContactUs.routes: Module file for the ContactUs.routes functionality.
import express from "express";
import { ReservationController } from "./Reservation.controller";

const router = express.Router();
router.post("/",ReservationController.reservation)

export const ReservationRoutes = router;
