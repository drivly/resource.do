export const api = {
  icon: '🚀',
  name: 'resource.do',
  description: 'Cloudflare Worker Template',
  url: 'https://resource.do/api',
  type: 'https://apis.do/primitives',
  endpoints: {
    listCategories: 'https://resource.do/api',
    getCategory: 'https://resource.do/:type',
  },
  site: 'https://resource.do',
  login: 'https://resource.do/login',
  signup: 'https://resource.do/signup',
  subscribe: 'https://resource.do/subscribe',
  repo: 'https://github.com/drivly/resource.do',
}

export const gettingStarted = [
  `If you don't already have a JSON Viewer Browser Extension, get that first:`,
  `https://extensions.do`,
]

export const examples = {
  listItems: 'https://resource.do/worker',
}

export default {
  fetch: async (req, env) => {
    const { user, hostname, pathname, rootPath, pathSegments, query } = await env.CTX.fetch(req).then(res => res.json())
    if (rootPath) return json({ api, gettingStarted, examples, user })
    
    // TODO: Implement this
    const [ resource, id ] = pathSegments
    const data = { resource, id, hello: user.city }
    
    return json({ api, data, user })
  }
}

const json = obj => new Response(JSON.stringify(obj, null, 2), { headers: { 'content-type': 'application/json; charset=utf-8' }})
