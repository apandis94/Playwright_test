import * as XLSX from 'xlsx';
import path from 'path';

function loadSheet(envKey: string, sheetName: string): any[] {
  const excelPath = process.env[envKey];
  if (!excelPath) {
    throw new Error(`${envKey} env not defined`);
  }

  const fullPath = path.resolve(excelPath);
  const workbook = XLSX.readFile(fullPath);

  const sheet = workbook.Sheets[sheetName];
  if (!sheet) {
    throw new Error(`Sheet "${sheetName}" not found`);
  }

  return XLSX.utils
    .sheet_to_json<any>(sheet, { defval: '' })
    .filter(row =>
      Object.values(row).some(v => v !== '')
    );
}

export function readExcelData<T>(
  envKey: string,
  sheetName: string,
  rowIndex = 0
): T {
  const rows = loadSheet(envKey, sheetName);

  if (!rows[rowIndex]) {
    throw new Error(`❌ Invalid data at Excel row ${rowIndex + 2}`);
  }

  return rows[rowIndex] as T;
}

export function readExcelRows<T>(
  envKey: string,
  sheetName: string
): T[] {
  return loadSheet(envKey, sheetName) as T[];
}
