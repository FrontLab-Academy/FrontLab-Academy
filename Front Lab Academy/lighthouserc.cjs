module.exports = {
  ci: {
    collect: {
      startServerCommand: 'npm run preview -- --host 127.0.0.1 --port 4173',
      startServerReadyPattern: 'Local:',
      startServerReadyTimeout: 30000,
      numberOfRuns: 1,
      url: [
        'http://127.0.0.1:4173/',
        'http://127.0.0.1:4173/trilhas.html',
        'http://127.0.0.1:4173/exercicios.html',
        'http://127.0.0.1:4173/mini-ide.html',
        'http://127.0.0.1:4173/sobre.html'
      ],
      settings: {
        chromeFlags: '--no-sandbox'
      }
    },
    assert: {
      assertions: {
        'categories:accessibility': ['error', { minScore: 0.9 }],
        'categories:performance': ['warn', { minScore: 0.65 }],
        'categories:best-practices': ['warn', { minScore: 0.8 }],
        'categories:seo': ['warn', { minScore: 0.8 }]
      }
    },
    upload: {
      target: 'filesystem',
      outputDir: './lhci-reports'
    }
  }
}
