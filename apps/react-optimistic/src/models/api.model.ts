export type ApiResponseSuccess<T> = {
  data: T;
  message: string;
  status: 'success';
};

export type ApiResponseError = {
  message: string;
  status: 'error';
};

export type ApiResponse<T> = ApiResponseSuccess<T> | ApiResponseError;
