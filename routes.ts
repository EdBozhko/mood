import routes from '@fuelrats/next-named-routes'

const { Link, Router, useRouter, withRouter } = routes()
  .add('home', '/')
  .add('forenlinks', '/forenlinks')
  .add('seoagentur', '/seo-agentur')
  .add('content', '/content')
  .add('pbninks', '/pbn-links')
  .add('insights', '/insights')
  .add('impressum', '/impressum')
  .add('datenschutz', '/datenschutz')
// .add('stylequide', '/stylequide')

export { Link, Router, useRouter, withRouter }
