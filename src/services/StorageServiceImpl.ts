
type StorageType = "localStorage" | "sessionStorage";

export class StorageService {
  private storage: Storage;
  private maxItems: number;

  constructor(
    storageType: StorageType = "localStorage",
    maxItems: number = 10
  ) {
    this.storage =
      storageType === "sessionStorage" ? sessionStorage : localStorage;
    this.maxItems = maxItems;
  }

  private getKeys(): string[] {
    const keys = this.storage.getItem("storageServiceKeys");
    return keys ? JSON.parse(keys) : [];
  }

  private setKeys(keys: string[]): void {
    this.storage.setItem("storageServiceKeys", JSON.stringify(keys));
  }

  addItem<T>(key: string, value: T): void {
    let keys = this.getKeys();
    if (keys.includes(key.toLocaleLowerCase())) {
      this.removeItem(key);
      keys = this.getKeys();
    }
    if (keys.length >= this.maxItems) {
      const oldestKey = keys.shift();
      if (oldestKey) {
        this.storage.removeItem(oldestKey);
      }
    }
    this.storage.setItem(key.toLocaleLowerCase(), JSON.stringify(value));

    if (!keys.includes(key.toLocaleLowerCase())) keys.push(key.toLowerCase());
    this.setKeys(keys);
  }

  getItem<T>(key: string): T | null {
    const value = this.storage.getItem(key);
    return value ? JSON.parse(value) : null;
  }

  getItemKeys(): string[] {
    const result = this.storage.getItem("storageServiceKeys");
    return result ? JSON.parse(result) : [];
  }

  removeItem(key: string): void {
    this.storage.removeItem(key);
    const keys = this.getKeys().filter((k) => k !== key);
    this.setKeys(keys);
  }

  clear(): void {
    const keys = this.getKeys();
    keys.forEach((key) => this.storage.removeItem(key));
    this.storage.removeItem("storageServiceKeys");
  }
}
