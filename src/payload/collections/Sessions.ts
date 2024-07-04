import type { CollectionConfig } from 'payload/types'

const Sessions: CollectionConfig = {
  slug: 'sessions',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'descriptions',
      type: 'text',
    },
    {
      name: 'start_date',
      type: 'date',
      admin: {
        date: {
          pickerAppearance: 'dayOnly',
          displayFormat: 'd MMM yyy',
        },
      },
    },
    {
      name: 'start_time',
      type: 'date',
      admin: {
        date: {
          pickerAppearance: 'timeOnly',
          displayFormat: 'h:mm:ss a',
        },
      },
    },

    {
      name: 'end_date',
      type: 'date',
      admin: {
        date: {
          pickerAppearance: 'dayOnly',
          displayFormat: 'd MMM yyy',
        },
      },
    },
    {
      name: 'end_time',
      type: 'date',
      admin: {
        date: {
          pickerAppearance: 'timeOnly',
          displayFormat: 'h:mm:ss a',
        },
      },
    },
  ],
}

export default Sessions
