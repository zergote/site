import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma"
require('dotenv').config()

export async function POST(request: any) {
  console.log("entro")
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
    "HtmlBody": "Hola bienvenido, en estos mails recibiras consejos y mensajes brujula sobre el mundo del desarrollo todos los días, mensajes puntuales, directos y un mensaje puntual, tambien intentare venderte si tengo algo importante que te pueda servir. Puedes darte de baja cuando quieras escribiendo a christian@yanezc.com y de inmediato te excluyo. Espero que disfrutes recibiendo mi contenido.",
    "TextBody": "",
    "MessageStream": "outbound"
  });

  return NextResponse.json(newSubscriber)
}


