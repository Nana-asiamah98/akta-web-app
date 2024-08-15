

export interface ICustomRESTResponse {
  status?: number;
  timestamp?: Date;
  isError?: boolean;
  data: any;
}

export interface IResponseDTO {
  timestamp: string;
  status: number;
  message: string;
  requestId: string;
  data: any;
}
