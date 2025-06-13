import { ZodError, ZodSchema } from 'zod';
import { Logger } from './logger';

class ZodParserInstance {
  private showError(data: any, error: ZodError | any) {
    Logger.group({ collapsed: true, label: `Parse error` })
      .log('%c Данные', 'color: white; background-color: blue;', data)
      .log('%c Схема', 'color: white; background-color: blue;', error.errors)
      .groupEnd();
  }
  async parse(schema: ZodSchema, data: any) {
    try {
      await schema.parseAsync(data);
    } catch (error: ZodError | any) {
      this.showError(data, error);
    }
  }
}
export const ZodParser = new ZodParserInstance();
