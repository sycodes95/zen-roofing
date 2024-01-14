import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer"
import config from "@/config";
import { File } from "buffer";
import { uploadFile } from "./_services/uploadFile";

const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: config.gEmail,
    pass: config.gEmailPass,
  },
});

export async function POST(req: NextRequest, res: NextResponse) {
  
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
      li += `<li>${fileURL}</li>`
    }

    transporter.sendMail({
      from: config.gEmail,
      to: config.gEmail,
      subject: `Roof Inspection Request | Email from ${formData.get('email')} | ${formData.get('name')}`,
      html: (ul + li + ulClose)
    },(err, info)=> {
      if(err) return NextResponse.json({ status : 'failed', info})
    })

    return NextResponse.json({ status : 'success'})
    
  } catch (error) {
    return NextResponse.json({ status : 'failed', err: error})
  }
  
}