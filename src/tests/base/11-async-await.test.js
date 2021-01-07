import { getImagen } from "../../base/11-async-await";

describe("Pruebas con async-await Fetch", () => {
  test("Retornar URL de la imagen", async () => {
    const url = await getImagen();

    expect(url.includes("https://")).toBe(true);
  });
});
