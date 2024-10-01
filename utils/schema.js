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

export const UserAnswer = pgTable("user_answer", {
    id: serial("id").primaryKey(),
    mockIdRef: varchar("mockId").notNull(),
    question: text("question").notNull(),
    correctAnswer: text("answer").notNull(),
    userAns: text("userAnswer").notNull(),
    feedback: text("feedback").notNull(),
    rating: varchar("rating").notNull(),
    userEmail: varchar("userEmail").notNull(),
    createdAt: varchar("createdAt").notNull(),
})