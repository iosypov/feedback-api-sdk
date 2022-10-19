/**
 * Feedback APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, RequestOptions } from '../core';
import { BadRequestError } from '../errors/badRequestError';
import { InternalServerError } from '../errors/internalServerError';
import { NotFoundError } from '../errors/notFoundError';
import { TooManyRequestsError } from '../errors/tooManyRequestsError';
import { UnauthorizedError } from '../errors/unauthorizedError';
import { Feedback, feedbackSchema } from '../models/feedback';
import { FeedbackReq, feedbackReqSchema } from '../models/feedbackReq';
import {
  FeedbackResponse,
  feedbackResponseSchema,
} from '../models/feedbackResponse';
import { XORDERBYEnum, xORDERBYEnumSchema } from '../models/xORDERBYEnum';
import { XORDEREnum, xORDEREnumSchema } from '../models/xORDEREnum';
import { array, boolean, number, optional, string } from '../schema';
import { BaseController } from './baseController';

export class FeedbackController extends BaseController {
  /**
   * ### Create a new feedback
   * You can explore sample payloads below.
   * Every feedback must have at least one properties:
   * - `rating`: numeric value (star rating)
   * - `sentiment`: boolean value (like/dislike button)
   * - `reasons`: list of text values (multiple choice questions)
   * - `suggestion`: text value (free text input)
   *
   * In addition, you may provide any of context values:
   * - `userId`: string value (for logged in users, we'll generate one for anonymous users)
   * - `page`: text value (url of the page where the feedback was given)
   * - `category`: text value (category of the page where the feedback was given)
   * - `apiOperationId`: text value (operationId for OpenAPI docs)
   * - `tags`: list of text values (product name, feature name, etc.)
   *
   *
   * @param body
   * @return Response from the API call
   */
  async createFeedback(
    body: FeedbackReq,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<Feedback>> {
    const req = this.createRequest('POST', '/feedback');
    const mapped = req.prepareArgs({ body: [body, feedbackReqSchema] });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.throwOn(400, BadRequestError, 'Bad Request');
    req.throwOn(401, UnauthorizedError, 'Unauthorized');
    req.throwOn(429, TooManyRequestsError, 'Too Many Requests');
    req.throwOn(500, InternalServerError, 'Internal Server Error');
    return req.callAsJson(feedbackSchema, requestOptions);
  }

  /**
   * Get feedback.
   *
   * @param xAPIKEY        Private key. Create a tenant to generate.
   * @param rating         Rating to filter by.
   * @param sentiment      Sentiment to filter by.
   * @param reasons        Reasons to filter by.
   * @param userId         User ID to filter by.
   * @param userIP         IP address to filter by.
   * @param page           Page to filter by.
   * @param category       Category to filter by.
   * @param apiOperationId Operation to filter by.
   * @param tags           Tags to filter by.
   * @param xPAGE          Page number.
   * @param xPERPAGE       Items per page.
   * @param xORDER         Sort order.
   * @param xORDERBY       Order by.
   * @return Response from the API call
   */
  async getFeedback(
    xAPIKEY: string,
    rating?: number[],
    sentiment?: boolean[],
    reasons?: string[],
    userId?: string[],
    userIP?: string[],
    page?: string[],
    category?: string[],
    apiOperationId?: string[],
    tags?: string[],
    xPAGE?: number,
    xPERPAGE?: number,
    xORDER?: XORDEREnum,
    xORDERBY?: XORDERBYEnum,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<FeedbackResponse>> {
    const req = this.createRequest('GET', '/feedback');
    const mapped = req.prepareArgs({
      xAPIKEY: [xAPIKEY, string()],
      rating: [rating, optional(array(number()))],
      sentiment: [sentiment, optional(array(boolean()))],
      reasons: [reasons, optional(array(string()))],
      userId: [userId, optional(array(string()))],
      userIP: [userIP, optional(array(string()))],
      page: [page, optional(array(string()))],
      category: [category, optional(array(string()))],
      apiOperationId: [apiOperationId, optional(array(string()))],
      tags: [tags, optional(array(string()))],
      xPAGE: [xPAGE, optional(number())],
      xPERPAGE: [xPERPAGE, optional(number())],
      xORDER: [xORDER, optional(xORDEREnumSchema)],
      xORDERBY: [xORDERBY, optional(xORDERBYEnumSchema)],
    });
    req.header('X-API-KEY', mapped.xAPIKEY);
    req.header('X-PAGE', mapped.xPAGE);
    req.header('X-PER-PAGE', mapped.xPERPAGE);
    req.header('X-ORDER', mapped.xORDER);
    req.header('X-ORDER-BY', mapped.xORDERBY);
    req.query('rating', mapped.rating);
    req.query('sentiment', mapped.sentiment);
    req.query('reasons', mapped.reasons);
    req.query('userId', mapped.userId);
    req.query('userIP', mapped.userIP);
    req.query('page', mapped.page);
    req.query('category', mapped.category);
    req.query('apiOperationId', mapped.apiOperationId);
    req.query('tags', mapped.tags);
    req.throwOn(401, UnauthorizedError, 'Unauthorized');
    req.throwOn(429, TooManyRequestsError, 'Too Many Requests');
    req.throwOn(500, InternalServerError, 'Internal Server Error');
    return req.callAsJson(feedbackResponseSchema, requestOptions);
  }

  /**
   * Get feedback by id.
   *
   * @param id        Resource identifier string.
   * @param xAPIKEY   Private key. Create a tenant to generate.
   * @return Response from the API call
   */
  async getFeedbackById(
    id: string,
    xAPIKEY: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<Feedback>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      id: [id, string()],
      xAPIKEY: [xAPIKEY, string()],
    });
    req.header('X-API-KEY', mapped.xAPIKEY);
    req.appendTemplatePath`/feedback/${mapped.id}`;
    req.throwOn(400, BadRequestError, 'Bad Request');
    req.throwOn(401, UnauthorizedError, 'Unauthorized');
    req.throwOn(404, NotFoundError, 'Not found');
    req.throwOn(429, TooManyRequestsError, 'Too Many Requests');
    req.throwOn(500, InternalServerError, 'Internal Server Error');
    return req.callAsJson(feedbackSchema, requestOptions);
  }

  /**
   * Update feedback by id.
   *
   * @param id           Resource identifier string.
   * @param body
   * @return Response from the API call
   */
  async updateFeedbackById(
    id: string,
    body: FeedbackReq,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<Feedback>> {
    const req = this.createRequest('PUT');
    const mapped = req.prepareArgs({
      id: [id, string()],
      body: [body, feedbackReqSchema],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/feedback/${mapped.id}`;
    req.throwOn(400, BadRequestError, 'Bad Request');
    req.throwOn(401, UnauthorizedError, 'Unauthorized');
    req.throwOn(404, NotFoundError, 'Not found');
    req.throwOn(429, TooManyRequestsError, 'Too Many Requests');
    req.throwOn(500, InternalServerError, 'Internal Server Error');
    return req.callAsJson(feedbackSchema, requestOptions);
  }
}
