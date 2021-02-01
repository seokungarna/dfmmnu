module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
  title: 'Din guide till att anlita hantverkare', // Navigation and Site Title
  titleAlt: 'Tips om takläggning, snickerier, elektrikerjobb, etc.', // Title for JSONLD
  description: 'En site dedikerad att navigera dig runt den djungel vi kallar hantverk',
  url: 'http://dfmm.nu', // Domain of your site. No trailing slash!
  siteUrl: 'http://dfmm.nu', // url + pathPrefix
  siteLanguage: 'se', // Language Tag on <html> element
  logo: 'static/logo/logon.jpg', // Used for SEO
  banner: 'static/logo/banner.png',
  // JSONLD / Manifest
  favicon: 'static/logo/favicon.png', // Used for manifest favicon generation
  shortName: 'Hantverk', // shortname for manifest. MUST be shorter than 12 characters
  author: 'Hantverkarn', // Author for schemaORGJSONLD
  themeColor: '#3e7bf2',
  backgroundColor: '#d3e0ff',
  twitter: '@hantverkarn', // Twitter Username
};
