import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  invoice: {
    contact_information: {
      company_name: "",
      customer_name: "",
      address_headquarters: "",
      city: "",
      postal_code: "",
      country: "",
      company_vat_number: "",
      phone_number_office: "",
      phone_number_mobile: "",
      email: "",
    },
    company_information :{
      company_name: "",
      address_headquarters: "",
      city: "",
      postal_code: "",
      country: "",
      company_vat_number: "",
      phone_number_office: "",
      phone_number_mobile: "",
      iban_number: "",
      email: "",
        },
        construction_site : {
          name_of_site: "",
          address: "",
          postal_code: "",
          country: "",
          sitedirector_contact: "",
          sitedirector_email: "",
          phone_office: "",
          phone_mobile: "",
          gps_tracker: [],
        },
    // construction_site: [
    //   {
    //     name: "",
    //     address: "",
    //     postal_code: "",
    //     country: "",
    //     sitedirector_contact: "",
    //     sitedirector_email: "",
    //     phone_office: "",
    //     phone_mobile: "",
    //     gps_tracker: [],
    //   },
    // ],
    product_information: {
      inverters: "",
      solar_panel: "",
      fixation_type: "",
      cable: "",
      cable_length: "",
      electrical_board: "",
      option: "",
      ground_opening_size: "",
      earthworks: "",
      driver_transformer: "",
      waterproof_coating: "",
      technical_studies: "",
      construction_permit_fees: "",
      engine_rental: "",
      dumpster: "",
      complete_kit: "",
      complete_warehouse: "",
      carport: "",
      workforce: "",
    },
    // financial_statement: {
    //   deposit: "",
    //   down_payment: "",
    // },
    financial_statement: {
      deposit: "",
      down_payment: "",
      monthly_payment: "",
      total_payment: "",
    },
  },
  uuids: {
    administration_files: [],
    sky_picture: "",
    site_pictures: [],
    videos: [],
  },
};

const proposalSlice = createSlice({
  name: "proposalForm",
  initialState,
  reducers: {
    contact_informationUpdate: (state, action) => {
      const data = action.payload;
      console.log(data);
      state.invoice.contact_information = data
    },
    company_informationUpdate: (state, action) => {
      const data = action.payload;
      state.invoice.company_information = data
    },
    construction_siteUpdate: (state, action) => {
      const data = action.payload;
      state.invoice.construction_site = data
    },
    product_informationUpdate: (state, action) => {
      const data = action.payload;
      state.invoice.product_information = data
    },
    financial_statementUpdate: (state, action) => {
      const data = action.payload;
      state.invoice.financial_statement = data
    },
    clearForm: () => {
      return initialState
    },
  },
});

export const {clearForm,construction_siteUpdate, contact_informationUpdate,product_informationUpdate,company_informationUpdate,financial_statementUpdate } =
  proposalSlice.actions;

export default proposalSlice.reducer;
