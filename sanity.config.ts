import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION!

export default defineConfig({
  basePath : '/admin',
  name: 'default',
  title: 'amazon-ecommerce',

  projectId,
  dataset,
  apiVersion,

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
