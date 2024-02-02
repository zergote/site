import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma"
import postmark from "postmark"
require('dotenv').config()

export async function POST(request: any) {
  const { email } = await request.json()
  const newSubscriber = await prisma.subscribers.create({
    data: {
      email
    }
  }
  )
  console.log(newSubscriber)

  // Require:
  var postmark = require("postmark");

  // Send an email:
  var client = new postmark.ServerClient(process.env.API_POSTMARK);

  client.sendEmail({
    "From": "christian@yanezc.com",
    "To": email,
    "Subject": "Bienvenido la lista de correos",
    "HtmlBody": "Hola bienvenido, en estos mails recibiras consejos y mensajes brujula sobre el mundo del desarrollo. Puedes darte de baja cuando quieras escribiendo a christian@yanezc.com. Espero que disfrutes recibiendo el contenido.",
    "TextBody": "",
    "MessageStream": "outbound"
  });

  return NextResponse.json(newSubscriber)
}


