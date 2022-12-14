/**
 * Feedback APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

/** Feedback object. */
export interface FeedbackMetaData {
  /** Unique identifier of the feedback. */
  id: string;
  /** Date of the feedback creation. */
  createdAt: string;
  /** Date of the feedback update. */
  updatedAt?: string;
  /** IP address of the user. */
  userIP: string;
  /** User agent of the device. */
  userAgent: string;
}

export const feedbackMetaDataSchema: Schema<FeedbackMetaData> = object({
  id: ['id', string()],
  createdAt: ['createdAt', string()],
  updatedAt: ['updatedAt', optional(string())],
  userIP: ['userIP', string()],
  userAgent: ['userAgent', string()],
});
