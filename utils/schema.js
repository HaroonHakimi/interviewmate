import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

export const InterviewMate = pgTable("interview_mate", {
    id: serial("id").primaryKey(),
    jsonMockResp: text("jsonMockResp").notNull(),
    jobPosition: varchar("jobPosition").notNull(),
    jobDescription: varchar("jobDescription").notNull(),
    jobExperience: varchar("jobExperience").notNull(),
    createdBy: varchar("createdBy").notNull(),
    createdAt: varchar("createdAt").notNull(),
    mockId: varchar("mockId").notNull(),
})