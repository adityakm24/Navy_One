const usrname = process.env.usrname;
const password = process.env.password;

export const connectionSrt = `mongodb+srv://${usrname}:${password}@cluster0.sagez.mongodb.net/rms?retryWrites=true&w=majority`;

