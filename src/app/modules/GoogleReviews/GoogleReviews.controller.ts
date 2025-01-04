// GoogleReviews.controller: Module file for the GoogleReviews.controller functionality.
// Reservation.controller: Module file for the Reservation.controller functionality.
import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";
import { GoogleReviews } from "./GoogleReviews.service";

// ContactUs.controller: Module file for the ContactUs.controller functionality.
const getGoogleReviews = catchAsync(async (req: Request, res: Response) => {
  const result = await GoogleReviews.getGoogleReviews();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Google reviews reterive successfully",
    data: result,
  });
});

export const GoogleReviewsController = {
  getGoogleReviews,
};
