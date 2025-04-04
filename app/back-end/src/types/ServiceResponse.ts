type ServiceResponseErrorType = 401 ;

export type ServiceResponseError = {
  status: ServiceResponseErrorType;
  data: { message: string };
};

export type ServiceResponseSuccess<T> = {
  status: 200;
  data: T;
};

export type ServiceResponse<T> =
  | ServiceResponseError
  | ServiceResponseSuccess<T>;
