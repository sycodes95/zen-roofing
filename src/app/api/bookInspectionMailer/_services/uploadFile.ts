import { google } from "googleapis";
import { Readable } from "stream";
import { File } from "buffer";
import config from "@/config";
import { getAuth } from "./getAuth";

export const uploadFile = async (file: File) => {
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
      return ''
    }
  }