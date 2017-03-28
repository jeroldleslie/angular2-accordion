export interface IData {
  build_id: string,
  owner: string,
  timestamp: string,
  state: string,
  type: string,
  result: string,
  result_detail: string,
  metrics: {
    process_completed:number,
    test: {
      value: number,
      state: string
    },
    maintainability: {
      value: number,
      state: string
    },
    security: {
      value: number,
      state: string
    },
    workmanship: {
      value: number,
      state: string
    }
  },
  build: {
    timestamp: string,
    process_completed: number
  },
  unit_test: {
    pass: number,
    failed: number,
    code_covered: number
    process_completed: number
  },
  functional_test: {
    pass: number,
    failed: number,
    code_covered: number,
    process_completed: number
  }
}