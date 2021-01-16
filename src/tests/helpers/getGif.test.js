import { getGift } from "../../components/helpers/getGfits";

describe("prubas con getGifts fetch", () => {


  test("Debe traer 10 elementos", async () => {

    const gifts = await getGift("naruto");

    expect(gifts.length).toBe(10);
  });

  test("Debe traer 0 elementos", async () => {

    const gifts = await getGift('');
    
    expect(gifts.length).toBe(0);
  });
});
