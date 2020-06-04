const config = {
  profiles: {
    // Example profile
    webapp: {
      name: 'TIDAL Web App',
      parameters: {
        connectivity: 'Cable',
        location: 'Dulles:Chrome',
        runs: 1,
        url: 'https://listen.tidal.com'
      },
      budgets: [
        {
          metric: 'SpeedIndex',
          max: 3000
        },
        {
          metric: 'loadTime',
          max: 5000
        },
        {
          metric: 'fullyLoaded',
          max: 10000
        }
      ]
    },
    stage: {
      name: 'TIDAL Web App',
      parameters: {
        connectivity: 'Cable',
        location: 'Dulles:Chrome',
        runs: 1,
        url: 'https://listen.stage.tidal.com'
      },
      budgets: [
        {
          metric: 'SpeedIndex',
          max: 3000
        },
        {
          metric: 'loadTime',
          max: 5000
        },
        {
          metric: 'fullyLoaded',
          max: 10000
        }
      ]
    },
    website: {
      name: 'TIDAL.com',
      parameters: {
        connectivity: 'Cable',
        location: 'Dulles:Chrome',
        runs: 1,
        url: 'https://tidal.com'
      },
      budgets: [
        {
          metric: 'SpeedIndex',
          max: 3000
        },
        {
          metric: 'domInteractive',
          max: 3000
        },
        {
          metric: 'loadTime',
          max: 5000
        },
        {
          metric: 'fullyLoaded',
          max: 10000
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
