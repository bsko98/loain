

/**
 * value의 타입이 문자열인지 검사
 * @param {*} value 
 * @returns value가 문자열이면 true, 아니면 false
 */
export const isString = (value) => {
    if(typeof value === "string")
        return {success: true};
    return {success: false};
}