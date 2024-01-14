import { InspectionFormData } from "@/app/landingPage/components/bookInspection/bookInspection";
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer"
import authenticate from "@google-cloud/local-auth"
import config from "@/config";
import multer from "multer"
import { google } from "googleapis";
import { Stream } from "stream"
import formidable from 'formidable';
import { File } from "buffer";
import { GoogleAuth } from "google-auth-library"
import { Readable } from "stream";

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



export async function POST(req: NextRequest, res: NextResponse) {

  const getAuth = () => {
    
    const auth = new GoogleAuth({
      scopes: 'https://www.googleapis.com/auth/drive',
      credentials: {
        client_email: config.gCredClientEmail,
        private_key: config.gPrivateKey
      },
    })
    console.log(auth);
    return auth;
  }

  

  const uploadFile = async (file: File) => {
    const service = google.drive({version: 'v3', auth: getAuth()});
    const requestBody = {
      name: file.name,
      parent: ['1JSNKhGiKk0ArP0BR09tPRzP9bvOXBv9j'],
      fields: 'id',
    };
    const media = {
      mimeType: file.type,
      body: Readable.from(file.stream()),
    };

    try {
     const uploadedFile = await service.files.create({
      requestBody,
      media,
    });

    // Set permission for anyone with the link
    service.permissions.create({
      fileId: uploadedFile.data.id === null ? undefined : uploadedFile.data.id,
      requestBody: {
        role: 'writer',
        type: 'user',
        emailAddress: config.gDriveEmail,
      },
    });
      return `https://drive.google.com/file/d/${uploadedFile.data.id}/view`;

    } catch (err) {
      console.error("Error uploading to google drive", err);
    }
  }

  try {
    const formData = await req.formData()
    

    let ul = `<ul>`
    let ulClose = `</ul>`
    let li = ''

    // writes all key value pairs of booking details as li items in ul
    const files: File[] = []
    formData.forEach((data, key) => {
      if(key !== 'file') {
        li += `<li>${key} : ${data}</li>`
      } else if (key === 'file' && data instanceof File) {
        files.push(data)
      }
    });


    for(let i = 0; i < files.length; i++){
      const fileURL = await uploadFile(files[i])
      console.log(fileURL);
    }

    // console.log(li);
    // console.log(files);


    // const uploadedURLs: string[] = []

    // if(details.fileAttachments){
    //   for(const file in details.fileAttachments) {
    //     const fileURL = await uploadFile(details.fileAttachments[file])
    //     uploadedURLs.push(fileURL)
    //   }
    // }

    // console.log(uploadedURLs);
    

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

    return NextResponse.json({ status : 'success'})
    
  } catch (error) {
    return NextResponse.json({ status : 'failed', err: error})
  }
  
}