import config from "@/config"
import { google } from "googleapis"

export const getAuth = () => {
  const SCOPES = ['https://www.googleapis.com/auth/drive']
  
  const auth = new google.Auth.GoogleAuth({
    credentials: {
      client_email: config.gCredClientEmail,
      private_key: config.gPrivateKey
    },
    scopes: SCOPES
  })

  return auth;
}