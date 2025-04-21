// Utilitiest
import { defineStore } from "pinia";

export const useAppStore = defineStore("app", {
  state: () => ({
    theme: localStorage.getItem("theme") || "light",
    colorPickerDialog: false,
  }),
  actions: {
    setTheme(newTheme: string) {
      this.theme = newTheme;
      localStorage.setItem("theme", newTheme);
    },
  },
});

export default useAppStore;
