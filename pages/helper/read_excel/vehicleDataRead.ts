import { readExcelData } from './excelReader';

export interface VehicleExternalData {
  vendorName: string;
  vehicleType: string;
  vehicle_year: string;
  fuel_type: string;
  business_unit: string;
  branch: string;
  pool: string;
}

export function getVehicleExternalData(
  rowIndex: number = 0
): VehicleExternalData {
  const vehicle = readExcelData<VehicleExternalData>(
    'VEHICLE_EXTERNAL',
    'vehicle_eksternal',
    rowIndex
  );

  if (
    !vehicle?.vendorName ||
    !vehicle?.vehicleType ||
    !vehicle?.vehicle_year
  ) {
    throw new Error(`❌ Invalid vehicle data at Excel row ${rowIndex + 2}`);
  }

  return vehicle;
}
