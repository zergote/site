import { NextResponse } from "next/server";
var postmark = require("postmark");

export async function GET() {
  return NextResponse.json("task")

  var serverToken = "xxxx-xxxxx-xxxx-xxxxx-xxxxxx";
  var client = new postmark.ServerClient(serverToken);

  client.sendEmail({
    "From": "sender@example.com",
    "To": "receiver@example.com",
    "Subject": "Test",
    "TextBody": "Hello from Postmark!"
  });
}