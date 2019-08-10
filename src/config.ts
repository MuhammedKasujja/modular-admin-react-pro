interface Config {
  navigationType: 'hash' | 'history'
  api: {
    baseUrl: string
    useSampleData?: boolean
  }
}

const config: Config = {
  navigationType: 'hash',
  api: {
    baseUrl: '',
    useSampleData: true,
  },
}

export default config