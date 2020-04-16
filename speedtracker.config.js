const config = {
  profiles: {
    // Example profile
    test: {
      name: 'Tidal test',
      parameters: {
        connectivity: 'Cable',
        location: 'London_EC2',
        runs: 5,
        url: 'https://listen.tidal.com'
      },
      budgets: [
        {
          metric: 'TTFB',
          max: 1000
        }
      ]
    }
  }
}

if (typeof window === 'object') {
  window.__SPEEDTRACKER_CONFIG = config
} else if (typeof module !== 'undefined') {
  module.exports = config
}
