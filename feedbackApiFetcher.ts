export type FeedbackApiFetcherExtraProps = {
  /**
   * You can add some extra props to your generated fetchers.
   *
   * Note: You need to re-gen after adding the first property to
   * have the `FeedbackApiFetcherExtraProps` injected in `FeedbackApiComponents.ts`
   **/
};

const baseUrl = 'https://api.example.com/v1';

export type ErrorWrapper<TError> = TError | { status: 'unknown'; payload: string };

export type FeedbackApiFetcherOptions<TBody, THeaders, TQueryParams, TPathParams> = {
  url: string;
  method: string;
  body?: TBody;
  headers?: THeaders;
  queryParams?: TQueryParams;
  pathParams?: TPathParams;
  signal?: AbortSignal;
} & FeedbackApiFetcherExtraProps;

export async function feedbackApiFetch<
  TData,
  TError,
  TBody extends {} | undefined | null,
  THeaders extends {},
  TQueryParams extends {},
  TPathParams extends {}
>({
  url,
  method,
  body,
  headers,
  pathParams,
  queryParams,
  signal,
}: FeedbackApiFetcherOptions<TBody, THeaders, TQueryParams, TPathParams>): Promise<TData> {
  try {
    const response = await window.fetch(`${baseUrl}${resolveUrl(url, queryParams, pathParams)}`, {
      signal,
      method: method.toUpperCase(),
      body: body ? JSON.stringify(body) : undefined,
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
    });
    if (!response.ok) {
      let error: ErrorWrapper<TError>;
      try {
        error = await response.json();
      } catch (e) {
        error = {
          status: 'unknown' as const,
          payload: e instanceof Error ? `Unexpected error (${e.message})` : 'Unexpected error',
        };
      }

      throw error;
    }

    if (response.headers.get('content-type')?.includes('json')) {
      return await response.json();
    } else {
      // if it is not a json response, assume it is a blob and cast it to TData
      return (await response.blob()) as unknown as TData;
    }
  } catch (e) {
    throw {
      status: 'unknown' as const,
      payload: e instanceof Error ? `Network error (${e.message})` : 'Network error',
    };
  }
}

const resolveUrl = (
  url: string,
  queryParams: Record<string, string> = {},
  pathParams: Record<string, string> = {}
) => {
  let query = new URLSearchParams(queryParams).toString();
  if (query) query = `?${query}`;
  return url.replace(/\{\w*\}/g, (key) => pathParams[key.slice(1, -1)]) + query;
};
