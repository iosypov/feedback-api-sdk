/**
 * Feedback APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  boolean,
  number,
  object,
  optional,
  Schema,
  string,
} from '../schema';

export interface FeedbackReq {
  /** Rating of the feedback. */
  rating?: number;
  /** Sentiment of the feedback. */
  sentiment?: boolean;
  /** Reasons of the feedback. */
  reasons?: string[];
  /** Suggestion of the feedback. */
  suggestion?: string;
  /** Page of the feedback. */
  page?: string;
  /** Category of the feedback. */
  category?: string;
  /** operationId of the API. */
  apiOperationId?: string;
  /** Any list of tags to group feedbacks by. */
  tags?: string[];
  /** Unique identifier of the user. */
  userId?: string;
}

export const feedbackReqSchema: Schema<FeedbackReq> = object({
  rating: ['rating', optional(number())],
  sentiment: ['sentiment', optional(boolean())],
  reasons: ['reasons', optional(array(string()))],
  suggestion: ['suggestion', optional(string())],
  page: ['page', optional(string())],
  category: ['category', optional(string())],
  apiOperationId: ['apiOperationId', optional(string())],
  tags: ['tags', optional(array(string()))],
  userId: ['userId', optional(string())],
});
