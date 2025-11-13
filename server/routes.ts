import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertWaitlistSchema } from "@shared/schema";
import { fromError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/waitlist", async (req, res) => {
    try {
      const validated = insertWaitlistSchema.parse(req.body);
      const waitlistEntry = await storage.addToWaitlist(validated);
      res.json({ success: true, data: waitlistEntry });
    } catch (error: any) {
      if (error.name === "ZodError") {
        const validationError = fromError(error);
        return res.status(400).json({ 
          success: false, 
          message: validationError.message 
        });
      }
      
      if (error.message === "Email already registered") {
        return res.status(409).json({ 
          success: false, 
          message: "This email is already on the waitlist" 
        });
      }

      console.error("Waitlist error:", error);
      res.status(500).json({ 
        success: false, 
        message: "Failed to join waitlist. Please try again later." 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
