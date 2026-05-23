-- CreateTable
CREATE TABLE "Problem" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "slug" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "difficulty" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "tags" TEXT NOT NULL,
    "companies" TEXT NOT NULL,
    "starterCode" TEXT NOT NULL,
    "testCases" TEXT NOT NULL,
    "solution" TEXT,
    "editorial" TEXT
);

-- CreateTable
CREATE TABLE "Submission" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "problemId" INTEGER NOT NULL,
    "code" TEXT NOT NULL,
    "language" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "runtime" INTEGER,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Submission_problemId_fkey" FOREIGN KEY ("problemId") REFERENCES "Problem" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Progress" (
    "problemId" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "status" TEXT NOT NULL,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Progress_problemId_fkey" FOREIGN KEY ("problemId") REFERENCES "Problem" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Problem_slug_key" ON "Problem"("slug");
