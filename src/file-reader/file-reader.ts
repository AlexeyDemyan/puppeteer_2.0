import { readFileSync } from "node:fs";

export class FileReader {
  private rawData = "";

  constructor(private readonly filename: string) {}

  public read(): void {
    this.rawData = readFileSync(this.filename, { encoding: "utf-8" });
    console.log(this.rawData.length);
  }

  public toString(): string {
    if (!this.rawData) {
      throw new Error("File was not read");
    }

    return this.rawData;
  }
}