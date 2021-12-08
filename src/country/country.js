import { checkError, client } from '../services/client';

export async function getCountries() {
  const response = await client.from('countries').select();

  return checkError(response);
}
