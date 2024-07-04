import type { CollectionConfig } from 'payload/types'

const Speakers: CollectionConfig = {
  slug: 'speakers',
  admin: {
    useAsTitle: 'name',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
    },
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'company',
      type: 'text',
    },
    {
      name: 'twitter_link',
      type: 'text',
    },
    {
      name: 'facebook_link',
      type: 'text',
    },
    {
      name: 'description',
      type: 'text',
    },
  ],
}

export default Speakers
