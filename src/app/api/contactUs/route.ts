import { NextRequest, NextResponse } from "next/server";
import config from "@/config";
import { File } from "buffer";
import { nodeMailerTransporter } from "../_services/nodeMailerTransport";
import { FetchResult } from "../_types/types";

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  inquiry: string;
}

export async function POST(req: NextRequest, res: NextResponse) {

  let listItemsHTML = ``

  try {
    const formData: ContactFormData = await req.json()

    Object.entries(formData).forEach(([key, value]) => (
      listItemsHTML += `<li>${key} : ${value}</li>`
    ))

    nodeMailerTransporter.sendMail({
      from: config.gEmail,
      to: config.gEmail,
      subject: `Customer Inquiry | Email from ${formData.email} | ${formData.firstName} ${formData.lastName}`,
      html: `<ul> ${listItemsHTML} </ul>`
    },(err, info)=> {
      if(err) return NextResponse.json({ status : 'failed', info})
    })

    return NextResponse.json<FetchResult>({ status : 'success'});
    
  } catch (error) {

    return NextResponse.json<FetchResult>({ status : 'failed', err: error});

  }
  
}