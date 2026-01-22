// import fs from "fs";
// import path from "path";

// export const getData = async () => {
//   const filePath = path.join(process.cwd(), "app/data/data.json");
//   const jsonData = fs.readFileSync(filePath, "utf-8");
//   return JSON.parse(jsonData);
// };
import fs from "fs/promises";
import path from "path";

export async function getData() {
  const filePath = path.join(
    process.cwd(),
    "app/data/data.json"
  );

  const jsonData = await fs.readFile(filePath, "utf-8");
  return JSON.parse(jsonData);
}

export async function getTreatments() {
  const filePath = path.join(
    process.cwd(),
    "app/data/treatments.json"
  );

  const jsonData = await fs.readFile(filePath, "utf-8");
  return JSON.parse(jsonData);
}

export async function getTreatmentBySlug(slug: string) {
  const treatments = await getTreatments();
  return treatments.find((t: any) => t.slug === slug);
}