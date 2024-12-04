import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";
import { ContactUsService } from "./ContactUs.service";

// ContactUs.controller: Module file for the ContactUs.controller functionality.
const contactUs = catchAsync(async (req: Request, res: Response) => {

    const result = await ContactUsService.contactUs(req.body);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Email sent successfully",
      data: result,
    });
  });


  export const contactUsController ={
    contactUs
  }