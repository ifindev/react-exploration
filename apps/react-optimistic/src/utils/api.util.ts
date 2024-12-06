import { ApiResponse } from '../models/api.model';

export default function toApiResponse<T>(body: ApiResponse<T>): ApiResponse<T> {
  return body;
}
