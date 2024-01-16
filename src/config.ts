const config = {
  domain: process.env.NEXT_PUBLIC_DOMAIN,
  domainEmail: process.env.NEXT_PUBLIC_FORM_EMAIL,
  gCredClientEmail: process.env.G_CRED_CLIENT_EMAIL,
  gPrivateKey: process.env.G_PRIVATE_KEY,
  gDriveEmail: process.env.G_DRIVE_EMAIL,
  gEmail: process.env.NODEMAILER_EMAIL,
  gEmailPass: process.env.NODEMAILER_PASS,
  gAppName: process.env.G_APP_NAME,
  gAppPW: process.env.G_APP_PW,

}

export default config;