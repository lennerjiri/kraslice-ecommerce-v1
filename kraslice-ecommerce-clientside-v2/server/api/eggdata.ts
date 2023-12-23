import { IEggData } from '~~/interfaces/vajicka';

export default defineEventHandler(async () => {
  const fetchedData: IEggData[] = [];
  let page = 1;

  while (true) {
    const req = (await $fetch(
      `http://localhost:3000/api/v1/products?page=${page}&limit=1`,
      {
        method: 'GET',
      }
    )) as { data: IEggData[] };

    const reqData = await req.data;

    fetchedData.push(...reqData);
    page++;

    if (reqData.length < 1) {
      break;
    }
  }

  return fetchedData;
});
