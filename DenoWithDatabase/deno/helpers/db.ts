import { MongoClient } from "@db/mongo";
import "@std/dotenv/load"; // .env dosyasını okumak için

// 1. İstemciyi (Client) oluştur
const client = new MongoClient();

// 2. Şifreli adresi al
const connectionString = Deno.env.get("MONGO_URI");

if (!connectionString) {
  console.log("Error: Not found MONGO_URI file in .env!");
  Deno.exit(1);
}

// 3. Bağlan (Bu kısım hocada connectWithUri olabilir, modern hali budur)
await client.connect(connectionString);

console.log("🟢 Succesfull connecting!!");

// 4. Veritabanını seç ve dışarıya (diğer dosyalara) gönder
const db = client.database("todo-app"); // Buraya istediğin ismi verebilirsin

export default db;
