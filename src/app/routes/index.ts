import express from "express";
import { userRoutes } from "../modules/User/user.route";
import { AuthRoutes } from "../modules/Auth/auth.routes";
import { ContactUsRoutes } from "../modules/ContactUs/ContactUs.routes";
import { ReservationRoutes } from "../modules/Reservation/Reservation.routes";


const router = express.Router();

const moduleRoutes = [
  {
    path: "/users",
    route: userRoutes,
  },
  {
    path: "/auth",
    route: AuthRoutes,
  },
  {
    path: "/contact-us",
    route: ContactUsRoutes,
  },
  {
    path: "/reservation",
    route: ReservationRoutes,
  },

];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
