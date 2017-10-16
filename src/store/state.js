export const INITIAL_STATE = window.__INITIAL_STATE__ || {}

const state = {
  error: undefined,
  biobanks: null,
  filters: {
    countries: {
      entityTypeName: 'eu_bbmri_eric_biobanks',
      attributeName: 'country',
      label: 'Country',
      options: [],
      selectedOptions: []
    },
    material_types: {
      entityTypeName: 'eu_bbmri_eric_collections',
      attributeName: 'materials',
      label: 'Material type',
      options: [],
      selectedOptions: []
    },
    quality: {
      entityTypeName: 'eu_bbmri_eric_collections',
      attributeName: 'standards',
      label: 'Quality',
      options: [],
      selectedOptions: []
    }
  },
  search: '',
  loading: false
}

export default state