import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  invoice: {
    contact_information: {
      company_name: "",
      customer_name: "",
      city: "",
      postal_code: "",
      country: "",
      phone_number_office: "",
      phone_number_mobile: "",
      email: "",
    },
    company_information: {
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
      annual_number_report: [],
      recto_and_verse_link: [],
      construction_permit: [],
      electricity_bill: [],
    },
    // construction_site: {
    //   name_of_site: "",
    //   address: "",
    //   postal_code: "",
    //   country: "",
    //   // sitedirector_contact: "",
    //   sitedirector_email: "",
    //   phone_office: "",
    //   phone_mobile: "",
    //   gps_tracker: [],
    // },
    construction_site: [
      {
        name_of_site: "",
        address: "",
        postal_code: "",
        country: "",
        sitedirector_contact: "",
        sitedirector_email: "",
        phone_office: "",
        phone_mobile: "",
        gps_tracker: [],
        site_pictures: [],
        videos: [],
      },
    ],
    product_information: {
      inverters: "",
      solar_panel: "",
      fixation_type: "",
      cable: "",
      // cable_length: "",
      electrical_board: "",
      // option: "",
      ground_opening_size: "",
      earthworks: "",
      driver_transformer: "",
      waterproof_coating: "",
      technical_studies: "",
      construction_permit_fees: "",
      engine_rental: "",
      dumpster: "",
      // complete_kit: "",
      // complete_warehouse: "",
      // carport: "",
      workforce: "",
    },
    financial_statement: {
      deposit: "",
      down_payment: "",
      monthly_payment: "",
      total_payment: "",
      interest:"",
      number_of_months:""
    },
  },
  uuids: {
    administration_files: [],
    sky_picture: [],
    site_pictures: [],
    videos: [],
  },
};

const proposalSlice = createSlice({
  name: "proposalForm",
  initialState,
  reducers: {
    contact_informationUpdate: (state, action) => {
      state.invoice.contact_information = {
        ...state.invoice.contact_information,
        ...action.payload,
      };
    },
    company_informationUpdate: (state, action) => {
      state.invoice.company_information = {
        ...state.invoice.company_information,
        ...action.payload,
      };
    },
    construction_siteUpdate: (state, action) => {
      const updatedSites = state.invoice.construction_site.map(
        (site, index) => {
          const update = action.payload.find((upd) => upd.index === index);
          return update ? { ...site, ...update } : site;
        }
      );
      const newSites = action.payload.filter(
        (upd) => upd.index === undefined || upd.index === null
      );
      state.invoice.construction_site = [...updatedSites, ...newSites];
    },

    product_informationUpdate: (state, action) => {
      state.invoice.product_information = {
        ...state.invoice.product_information,
        ...action.payload,
      };
    },
    financial_statementUpdate: (state, action) => {
      state.invoice.financial_statement = {
        ...state.invoice.financial_statement,
        ...action.payload,
      };
    },
    uuidUpdate: (state, action) => {
      const data = action.payload;

      state.uuids = {
        ...state.uuids,
        administration_files: [
          ...state.uuids.administration_files,
          ...(data.administration_files || []),
        ],
        sky_picture: [...state.uuids.sky_picture, ...(data.sky_picture || [])],
        site_pictures: [
          ...state.uuids.site_pictures,
          ...(data.site_pictures || []),
        ],
        videos: [...state.uuids.videos, ...(data.videos || [])],
      };
    },
    clearForm: () => {
      return initialState;
    },
  },
});

export const {
  clearForm,
  construction_siteUpdate,
  contact_informationUpdate,
  product_informationUpdate,
  company_informationUpdate,
  financial_statementUpdate,
  uuidUpdate,
} = proposalSlice.actions;

export default proposalSlice.reducer;
