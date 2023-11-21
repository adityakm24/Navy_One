const usrname = process.env.usrname;
const password = process.env.password;

export const connectionSrt = `mongodb+srv://${usrname}:${password}@cluster0.sagez.mongodb.net/navy_one?retryWrites=true&w=majority`;

