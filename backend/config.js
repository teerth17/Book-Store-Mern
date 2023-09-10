import "dotenv/config";

export const PORT = 5555;

const PASSWORD = process.env.PASSWORD;
export const mongoDBURL = `mongodb+srv://teerth17:${PASSWORD}@cluster0.8scez.mongodb.net/?retryWrites=true&w=majority`;
