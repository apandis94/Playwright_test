import { readExcelRows } from './excelReader';

export interface LoginData {
  username: string;
  password: string;
  login_type: string;
  otp_key: string;
}

export function getLoginData(rowIndex?: number): LoginData | LoginData[] {
  const data = readExcelRows<LoginData>('LOGIN_EXCEL', 'login');

  if (rowIndex !== undefined) {
    return data[rowIndex];
  }

  return data;
}
