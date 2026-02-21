// ============================================
// Tredits Calculation Logic
// ============================================
// 10 Tredits per tree planted
// 10 Tredits per 10kg CO2 absorbed
// 10 Tredits per 100 liters of water filtered

export const TREDITS_PER_TREE = 10;
export const TREDITS_PER_10KG_CO2 = 10;
export const CO2_KG_PER_UNIT = 10;
export const TREDITS_PER_100L_WATER = 1;
export const WATER_LITERS_PER_UNIT = 100;

export interface TreditsBreakdown {
  fromTrees: number;
  fromCO2: number;
  fromWater: number;
  total: number;
  treesPlanted: number;
  co2AbsorbedKg: number;
  waterFilteredLiters: number;
}

export function calculateTredits(
  treesPlanted: number,
  co2AbsorbedKg: number,
  waterFilteredLiters: number
): TreditsBreakdown {
  const fromTrees = treesPlanted * TREDITS_PER_TREE;
  const co2Units = Math.floor(co2AbsorbedKg / CO2_KG_PER_UNIT);
  const fromCO2 = co2Units * TREDITS_PER_10KG_CO2;
  const waterUnits = Math.floor(waterFilteredLiters / WATER_LITERS_PER_UNIT);
  const fromWater = waterUnits * TREDITS_PER_100L_WATER;
  const total = fromTrees + fromCO2 + fromWater;

  return {
    fromTrees,
    fromCO2,
    fromWater,
    total,
    treesPlanted,
    co2AbsorbedKg,
    waterFilteredLiters,
  };
}

export function formatTredits(amount: number): string {
  if (amount >= 1000000) {
    return `${(amount / 1000000).toFixed(1)}M`;
  }
  if (amount >= 1000) {
    return `${(amount / 1000).toFixed(1)}k`;
  }
  return amount.toLocaleString();
}
