import config from "@/config"
import { GoogleAuth } from "google-auth-library";

export const getAuth = () => {
    
  const auth = new GoogleAuth({
    scopes: 'https://www.googleapis.com/auth/drive',
    credentials: {
      client_email: config.gCredClientEmail,
      private_key: config.gPrivateKey
    },
  })
  return auth;
}