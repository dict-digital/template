// app.config.ts
export default defineAppConfig({
  theme: {
    lightColor: '#df841c',
    darkColor: '#ffd91c'
  },
  siteName: 'template - dict.digital',
  copyRight: '2026 dict.digital',
  githubLink: 'https://github.com/dict-digital/template',
  i18n: {
    search: 'Search',
    title: 'Title',
    full_text: 'Full',
    color_mode: {
      name: 'Color Mode',
      system: 'System',
      light: 'Light',
      dark: 'Dark'
    },
    search_component: {
      no_result: 'Result not found',
      searching: 'Searching...',
      len: {
        before: 'Showing',
        after: 'results'
      },
      type_to_search: 'Type something to search',
      all: 'Run full text retrieval'
    },
    site_map: 'Sitemap',
    display_markdown: 'View as Markdown',
    edit_this_page: 'Edit this page',
    not_found_title: 'Not Found',
    not_found_error: 'Still loading or content is not existing.'
  }
});
