-- CreateTable
CREATE TABLE "Pizza" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "sabor" TEXT NOT NULL,
    "preco" REAL NOT NULL,
    "descricao" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Pedido" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "endereco" TEXT NOT NULL,
    "idPizza" INTEGER NOT NULL,
    CONSTRAINT "Pedido_idPizza_fkey" FOREIGN KEY ("idPizza") REFERENCES "Pizza" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
