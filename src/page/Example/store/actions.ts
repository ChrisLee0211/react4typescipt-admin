export const TEST_ACTION = "TEST_ACTION"

export const testAction = (testType:any) => {
    return {
        type: TEST_ACTION,
        payload: testType
    }
}