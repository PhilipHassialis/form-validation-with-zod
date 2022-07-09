import create from "zustand";

const initialEmployeeData = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
  countryOfBirth: "",
  dateOfBirth: null,
  phones: [],
};

export const useEmployeeData = create((set) => ({
  employeeData: {
    ...initialEmployeeData,
  },
  setEmployeeData: (employeeData) =>
    set((state) => ({ ...state, employeeData })),
}));

export const useSelectedProducts = create((set) => ({
  selectedProducts: [],
  setSelectedProducts: (selectedProducts) =>
    set((state) => ({ ...state, selectedProducts })),
}));
