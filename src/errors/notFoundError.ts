/**
 * Feedback APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiError } from '../core';

/**
 * Creates an instance of NotFound
 */
interface NotFound {
  message: string;
}

export class NotFoundError extends ApiError<NotFound> {}
