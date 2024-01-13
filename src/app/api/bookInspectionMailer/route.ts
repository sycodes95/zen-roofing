import { InspectionFormData } from "@/app/landingPage/components/bookInspection/bookInspection";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer"
import authenticate from "@google-cloud/local-auth"
import config from "@/config";
import multer from "multer"
import { google } from "googleapis";
import { Stream } from "stream"
// import { uploadFile } from "./_services/uploadFile";



// const transporter = nodemailer.createTransport({
//   host: "smtp.forwardemail.net",
//   port: 465,
//   secure: true,
//   auth: {
//     // TODO: replace `user` and `pass` values from <https://forwardemail.net>
//     user: "REPLACE-WITH-YOUR-ALIAS@YOURDOMAIN.COM",
//     pass: "REPLACE-WITH-YOUR-GENERATED-PASSWORD",
//   },
// });

export async function POST(req: Request, res: Response) {

  const getAuth = () => {
  const SCOPES = ['https://www.googleapis.com/auth/drive']
  
  const auth = new google.Auth.GoogleAuth({
    credentials: {
      client_email: config.gCredClientEmail,
      private_key: config.gPrivateKey
    },
    scopes: SCOPES
  })
    console.log(auth);
    return auth;
  }

  const uploadFile = async (file: File) => {
    const bufferStream = new Stream.PassThrough();
    bufferStream.end(file.arrayBuffer())
    const { data } = await google.drive({
      version: 'v3',
      auth: getAuth()
    }).files.create({
      media: {
        mimeType: file.type,
        body: bufferStream
      },
      requestBody: {
        name: file.name,
        parents: ['1JSNKhGiKk0ArP0BR09tPRzP9bvOXBv9j']
      },
      fields:"id,name"
    })

    console.log('file', data);

    return `https://drive.google.com/file/d/${data.id}/view`
  }

  try {

    const details: InspectionFormData = await req.json();
    console.log(details.fileAttachments);
    let html = ``

    // writes all key value pairs of booking details as li items in ul
    
    Object.entries(details).forEach(([key, value], index) => {
      if(index === 0) html += '<ul>'
      if(value && key !== 'fileAttachment') {
        html += `<li>${key} : ${value}</li>`
      }
      if(index === Object.entries(details).length - 1) html += '</ul>'
    })

    const uploadedURLs: string[] = []

    if(details.fileAttachments){
      for(const file in details.fileAttachments) {
        const fileURL = await uploadFile(details.fileAttachments[file])
        uploadedURLs.push(fileURL)
      }
    }

    console.log(uploadedURLs);
    

    // transporter.sendMail({
    //   from: 'sycodes955@gmail.com',
    //   to:'sycodes955@gmail.com',
    //   subject: `Roof Inspection Request | Email from ${details.email} | ${details.name}`,
    //   html
    // },(err, info)=> {
    //   if(err) return NextResponse.json({ status : 'failed'})
      
    //   console.log(info);
    //   console.log(info);
    // })

    return NextResponse.json({ status : 'success', attachments: uploadedURLs, html})
    
  } catch (error) {
    return NextResponse.json({ status : 'failed'})
  }
  
}