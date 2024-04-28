/*
  Warnings:

  - You are about to drop the `Word` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `answer` on the `Question` table. All the data in the column will be lost.
  - Added the required column `type` to the `Game` table without a default value. This is not possible if the table is not empty.
  - Added the required column `answerId` to the `Question` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dictId` to the `Question` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Word_word_key";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Word";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Answer" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "answer" TEXT NOT NULL,
    "questionId" TEXT NOT NULL,
    "gameId" TEXT
);

-- CreateTable
CREATE TABLE "Dictionary" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "word" TEXT NOT NULL,
    "definition" TEXT NOT NULL
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Game" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Game_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Game" ("createdAt", "id", "updatedAt", "userId") SELECT "createdAt", "id", "updatedAt", "userId" FROM "Game";
DROP TABLE "Game";
ALTER TABLE "new_Game" RENAME TO "Game";
CREATE TABLE "new_Question" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "gameId" TEXT NOT NULL,
    "dictId" TEXT NOT NULL,
    "answerId" TEXT NOT NULL,
    "question" TEXT NOT NULL,
    CONSTRAINT "Question_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "Game" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Question_answerId_fkey" FOREIGN KEY ("answerId") REFERENCES "Answer" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Question_dictId_fkey" FOREIGN KEY ("dictId") REFERENCES "Dictionary" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Question" ("gameId", "id", "question") SELECT "gameId", "id", "question" FROM "Question";
DROP TABLE "Question";
ALTER TABLE "new_Question" RENAME TO "Question";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "Dictionary_word_key" ON "Dictionary"("word");
