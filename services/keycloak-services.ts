import { authOptions } from "@/lib/auth";
import { ICustomRESTResponse, IResponseDTO } from "@/lib/interfaces";
import axios, { AxiosError } from "axios";
import { getServerSession } from "next-auth";

const BASE_URL =
  process.env.NEXT_PUBLIC_KEYCLOAK_BASE_URL +
  `/${process.env.NEXT_PUBLIC_KEYCLOAK_REALM}/protocol/openid-connect`;

/* START - Service */

export const getKeycloakAccessToken = async ({
  username,
  password,
}: IKeycloakUserCredentials): Promise<ICustomRESTResponse> => {
  try {
    const results = await axios.post(
      `${BASE_URL}/token`,
      new URLSearchParams({
        grant_type: process.env.NEXT_PUBLIC_KEYCLOAK_GRANT_TYPE,
        client_id: process.env.NEXT_PUBLIC_KEYCLOAK_CLIENT_ID,
        scope: process.env.NEXT_PUBLIC_KEYCLOAK_SCOPE,
        username: username,
        password: password,
      })
    );

    const mainResponse: IKeycloakUserInfoResponse = results?.data;
    const response: ICustomRESTResponse = {
      data: mainResponse,
      status: results.status,
      timestamp: new Date(),
    };
    return response;
  } catch (error) {
    return formulateErrorResposne(error);
  }
};

export const logoutKeycloakSession = async (
  refresh_token: string
): Promise<ICustomRESTResponse> => {
  try {
    const results = await axios.post(
      `${BASE_URL}/logout`,
      new URLSearchParams({
        client_id: process.env.NEXT_PUBLIC_KEYCLOAK_CLIENT_ID,
        refresh_token: refresh_token,
      })
    );

    const mainResponse: IKeycloakUserInfoResponse = results?.data;
    const response: ICustomRESTResponse = {
      data: mainResponse,
      status: results.status,
      timestamp: new Date(),
    };
    return response;
  } catch (error) {
    return formulateErrorResposne(error);
  }
};

export const getUserInfo = async (
  token?: string
): Promise<ICustomRESTResponse> => {
  try {
    const results = await axios.get(`${BASE_URL}/userinfo`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const mainResponse: IKeycloakUserInfoResponse = results?.data;
    const response: ICustomRESTResponse = {
      data: mainResponse,
      status: results.status,
      timestamp: new Date(),
    };
    return response;
  } catch (error) {
    return formulateErrorResposne(error);
  }

  /* END - Service */
};

const formulateErrorResposne = (error: any) => {
  const err = error as AxiosError;
  const errorResponse: IResponseDTO = err?.response?.data as IResponseDTO;
  const response: ICustomRESTResponse = {
    data: errorResponse?.data,
    status: errorResponse?.status,
    isError: true,
    timestamp: new Date(),
  };
  return response;
};

// Interfaces
export interface IKeycloakUserInfoResponse {
  sub: string;
  email_verified: boolean;
  name: string;
  preferred_username: string;
  given_name: string;
  family_name: string;
  email: string;
}

interface IKeycloakUserCredentials {
  username: string;
  password: string;
}

interface IKeycloakLogout {
  refresh_token: string;
}

export interface IKeycloakResponse {
  access_token: string;
  expires_in: number;
  refresh_expires_in: number;
  refresh_token: string;
  token_type: string;
  id_token: string;
  "not-before-policy": number;
  session_state: string;
  scope: string;
}
