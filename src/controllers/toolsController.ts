/**
 * Feedback APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, RequestOptions } from '../core';
import { InternalServerError } from '../errors/internalServerError';
import { TooManyRequestsError } from '../errors/tooManyRequestsError';
import { BaseController } from './baseController';

export class ToolsController extends BaseController {
  /**
   * Check health.
   *
   * @return Response from the API call
   */
  async health(
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<void>> {
    const req = this.createRequest('GET', '/health');
    req.throwOn(429, TooManyRequestsError, 'Too Many Requests');
    req.throwOn(500, InternalServerError, 'Internal Server Error');
    return req.call(requestOptions);
  }
}
