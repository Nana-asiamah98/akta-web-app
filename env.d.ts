declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_CP_API_URL: string;
      NEXT_PUBLIC_AUTH_API_URL: string;
      NEXTAUTH_SECRET: string;
      NEXT_BASE_PATH: string;
      NEXTAUTH_URL: string;
      NEXT_PUBLIC_KEYCLOAK_REALM: string;
      NEXT_PUBLIC_LP_API_URL: string;
      NEXT_PUBLIC_BL_API_URL: string;
      NEXT_PUBLIC_LAPTOP_SUPPLIER: number;
      NEXT_PUBLIC_CP_TYPE: string;
      NEXT_PUBLIC_BASE_URL: string;
      NEXT_PUBLIC_KEYCLOAK_BASE_URL: string;
      NEXT_PUBLIC_PREFIX_URL: string;
      NEXT_PUBLIC_SI_API_URL: string;
      NEXT_PUBLIC_HELPDESK_API_URL: string;
      NEXT_PUBLIC_CP_ADMIN: string;
      NEXT_PUBLIC_CP_MAIN_ADMIN: string;
      NEXT_PUBLIC_CP_OPERATIONAL: string;
    }
  }
}

export {};
