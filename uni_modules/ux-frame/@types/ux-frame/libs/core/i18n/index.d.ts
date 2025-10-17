import type { Composer } from './types';
type I18nMode = "legacy" | "composition";
type VuePlugin = any;
export declare class UvueI18n {
    private __global;
    private __scope;
    constructor(options?: UTSJSONObject, root?: Composer | null);
    get mode(): I18nMode;
    get global(): Composer;
    get availableLocales(): string[];
    dispose(): void;
    get install(): VuePlugin;
}
export declare class Locale {
    install(options?: UTSJSONObject): UvueI18n;
    useI18n(options?: UTSJSONObject): Composer;
    i18n(): Composer;
}
export {};
