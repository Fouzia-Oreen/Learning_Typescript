// Optional parameters for the API client
export interface ApiClientOptions {
  // Base URL for the API
  baseUrl?: string; 
    // Timeout for API requests in milliseconds
    timeout?: number;
    // Headers to include in API requests
    headers?: Record<string, string>;
    // Whether to include credentials in API requests
    withCredentials?: boolean;
    // Additional options can be added as needed
}

// Optional parameters for API requests
export interface ApiRequestOptions {
  // Query parameters to include in the request URL
    queryParams?: Record<string, string | number | boolean>;
    // Headers to include in the request
    headers?: Record<string, string>;
    // Body of the request for POST/PUT/PATCH methods
    body?: any;
    // Whether to include credentials in the request
    withCredentials?: boolean;
    // Additional options can be added as needed
}

// Optional parameters for API responses
export interface ApiResponseOptions {
  // Whether to parse the response as JSON
    parseJson?: boolean;
    // Whether to include the raw response in the result
    includeRawResponse?: boolean;
    // Additional options can be added as needed
}

// Default parameters for the API client
export const defaultApiClientOptions: ApiClientOptions = {
  baseUrl: 'https://api.example.com',
  timeout: 5000,
    headers: {  
    'Content-Type': 'application/json',
  },
  withCredentials: false,
};

// Default parameters for API requests
export const defaultApiRequestOptions: ApiRequestOptions = {
  queryParams: {},
    headers: {},
    body: null,
    withCredentials: false,
};

// Default parameters for API responses
export const defaultApiResponseOptions: ApiResponseOptions = {
  parseJson: true,
    includeRawResponse: false,
};