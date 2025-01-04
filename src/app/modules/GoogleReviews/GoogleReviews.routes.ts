// GoogleReviews.routes: Module file for the GoogleReviews.routes functionality.
import express from 'express';
import { GoogleReviewsController } from './GoogleReviews.controller';
;

const router = express.Router();

router.use('/', GoogleReviewsController.getGoogleReviews);

export const GoogleReviewsRoute=router;