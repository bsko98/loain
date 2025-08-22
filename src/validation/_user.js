import {z} from "zod";
import { ID_REGEX, PW_REGEX } from "./_regExps";
import { isString } from "../utils";


export const userIdSchema = z.object({
    id: z.string("아이디는 반드시 문자열이어야 합니다.")
        .trim()
        .min(6, "아이디는 최소 6자 이상이어야 합니다.")
        .max(20, "아이디는 최대 20자를 넘을 수 없습니다.")
        .regex(ID_REGEX, "아이디는 영문자와 숫자만 사용 가능합니다")
})

export const userPwSchema = z.object({
    pw: z.string("비밀번호는 반드시 문자열이어야 합니다.")
        .trim()
        .min(8, "비밀번호는 최소 8자 이상이어야 합니다.")
        .max(32, "비밀번호는 최대 32자를 넘을 수 없습니다.")
        .regex(PW_REGEX, "허용되지 않은 문자가 포함되어 있습니다")
})


/**
 * id가 id 규칙에 부합하는지 검사
 * @param {string} id 검사하고자 하는 id
 * @returns {{success: boolean, message: string|undefined}} success: 검사 결과, message: 실패 시 이유
 */
export const idValidCheck = (id) => {
    const idValidCheckResult = userIdSchema.safeParse({id: id});
    if(idValidCheckResult.success === false)
        return {success: false, message: idValidCheckResult.error.issues[0].message};
    return {success: true};
}
export const idDuplicateCheck = (id) => {
    return isString(id).success;
}

/**
 * pw가 pw 규칙에 부합하는지 검사
 * @param {string} pw 검사하고자 하는 pw
 * @returns {{success: boolean, message: string|undefined}} success: 검사 결과, message: 실패 시 이유
 */
export const pwValidCheck = (pw) => {
    console.log(typeof pw)
    const pwValidCheckResult = userPwSchema.safeParse({pw: pw});
    if(pwValidCheckResult.success === false)
        return {success: false, message: pwValidCheckResult.error.issues[0].message};
    return {success: true};
}
/**
 * api key 유효성 검사
 * @param {*} apiKey 검사하고자 하는 api key
 * @returns {{success: boolean}} success: 검사 결과
 */
export const apiKeyValidCheck = (apiKey) => {
    return {success: isString(apiKey) && apiKey.length > 0};
}