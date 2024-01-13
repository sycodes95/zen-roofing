import { google } from "googleapis";
import { Stream } from "stream"
import { getAuth } from "./getAuth";

export const uploadFile = async (file: File) => {
  const bufferStream = new Stream.PassThrough();
  bufferStream.end(file)
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

