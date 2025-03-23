import { Backend } from "../../..";

async function checkConnection(): Promise<boolean> {
  const conn = await Backend.checkConnection();
  return conn;
}

export default checkConnection;
