import Welcome from './Welcome.vue'

export default {
  title: '01. Guide | a) Willkommen',
}

export const toStorybook = () => Welcome
toStorybook.story = { name: 'bei Storybook' }
