import { z } from 'zod';
import { ID_REGEX, PW_REGEX } from './_regExps';
import { extractZodMessage, isString } from '../utils';
import {
  ID_MAX_LENGTH,
  ID_MIN_LENGTH,
  PW_MAX_LENGTH,
  PW_MIN_LENGTH,
} from '../constants/validation.constants';

export const userIdSchema = z.object({
  id: z
    .string('아이디는 반드시 문자열이어야 합니다.')
    .min(ID_MIN_LENGTH, `아이디는 최소 ${ID_MIN_LENGTH}자 이상이어야 합니다.`)
    .max(ID_MAX_LENGTH, `아이디는 최대 ${ID_MAX_LENGTH}자를 넘을 수 없습니다.`)
    .regex(ID_REGEX, '아이디는 영문자와 숫자만 사용 가능합니다'),
});

export const userPwSchema = z.object({
  pw: z
    .string('비밀번호는 반드시 문자열이어야 합니다.')
    .min(PW_MIN_LENGTH, `비밀번호는 최소 ${PW_MIN_LENGTH}자 이상이어야 합니다.`)
    .max(
      PW_MAX_LENGTH,
      `비밀번호는 최대 ${PW_MAX_LENGTH}자를 넘을 수 없습니다.`
    )
    .regex(PW_REGEX, '비밀번호에 허용되지 않은 문자가 포함되어 있습니다'),
});

/**
 * id가 id 규칙에 부합하는지 검사
 * @param {string} id 검사하고자 하는 id
 * @returns {{success: true, id: string}} success: 검사 결과, id: 검사를 통과한 id
 * @returns {{success: false, message: string}} success: 검사 결과, message: 실패 이유
 */
export const idValidCheck = id => {
  const idValidCheckResult = userIdSchema.safeParse({ id: id });
  if (idValidCheckResult.success === false) {
    return {
      success: false,
      message: extractZodMessage(idValidCheckResult.error),
    };
  }
  return { success: true, id: idValidCheckResult.data.id };
};
export const idDuplicateCheck = id => {
  return isString(id).success;
};

/**
 * pw가 pw 규칙에 부합하는지 검사
 * @param {string} pw 검사하고자 하는 pw
 * @returns {{success: true, pw: string}} success: 검사 결과, pw: 검사를 통과한 pw
 * @returns {{success: false, message: string}} success: 검사 결과, message: 실패 이유
 */
export const pwValidCheck = pw => {
  const pwValidCheckResult = userPwSchema.safeParse({ pw: pw });
  if (pwValidCheckResult.success === false) {
    return {
      success: false,
      message: extractZodMessage(pwValidCheckResult.error),
    };
  }
  return { success: true, pw: pwValidCheckResult.data.pw };
};
/**
 * api key 유효성 검사
 * @param {*} apiKey 검사하고자 하는 api key
 * @returns {{success: boolean}} success: 검사 결과
 */
export const apiKeyValidCheck = apiKey => {
  return { success: isString(apiKey) && apiKey.length > 0 };
};
