import { Router } from "express";

export const contactRouter = Router();

contactRouter.post("/", (req, res) => {
  const { name, email, message } = req.body ?? {};
  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return res.status(400).json({ error: "name, email and message are required" });
  }
  // İleride: nodemailer / Resend ile e-posta gönder
  console.log("[Contact]", { name: name.trim(), email: email.trim(), message: message.trim().slice(0, 200) });
  res.json({ success: true });
});
