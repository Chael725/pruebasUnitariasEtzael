import { describe, it, expect } from "vitest";
import { generateSixDigitCode } from "../../../src/utils/generateCode.util.ts";

describe("Pruebas de generación de códigos", () => {
  it("Debe generar un código en formato de cadena con exactamente 6 dígitos", () => {
    const code = generateSixDigitCode();

    expect(typeof code).toBe("string");
    expect(code.length).toBe(6);
    expect(/^[0-9]{6}$/.test(code)).toBe(true);
  });

  it("Debe generar códigos dinámicos en llamadas sucesivas", () => {
    const code1 = generateSixDigitCode();
    const code2 = generateSixDigitCode();

    expect(code1).not.toBe(code2);
  });
});
