// Reservation.controller: Module file for the Reservation.controller functionality.
import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";
import { ReservationService } from "./Reservation.service";


// ContactUs.controller: Module file for the ContactUs.controller functionality.
const reservation = catchAsync(async (req: Request, res: Response) => {

    const result = await ReservationService.createReservation(req.body);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Reservation Email sent successfully",
      data: result,
    });
  });


  export const ReservationController ={
    reservation
  }