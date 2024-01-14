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
    console.log('upload');
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

    return NextResponse.json({ status : 'success', attachments: uploadedURLs, html})
    
  } catch (error) {
    return NextResponse.json({ status : 'failed', err: error})
  }
  
}