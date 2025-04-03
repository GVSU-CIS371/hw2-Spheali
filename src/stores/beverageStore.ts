import { defineStore } from "pinia";
import tempretures from "../data/tempretures.json";
import bases from "../data/bases.json";
import creamers from "../data/creamers.json";
import syrups from "../data/syrups.json";
import { BaseBeverageType, CreamerType, SyrupType, BeverageType } from "../types/beverage.ts"

interface BeverageState {
  temps: string[],
  currentTemp: string,
  bases: BaseBeverageType[],
  currentBase: BaseBeverageType,
  creamers: CreamerType[],
  currentCream: CreamerType,
  syrups: SyrupType[],
  currentSyrup: SyrupType,
  userBev: BeverageType[]|null,
  currentBev: BeverageType|null
}

export const useBeverageStore = defineStore("BeverageStore", {
  state: () => ({
    temps: tempretures,
    currentTemp: tempretures[0],
    bases: bases,
    currentBase: bases[0],
    creamers: creamers,
    currentCream: creamers[0],
    syrups: syrups,
    currentSyrup: syrups[0],
    userBev: null,
    currentBev: null
  }),

  actions: {
    makeBeverage() {
      
    },
    showBeverage() {

    },
  },
});
