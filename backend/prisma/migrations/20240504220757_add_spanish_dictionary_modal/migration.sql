-- CreateTable
CREATE TABLE "SpanishDictionary" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "word" TEXT NOT NULL,
    "definition" TEXT NOT NULL,
    "example" TEXT
);

-- CreateIndex
CREATE UNIQUE INDEX "SpanishDictionary_word_key" ON "SpanishDictionary"("word");
